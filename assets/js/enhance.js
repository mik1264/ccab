/**
 * CCAB Universal Enhancement Script
 * Adds keyboard shortcuts, FPS counter, fullscreen, resize handling,
 * touch support, and help overlay to all demos.
 * Version: 1.0.0
 *
 * Keyboard shortcuts:
 *   Space  - Pause/Resume animation
 *   R      - Reset simulation
 *   F      - Toggle fullscreen
 *   P      - Toggle FPS counter
 *   ?      - Toggle help overlay
 *   Escape - Exit fullscreen / close overlay
 */
(function () {
    'use strict';

    // Avoid double-init
    if (window.__ccabEnhanced) return;
    window.__ccabEnhanced = true;

    // ── State ──────────────────────────────────────────────
    let paused = false;
    let originalRAF = null;
    let fpsVisible = false;
    let helpVisible = false;

    // ── FPS Counter ────────────────────────────────────────
    const fpsEl = document.createElement('div');
    fpsEl.id = 'ccab-fps';
    fpsEl.style.cssText =
        'position:fixed;top:10px;right:10px;background:rgba(0,0,0,.75);' +
        'color:#4ade80;padding:6px 12px;border-radius:6px;font:bold 13px/1 monospace;' +
        'z-index:99999;pointer-events:none;display:none;backdrop-filter:blur(4px);' +
        'transition:opacity .2s';
    document.documentElement.appendChild(fpsEl);

    let frameCount = 0;
    let lastFpsTime = performance.now();

    function updateFps() {
        frameCount++;
        const now = performance.now();
        if (now - lastFpsTime >= 1000) {
            const fps = Math.round((frameCount * 1000) / (now - lastFpsTime));
            fpsEl.textContent = fps + ' FPS';
            fpsEl.style.color = fps >= 55 ? '#4ade80' : fps >= 30 ? '#fbbf24' : '#f87171';
            frameCount = 0;
            lastFpsTime = now;
        }
    }

    // Hook into requestAnimationFrame to count frames
    const _raf = window.requestAnimationFrame.bind(window);
    window.requestAnimationFrame = function (cb) {
        return _raf(function (ts) {
            if (fpsVisible) updateFps();
            cb(ts);
        });
    };

    // ── Pause / Resume ─────────────────────────────────────
    function togglePause() {
        if (!paused) {
            originalRAF = window.requestAnimationFrame;
            window.requestAnimationFrame = function () { return -1; };
            paused = true;
            showToast('Paused');
        } else {
            window.requestAnimationFrame = originalRAF || _raf;
            paused = false;
            showToast('Resumed');
            // Kick-start any stalled loops by requesting a frame
            try {
                const canvases = document.querySelectorAll('canvas');
                if (canvases.length) {
                    _raf(function () {}); // nudge
                }
            } catch (e) { /* ignore */ }
        }
    }

    // ── Fullscreen ─────────────────────────────────────────
    function toggleFullscreen() {
        if (!document.fullscreenElement) {
            (document.documentElement.requestFullscreen ||
             document.documentElement.webkitRequestFullscreen ||
             function () {}).call(document.documentElement);
        } else {
            (document.exitFullscreen ||
             document.webkitExitFullscreen ||
             function () {}).call(document);
        }
    }

    // ── Toast Notification ─────────────────────────────────
    let toastTimeout;
    const toastEl = document.createElement('div');
    toastEl.id = 'ccab-toast';
    toastEl.style.cssText =
        'position:fixed;bottom:30px;left:50%;transform:translateX(-50%) translateY(20px);' +
        'background:rgba(0,0,0,.8);color:#fff;padding:10px 24px;border-radius:8px;' +
        'font:500 14px/1.4 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;' +
        'z-index:99999;pointer-events:none;opacity:0;transition:opacity .25s,transform .25s;' +
        'backdrop-filter:blur(8px)';
    document.documentElement.appendChild(toastEl);

    function showToast(msg) {
        clearTimeout(toastTimeout);
        toastEl.textContent = msg;
        toastEl.style.opacity = '1';
        toastEl.style.transform = 'translateX(-50%) translateY(0)';
        toastTimeout = setTimeout(function () {
            toastEl.style.opacity = '0';
            toastEl.style.transform = 'translateX(-50%) translateY(20px)';
        }, 1500);
    }

    // ── Help Overlay ───────────────────────────────────────
    const helpEl = document.createElement('div');
    helpEl.id = 'ccab-help';
    helpEl.style.cssText =
        'position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:99998;display:none;' +
        'justify-content:center;align-items:center;backdrop-filter:blur(6px)';
    helpEl.innerHTML =
        '<div style="background:rgba(255,255,255,.95);color:#1a1a1a;border-radius:16px;' +
        'padding:32px 40px;max-width:420px;width:90%;font-family:-apple-system,BlinkMacSystemFont,' +
        '\'Segoe UI\',Roboto,sans-serif;box-shadow:0 20px 60px rgba(0,0,0,.3)">' +
        '<h3 style="margin:0 0 16px;font-size:20px;color:#606C38">Keyboard Shortcuts</h3>' +
        '<table style="width:100%;border-collapse:collapse;font-size:14px">' +
        '<tr><td style="padding:6px 16px 6px 0;font-weight:600;white-space:nowrap">' +
        '<kbd style="background:#f3f4f6;padding:3px 8px;border-radius:4px;border:1px solid #d1d5db;font-family:monospace">Space</kbd></td>' +
        '<td style="padding:6px 0;color:#555">Pause / Resume</td></tr>' +
        '<tr><td style="padding:6px 16px 6px 0;font-weight:600">' +
        '<kbd style="background:#f3f4f6;padding:3px 8px;border-radius:4px;border:1px solid #d1d5db;font-family:monospace">R</kbd></td>' +
        '<td style="padding:6px 0;color:#555">Reset simulation</td></tr>' +
        '<tr><td style="padding:6px 16px 6px 0;font-weight:600">' +
        '<kbd style="background:#f3f4f6;padding:3px 8px;border-radius:4px;border:1px solid #d1d5db;font-family:monospace">F</kbd></td>' +
        '<td style="padding:6px 0;color:#555">Toggle fullscreen</td></tr>' +
        '<tr><td style="padding:6px 16px 6px 0;font-weight:600">' +
        '<kbd style="background:#f3f4f6;padding:3px 8px;border-radius:4px;border:1px solid #d1d5db;font-family:monospace">P</kbd></td>' +
        '<td style="padding:6px 0;color:#555">Toggle FPS counter</td></tr>' +
        '<tr><td style="padding:6px 16px 6px 0;font-weight:600">' +
        '<kbd style="background:#f3f4f6;padding:3px 8px;border-radius:4px;border:1px solid #d1d5db;font-family:monospace">?</kbd></td>' +
        '<td style="padding:6px 0;color:#555">This help overlay</td></tr>' +
        '<tr><td style="padding:6px 16px 6px 0;font-weight:600">' +
        '<kbd style="background:#f3f4f6;padding:3px 8px;border-radius:4px;border:1px solid #d1d5db;font-family:monospace">Esc</kbd></td>' +
        '<td style="padding:6px 0;color:#555">Close / Exit fullscreen</td></tr>' +
        '</table>' +
        '<p style="margin:16px 0 0;font-size:12px;color:#999;text-align:center">Press <b>?</b> or click to close</p>' +
        '</div>';
    helpEl.addEventListener('click', function () {
        helpEl.style.display = 'none';
        helpVisible = false;
    });
    document.documentElement.appendChild(helpEl);

    function toggleHelp() {
        helpVisible = !helpVisible;
        helpEl.style.display = helpVisible ? 'flex' : 'none';
    }

    // ── Keyboard Handler ───────────────────────────────────
    document.addEventListener('keydown', function (e) {
        // Don't intercept when user is typing in inputs
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' ||
            e.target.tagName === 'SELECT' || e.target.isContentEditable) return;

        switch (e.key) {
            case ' ':
                e.preventDefault();
                togglePause();
                break;
            case 'f':
            case 'F':
                if (!e.ctrlKey && !e.metaKey) {
                    e.preventDefault();
                    toggleFullscreen();
                }
                break;
            case 'p':
            case 'P':
                if (!e.ctrlKey && !e.metaKey) {
                    fpsVisible = !fpsVisible;
                    fpsEl.style.display = fpsVisible ? 'block' : 'none';
                    if (!fpsVisible) { frameCount = 0; }
                    showToast(fpsVisible ? 'FPS On' : 'FPS Off');
                }
                break;
            case 'r':
            case 'R':
                if (!e.ctrlKey && !e.metaKey) {
                    // Try common reset patterns
                    if (typeof window.reset === 'function') { window.reset(); showToast('Reset'); }
                    else if (typeof window.init === 'function') { window.init(); showToast('Reset'); }
                    else if (typeof window.setup === 'function') { window.setup(); showToast('Reset'); }
                    else { location.reload(); }
                }
                break;
            case '?':
                toggleHelp();
                break;
            case 'Escape':
                if (helpVisible) {
                    helpEl.style.display = 'none';
                    helpVisible = false;
                }
                break;
        }
    });

    // ── Resize Debounce ────────────────────────────────────
    // Only add if no existing resize handler detected
    let resizeTimer;
    const canvases = document.querySelectorAll('canvas');
    if (canvases.length > 0) {
        window.addEventListener('resize', function () {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                // Dispatch a custom event that demos can listen to
                window.dispatchEvent(new CustomEvent('ccab-resize', {
                    detail: { width: window.innerWidth, height: window.innerHeight }
                }));
            }, 150);
        });
    }

    // ── Touch: Double-tap fullscreen ───────────────────────
    let lastTap = 0;
    document.addEventListener('touchend', function (e) {
        const now = Date.now();
        if (now - lastTap < 300 && e.touches.length === 0) {
            e.preventDefault();
            toggleFullscreen();
        }
        lastTap = now;
    }, { passive: false });

    // ── Subtle hint on first load ──────────────────────────
    if (!sessionStorage.getItem('ccab-hint-shown')) {
        setTimeout(function () {
            showToast('Press ? for keyboard shortcuts');
        }, 2000);
        sessionStorage.setItem('ccab-hint-shown', '1');
    }
})();
