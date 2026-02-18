// ============================================================
// Repertoire - Organ Playlist & Playback Library
// ============================================================
// Usage: Repertoire.init({ playNote, stopNote, stopAllNotes, ensureAudio, applyRegistration })
// - playNote(division, midi)   : Start a note on the given division
// - stopNote(division, midi)   : Stop a note on the given division
// - stopAllNotes()             : Stop all currently sounding notes
// - ensureAudio()              : Ensure audio context is running (optional)
// - applyRegistration(reg)     : Apply a registration object (optional)

window.Repertoire = (function() {
    'use strict';

    // --- State ---
    const PLAYLIST = [];
    const ABBR_PLAYLIST = [];
    let FULL_PLAYLIST = null;
    let isFullVersion = false;
    let adapter = {};

    const playback = {
        playing: false,
        paused: false,
        currentTrack: -1,
        startTime: 0,
        pauseTime: 0,
        timeouts: [],
        totalDuration: 0,
        progressRAF: null,
    };

    const PIECE_NAMES = [
        'PIECE_BACH_TOCCATA', 'PIECE_BACH_LITTLE_FUGUE', 'PIECE_JESU_JOY', 'PIECE_WACHET_AUF',
        'PIECE_PRELUDE_C', 'PIECE_AIR_G_STRING', 'PIECE_PACHELBEL_CANON', 'PIECE_TRUMPET_VOLUNTARY',
        'PIECE_PASSACAGLIA', 'PIECE_SHEEP_SAFELY', 'PIECE_PRELUDE_A_MINOR', 'PIECE_NUN_KOMM',
        'PIECE_WEDDING_MARCH', 'PIECE_BRIDAL_CHORUS', 'PIECE_QUEEN_OF_SHEBA', 'PIECE_PURCELL_TRUMPET',
        'PIECE_WIDOR_TOCCATA', 'PIECE_POMP_CIRCUMSTANCE', 'PIECE_ALBINONI_ADAGIO', 'PIECE_BOELLMANN_TOCCATA',
        'PIECE_HORNPIPE', 'PIECE_WESTMINSTER', 'PIECE_ORGAN_SYMPHONY', 'PIECE_BUXTEHUDE',
        'PIECE_BACH_FANTASY_G', 'PIECE_BACH_TOCCATA_C', 'PIECE_BACH_ST_ANNE',
        'PIECE_BACH_DULCI_JUBILO', 'PIECE_BACH_KOMM_SUSSER',
        'PIECE_FRANCK_CHORAL3', 'PIECE_FRANCK_HEROIQUE', 'PIECE_VIERNE_FINAL',
        'PIECE_DUPRE_PRELUDE_B', 'PIECE_WIDOR_ALLEGRO6',
        'PIECE_MENDELSSOHN_SONATA1', 'PIECE_LISZT_BACH',
        'PIECE_REGER_PASSACAGLIA', 'PIECE_RHEINBERGER_SONATA4',
        'PIECE_HANDEL_CUCKOO', 'PIECE_SWEELINCK_JUNGES',
        'PIECE_MESSIAEN_APPARITION', 'PIECE_GUILMANT_MARCH'
    ];

    const FULL_FILES = [
        'pieces/full/full-bach-major.js', 'pieces/full/full-bach-chorales.js',
        'pieces/full/full-baroque-classics.js', 'pieces/full/full-wedding.js',
        'pieces/full/full-romantic.js', 'pieces/full/full-baroque-diverse.js'
    ];

    const ABBR_FILES = [
        'pieces/bach-toccata.js', 'pieces/bach-chorales.js',
        'pieces/bach-keyboard.js', 'pieces/pachelbel-clarke.js',
        'pieces/bach-organ-2.js', 'pieces/wedding-ceremonial.js',
        'pieces/romantic-works.js', 'pieces/baroque-diverse.js',
        'pieces/bach-major-works.js', 'pieces/french-romantic.js',
        'pieces/german-romantic.js', 'pieces/early-and-modern.js'
    ];

    // --- CSS ---
    const CSS = `
        .rp-toggle {
            position: relative;
            z-index: 1;
            display: block;
            margin: 6px auto;
            background: linear-gradient(180deg, #3d2b1a, #2a1a0e);
            border: 1px solid #5a3d20;
            color: #d4af37;
            padding: 6px 20px;
            border-radius: 4px;
            font-family: 'Georgia', serif;
            font-size: 12px;
            letter-spacing: 2px;
            cursor: pointer;
            transition: all 0.2s;
        }
        .rp-toggle:hover { background: linear-gradient(180deg, #4a3520, #3d2b1a); }
        .rp-panel {
            position: relative;
            z-index: 1;
            max-width: 1200px;
            margin: 10px auto;
            padding: 0 15px;
        }
        .rp-box {
            background: linear-gradient(180deg, #2a1f14, #1e150d);
            border: 1px solid #4a3520;
            border-radius: 8px;
            padding: 12px;
        }
        .rp-header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 8px;
        }
        .rp-header h2 {
            font-size: 14px;
            color: #d4af37;
            letter-spacing: 2px;
            text-transform: uppercase;
            font-weight: normal;
            margin: 0;
        }
        .rp-transport {
            display: flex;
            gap: 6px;
            align-items: center;
        }
        .rp-btn {
            background: linear-gradient(180deg, #3d2b1a, #2a1a0e);
            border: 1px solid #5a3d20;
            color: #d4af37;
            width: 34px;
            height: 28px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.2s;
        }
        .rp-btn:hover { background: linear-gradient(180deg, #4a3520, #3d2b1a); }
        .rp-btn.active { background: linear-gradient(180deg, #1a5a1a, #003300); border-color: #44ff44; color: #88ff88; }
        .rp-version {
            display: flex;
            align-items: center;
            gap: 8px;
            margin: 8px 0 4px;
            font-size: 11px;
            color: #a89878;
        }
        .rp-version label { cursor: pointer; transition: color 0.2s; margin: 0; }
        .rp-version label:hover { color: #d4af37; }
        .rp-version label.active { color: #d4af37; font-weight: bold; }
        .rp-switch {
            position: relative;
            width: 36px; height: 18px;
            background: #2a1a0e;
            border: 1px solid #5a3d20;
            border-radius: 9px;
            cursor: pointer;
            transition: background 0.3s;
        }
        .rp-switch.on { background: #1a4a1a; border-color: #44aa44; }
        .rp-switch-thumb {
            position: absolute;
            top: 2px; left: 2px;
            width: 12px; height: 12px;
            background: #d4af37;
            border-radius: 50%;
            transition: left 0.2s;
        }
        .rp-switch.on .rp-switch-thumb { left: 20px; }
        .rp-loading {
            font-size: 10px;
            color: #8A9A5B;
            font-style: italic;
            margin-left: 6px;
        }
        .rp-now {
            font-size: 11px;
            color: #d4af37;
            text-align: center;
            margin-bottom: 6px;
            min-height: 16px;
            letter-spacing: 1px;
        }
        .rp-progress {
            margin: 8px 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .rp-bar-outer {
            flex: 1;
            height: 6px;
            background: #1a1008;
            border-radius: 3px;
            border: 1px solid #3a2a18;
            overflow: hidden;
            cursor: pointer;
        }
        .rp-bar-inner {
            height: 100%;
            width: 0%;
            background: linear-gradient(90deg, #d4af37, #a08020);
            border-radius: 3px;
            transition: width 0.3s;
        }
        .rp-time {
            font-size: 10px;
            color: #a08c6a;
            min-width: 80px;
            text-align: right;
            font-family: monospace;
        }
        .rp-tracks {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 4px;
            max-height: 200px;
            overflow-y: auto;
        }
        .rp-tracks::-webkit-scrollbar { width: 6px; }
        .rp-tracks::-webkit-scrollbar-track { background: #1a1008; }
        .rp-tracks::-webkit-scrollbar-thumb { background: #4a3520; border-radius: 3px; }
        .rp-track {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 5px 8px;
            background: rgba(20,14,8,0.6);
            border: 1px solid transparent;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.2s;
        }
        .rp-track:hover { border-color: #4a3520; background: rgba(40,28,16,0.6); }
        .rp-track.active { border-color: #d4af37; background: rgba(60,40,20,0.5); }
        .rp-track.playing { border-color: #44ff44; }
        .rp-track-num {
            font-size: 10px;
            color: #6a5a40;
            width: 18px;
            text-align: center;
            flex-shrink: 0;
        }
        .rp-track.playing .rp-track-num { color: #88ff88; }
        .rp-track-info { flex: 1; min-width: 0; }
        .rp-track-title {
            font-size: 11px;
            color: #e8dcc8;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        .rp-track-composer {
            font-size: 9px;
            color: #6a5a40;
        }
        .rp-track-dur {
            font-size: 9px;
            color: #6a5a40;
            flex-shrink: 0;
        }
    `;

    // --- HTML ---
    function createHTML() {
        const toggleBtn = document.createElement('button');
        toggleBtn.className = 'rp-toggle';
        toggleBtn.textContent = 'Repertoire';
        toggleBtn.addEventListener('click', togglePanel);

        const panel = document.createElement('div');
        panel.className = 'rp-panel';
        panel.id = 'rpPanel';
        panel.style.display = 'none';
        panel.innerHTML = `
            <div class="rp-box">
                <div class="rp-header">
                    <h2>Classical Repertoire</h2>
                    <div class="rp-transport">
                        <button class="rp-btn" id="rpPrev" title="Previous">&#9198;</button>
                        <button class="rp-btn" id="rpPlay" title="Play">&#9654;</button>
                        <button class="rp-btn" id="rpStop" title="Stop">&#9632;</button>
                        <button class="rp-btn" id="rpNext" title="Next">&#9197;</button>
                    </div>
                </div>
                <div class="rp-version">
                    <label id="rpLblAbbr" class="active">Excerpts</label>
                    <div class="rp-switch" id="rpSwitch">
                        <div class="rp-switch-thumb"></div>
                    </div>
                    <label id="rpLblFull">Full-Length</label>
                    <span class="rp-loading" id="rpLoading"></span>
                </div>
                <div class="rp-now" id="rpNow"></div>
                <div class="rp-progress">
                    <div class="rp-bar-outer" id="rpBarOuter">
                        <div class="rp-bar-inner" id="rpBarInner"></div>
                    </div>
                    <span class="rp-time" id="rpTime">0:00 / 0:00</span>
                </div>
                <div class="rp-tracks" id="rpTracks"></div>
            </div>
        `;

        return { toggleBtn, panel };
    }

    // --- Inject CSS ---
    function injectCSS() {
        const style = document.createElement('style');
        style.textContent = CSS;
        document.head.appendChild(style);
    }

    // --- UI Functions ---
    function togglePanel() {
        const panel = document.getElementById('rpPanel');
        const btn = document.querySelector('.rp-toggle');
        if (panel.style.display === 'none') {
            panel.style.display = 'block';
            btn.textContent = 'Hide Repertoire';
        } else {
            panel.style.display = 'none';
            btn.textContent = 'Repertoire';
        }
    }

    function buildUI() {
        const container = document.getElementById('rpTracks');
        if (!container) return;
        container.innerHTML = '';
        PLAYLIST.forEach(function(piece, i) {
            var dur = getPieceDuration(piece);
            var item = document.createElement('div');
            item.className = 'rp-track';
            item.dataset.index = i;
            item.innerHTML =
                '<span class="rp-track-num">' + (i + 1) + '</span>' +
                '<div class="rp-track-info">' +
                    '<div class="rp-track-title">' + piece.title + '</div>' +
                    '<div class="rp-track-composer">' + piece.composer + (piece.catalog ? ' \u2022 ' + piece.catalog : '') + '</div>' +
                '</div>' +
                '<span class="rp-track-dur">' + formatTime(dur) + '</span>';
            item.addEventListener('click', function() { selectAndPlay(i); });
            container.appendChild(item);
        });
    }

    function updateHighlights() {
        document.querySelectorAll('.rp-track').forEach(function(el, i) {
            el.classList.toggle('active', i === playback.currentTrack);
            el.classList.toggle('playing', i === playback.currentTrack && playback.playing && !playback.paused);
        });
    }

    // --- Utilities ---
    function getPieceDuration(piece) {
        if (!piece.events || piece.events.length === 0) return 0;
        var maxTime = 0;
        piece.events.forEach(function(e) {
            var end = e.t + (e.dur || 0);
            if (end > maxTime) maxTime = end;
        });
        return (maxTime / piece.tempo) * 60;
    }

    function formatTime(secs) {
        var m = Math.floor(secs / 60);
        var s = Math.floor(secs % 60);
        return m + ':' + (s < 10 ? '0' : '') + s;
    }

    // --- Playback ---
    function selectAndPlay(index) {
        stop();
        playback.currentTrack = index;
        updateHighlights();
        startPlayback();
    }

    function playPause() {
        if (playback.playing && !playback.paused) {
            pause();
        } else if (playback.paused) {
            resume();
        } else {
            if (playback.currentTrack < 0) playback.currentTrack = 0;
            startPlayback();
        }
    }

    function stop() {
        playback.timeouts.forEach(function(t) { clearTimeout(t); });
        playback.timeouts = [];
        playback.playing = false;
        playback.paused = false;
        playback.pauseTime = 0;
        if (adapter.stopAllNotes) adapter.stopAllNotes();
        if (playback.progressRAF) cancelAnimationFrame(playback.progressRAF);
        playback.progressRAF = null;
        var btn = document.getElementById('rpPlay');
        if (btn) { btn.innerHTML = '&#9654;'; btn.classList.remove('active'); }
        var bar = document.getElementById('rpBarInner');
        if (bar) bar.style.width = '0%';
        var time = document.getElementById('rpTime');
        if (time) time.textContent = '0:00 / 0:00';
        var now = document.getElementById('rpNow');
        if (now) now.textContent = '';
        updateHighlights();
    }

    function next() {
        if (PLAYLIST.length === 0) return;
        stop();
        playback.currentTrack = (playback.currentTrack + 1) % PLAYLIST.length;
        updateHighlights();
        startPlayback();
    }

    function prev() {
        if (PLAYLIST.length === 0) return;
        stop();
        playback.currentTrack = (playback.currentTrack - 1 + PLAYLIST.length) % PLAYLIST.length;
        updateHighlights();
        startPlayback();
    }

    function startPlayback() {
        var piece = PLAYLIST[playback.currentTrack];
        if (!piece || !piece.events || piece.events.length === 0) return;

        if (adapter.ensureAudio) adapter.ensureAudio();
        if (adapter.applyRegistration) adapter.applyRegistration(piece.registration);

        var bps = piece.tempo / 60;
        playback.totalDuration = getPieceDuration(piece);
        playback.startTime = performance.now() / 1000;
        playback.playing = true;
        playback.paused = false;

        var btn = document.getElementById('rpPlay');
        if (btn) { btn.innerHTML = '&#10074;&#10074;'; btn.classList.add('active'); }
        var now = document.getElementById('rpNow');
        if (now) now.textContent = piece.composer + ' \u2014 ' + piece.title;
        updateHighlights();

        playback.timeouts = [];
        piece.events.forEach(function(evt) {
            var onTime = (evt.t / bps) * 1000;
            var offTime = ((evt.t + evt.dur) / bps) * 1000;

            playback.timeouts.push(setTimeout(function() {
                if (!playback.playing || playback.paused) return;
                adapter.playNote(evt.div, evt.midi);
            }, onTime));

            playback.timeouts.push(setTimeout(function() {
                if (!playback.paused) adapter.stopNote(evt.div, evt.midi);
            }, offTime));
        });

        playback.timeouts.push(setTimeout(function() {
            if (!playback.playing) return;
            if (playback.currentTrack < PLAYLIST.length - 1) {
                playback.currentTrack++;
                playback.playing = false;
                startPlayback();
            } else {
                stop();
            }
        }, playback.totalDuration * 1000 + 500));

        updateProgress();
    }

    function pause() {
        playback.paused = true;
        playback.pauseTime = performance.now() / 1000 - playback.startTime;
        playback.timeouts.forEach(function(t) { clearTimeout(t); });
        playback.timeouts = [];
        if (adapter.stopAllNotes) adapter.stopAllNotes();
        var btn = document.getElementById('rpPlay');
        if (btn) { btn.innerHTML = '&#9654;'; btn.classList.remove('active'); }
        if (playback.progressRAF) cancelAnimationFrame(playback.progressRAF);
    }

    function resume() {
        var piece = PLAYLIST[playback.currentTrack];
        if (!piece) return;

        var bps = piece.tempo / 60;
        var resumeOffset = playback.pauseTime;
        playback.startTime = performance.now() / 1000 - resumeOffset;
        playback.paused = false;

        var btn = document.getElementById('rpPlay');
        if (btn) { btn.innerHTML = '&#10074;&#10074;'; btn.classList.add('active'); }

        playback.timeouts = [];
        piece.events.forEach(function(evt) {
            var onTimeSec = evt.t / bps;
            var offTimeSec = (evt.t + evt.dur) / bps;

            if (offTimeSec > resumeOffset) {
                var onDelay = Math.max(0, (onTimeSec - resumeOffset) * 1000);
                var offDelay = Math.max(0, (offTimeSec - resumeOffset) * 1000);

                if (onTimeSec >= resumeOffset) {
                    playback.timeouts.push(setTimeout(function() {
                        if (!playback.playing || playback.paused) return;
                        adapter.playNote(evt.div, evt.midi);
                    }, onDelay));
                } else {
                    adapter.playNote(evt.div, evt.midi);
                }
                playback.timeouts.push(setTimeout(function() {
                    if (!playback.paused) adapter.stopNote(evt.div, evt.midi);
                }, offDelay));
            }
        });

        var remaining = (playback.totalDuration - resumeOffset) * 1000 + 500;
        playback.timeouts.push(setTimeout(function() {
            if (!playback.playing) return;
            if (playback.currentTrack < PLAYLIST.length - 1) {
                playback.currentTrack++;
                playback.playing = false;
                startPlayback();
            } else {
                stop();
            }
        }, remaining));

        updateProgress();
    }

    function updateProgress() {
        if (!playback.playing || playback.paused) return;
        var elapsed = performance.now() / 1000 - playback.startTime;
        var pct = Math.min(100, (elapsed / playback.totalDuration) * 100);
        var bar = document.getElementById('rpBarInner');
        if (bar) bar.style.width = pct + '%';
        var time = document.getElementById('rpTime');
        if (time) time.textContent = formatTime(elapsed) + ' / ' + formatTime(playback.totalDuration);
        playback.progressRAF = requestAnimationFrame(updateProgress);
    }

    function seek(e) {
        if (!playback.playing && !playback.paused) return;
        var rect = document.getElementById('rpBarOuter').getBoundingClientRect();
        var pct = (e.clientX - rect.left) / rect.width;
        var seekTo = pct * playback.totalDuration;
        var wasPaused = playback.paused;
        pause();
        playback.pauseTime = seekTo;
        if (!wasPaused) resume();
    }

    // --- Version Switching ---
    async function loadFullVersions() {
        if (FULL_PLAYLIST) return FULL_PLAYLIST;
        var loading = document.getElementById('rpLoading');
        if (loading) loading.textContent = 'Loading full versions...';
        FULL_PLAYLIST = [];
        for (var i = 0; i < FULL_FILES.length; i++) {
            try {
                var resp = await fetch(FULL_FILES[i]);
                var code = await resp.text();
                var defined = (code.match(/const\s+(PIECE_\w+)/g) || []).map(function(m) { return m.replace('const ', ''); });
                var wrapped = new Function(code + '\nreturn {' +
                    defined.map(function(n) { return '"' + n + '": ' + n; }).join(',') +
                '};');
                var pieces = wrapped();
                for (var j = 0; j < defined.length; j++) {
                    var p = pieces[defined[j]];
                    if (p && p.events && p.events.length > 0) {
                        FULL_PLAYLIST.push(p);
                    }
                }
            } catch(e) { console.warn('Repertoire: Failed to load ' + FULL_FILES[i], e); }
        }
        if (loading) {
            loading.textContent = FULL_PLAYLIST.length + ' pieces loaded';
            setTimeout(function() { loading.textContent = ''; }, 2000);
        }
        return FULL_PLAYLIST;
    }

    async function switchVersion(forceFull) {
        var target = typeof forceFull === 'boolean' ? forceFull : !isFullVersion;
        if (target === isFullVersion) return;

        stop();

        if (target) {
            await loadFullVersions();
            if (!FULL_PLAYLIST || FULL_PLAYLIST.length === 0) return;
        }

        isFullVersion = target;
        PLAYLIST.length = 0;
        var source = isFullVersion ? FULL_PLAYLIST : ABBR_PLAYLIST;
        source.forEach(function(p) { PLAYLIST.push(p); });

        var sw = document.getElementById('rpSwitch');
        if (sw) sw.classList.toggle('on', isFullVersion);
        var la = document.getElementById('rpLblAbbr');
        if (la) la.classList.toggle('active', !isFullVersion);
        var lf = document.getElementById('rpLblFull');
        if (lf) lf.classList.toggle('active', isFullVersion);
        playback.currentTrack = 0;
        buildUI();
    }

    // --- Load Abbreviated Pieces ---
    function loadAbbrPieces() {
        PIECE_NAMES.forEach(function(name) {
            try {
                var p = (0, eval)(name);
                if (p && p.events && p.events.length > 0) {
                    ABBR_PLAYLIST.push(p);
                    PLAYLIST.push(p);
                }
            } catch(e) {}
        });
    }

    // --- Public Init ---
    function init(config) {
        adapter = {
            playNote: config.playNote,
            stopNote: config.stopNote,
            stopAllNotes: config.stopAllNotes || null,
            ensureAudio: config.ensureAudio || null,
            applyRegistration: config.applyRegistration || null,
        };

        injectCSS();

        // Load abbreviated pieces from globals
        loadAbbrPieces();

        // Create and inject UI
        var elements = createHTML();
        var target = config.container || document.body;
        if (typeof target === 'string') target = document.getElementById(target) || document.body;

        // Insert before enhance.js script or at end of body
        var enhanceScript = document.querySelector('script[src*="enhance.js"]');
        if (enhanceScript) {
            target.insertBefore(elements.toggleBtn, enhanceScript);
            target.insertBefore(elements.panel, enhanceScript);
        } else {
            target.appendChild(elements.toggleBtn);
            target.appendChild(elements.panel);
        }

        // Wire up events
        document.getElementById('rpPrev').addEventListener('click', prev);
        document.getElementById('rpPlay').addEventListener('click', playPause);
        document.getElementById('rpStop').addEventListener('click', stop);
        document.getElementById('rpNext').addEventListener('click', next);
        document.getElementById('rpBarOuter').addEventListener('click', seek);
        document.getElementById('rpSwitch').addEventListener('click', function() { switchVersion(); });
        document.getElementById('rpLblAbbr').addEventListener('click', function() { switchVersion(false); });
        document.getElementById('rpLblFull').addEventListener('click', function() { switchVersion(true); });

        buildUI();
    }

    return {
        init: init,
        stop: stop,
        PLAYLIST: PLAYLIST,
    };
})();
