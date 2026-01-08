// Cosmology Demo Engine
// Extracted and Refactored from 05-inflation.html
// Maps to the structure of cosmology/index.html

const demos = {
    '01-cmb-anisotropies': {
        title: 'CMB Anisotropies',
        desc: 'Temperature fluctuations in the cosmic microwave background reveal the seeds of cosmic structure.',
        info: 'The CMB has temperature variations of ~1 part in 100,000. These tiny fluctuations grew into galaxies and clusters.',
        type: '2d',
        init: initCMB,
        draw: drawCMB
    },
    '02-inflation': {
        title: 'Cosmic Inflation',
        desc: 'Visualize the exponential expansion of spacetime in the first 10⁻³⁶ seconds that explains the uniformity of the universe.',
        info: 'Inflation explains the flatness and horizon problems. Quantum fluctuations became cosmic structure.',
        type: '2d',
        init: initInflation,
        draw: drawInflation
    },
    '03-nucleosynthesis': {
        title: 'Big Bang Nucleosynthesis',
        desc: 'Watch the formation of hydrogen, helium, and lithium in the first 20 minutes after the Big Bang.',
        info: 'Produced: 75% H, 25% He, trace Li. Heavier elements came later from stars.',
        type: '2d',
        init: initNucleosynthesis,
        draw: drawNucleosynthesis
    },
    '04-recombination': {
        title: 'Recombination Era',
        desc: 'The moment 380,000 years after the Big Bang when atoms formed and the universe became transparent.',
        info: 'At z≈1100, T≈3000K. The universe became transparent. This is the surface of last scattering.',
        type: '2d',
        init: initRecombination,
        draw: drawRecombination
    },
    '05-dark-ages': {
        title: 'Cosmic Dark Ages',
        desc: 'The era before the first stars, when the universe was filled with neutral hydrogen waiting to be ionized.',
        info: 'Lasted from 380,000 to ~400 million years. The universe was dark, filled with neutral Hydrogen and dark matter.',
        type: '2d',
        init: initDarkAges,
        draw: drawDarkAges
    },
    '06-dark-matter-distribution': {
        title: 'Dark Matter Distribution',
        desc: 'Map the invisible scaffolding of dark matter that guides the formation of galaxies and clusters.',
        info: 'Dark matter collapsed first, creating halos. Baryons followed, forming galaxies within these halos.',
        type: '2d',
        init: initDarkMatter,
        draw: drawDarkMatter
    },
    '07-dark-energy': {
        title: 'Dark Energy Expansion',
        desc: 'Explore how the mysterious dark energy drives the accelerating expansion of the universe.',
        info: 'Discovered in 1998 through Type Ia supernovae. The cosmological constant Λ drives late-time acceleration.',
        type: '2d',
        init: initDarkEnergy,
        draw: drawDarkEnergy
    },
    '08-bao': {
        title: 'Baryon Acoustic Oscillations',
        desc: 'Sound waves frozen into the distribution of matter, providing a cosmic ruler for measuring distances.',
        info: 'The BAO peak at ~150 Mpc comoving. Pressure waves froze at recombination.',
        type: '3d',
        init: initBAO,
        draw: drawBAO
    },
    '09-hubble-expansion': {
        title: 'Hubble Expansion',
        desc: 'Visualize how galaxies recede from us at speeds proportional to their distance.',
        info: 'Hubble constant H₀ ≈ 70 km/s/Mpc. A galaxy 100 Mpc away recedes at 7,000 km/s.',
        type: '2d',
        init: initHubble,
        draw: drawHubble
    },
    '10-redshift-surveys': {
        title: 'Redshift Surveys',
        desc: 'Map the 3D distribution of galaxies using their redshifts to measure distances.',
        info: 'Large scale structure: Filaments, walls, and voids mapped by SDSS, 2dF, and DESI.',
        type: '2d',
        init: initRedshift,
        draw: drawRedshift
    }
};

let state = {};
let three = { scene: null, camera: null, renderer: null, mesh: null };

// 01
function initCMB() { state.noise = []; for(let i=0; i<50000; i++) state.noise.push({x:Math.random()*1000, y:Math.random()*500, t:Math.random()*0.0002-0.0001}); }
function drawCMB(ctx, canvas, time) { 
    const cx=(canvas.width-320)/2, cy=canvas.height/2, r=Math.min(cx,cy)*0.8; 
    ctx.save(); ctx.beginPath(); ctx.ellipse(cx,cy,r,r*0.5,0,0,Math.PI*2); ctx.clip(); 
    state.noise.forEach(n => { 
        const x=cx-r+n.x*r*2/1000, y=cy-r*0.5+n.y*r/500; 
        const temp=n.t; 
        ctx.fillStyle=temp>0?`rgba(255,${200-temp*500000},${150-temp*700000},0.8)`:`rgba(${150+temp*700000},${200+temp*500000},255,0.8)`; 
        ctx.fillRect(x,y,3,3); 
    }); 
    ctx.restore(); 
    ctx.strokeStyle='#f472b6'; ctx.lineWidth=2; ctx.beginPath(); ctx.ellipse(cx,cy,r,r*0.5,0,0,Math.PI*2); ctx.stroke(); 
    return 'T=2.725K'; 
}

// 02
function initInflation() { state.size = 0.01; }
function drawInflation(ctx, canvas, time, playing, scale) { 
    const cx=(canvas.width-320)/2, cy=canvas.height/2; 
    if(playing && state.size < 300) state.size *= (1 + 0.1*scale); 
    if(state.size > 300) state.size = 0.01; 
    const grad = ctx.createRadialGradient(cx,cy,0,cx,cy,state.size); 
    grad.addColorStop(0,'rgba(255,255,255,0.8)'); 
    grad.addColorStop(0.5,'rgba(255,200,100,0.5)'); 
    grad.addColorStop(1,'transparent'); 
    ctx.fillStyle=grad; ctx.beginPath(); ctx.arc(cx,cy,state.size,0,Math.PI*2); ctx.fill(); 
    ctx.fillStyle='#fff'; ctx.font='14px Arial'; ctx.textAlign='center'; 
    ctx.fillText(state.size<1?'Quantum fluctuations':state.size<10?'Inflation begins':'Universe expands 10²⁶×',cx,cy+state.size+30); 
    return state.size<1?'10⁻³⁶s':state.size<10?'10⁻³²s':'10⁻³²s'; 
}

// 03
function initNucleosynthesis() { state.particles = []; for(let i=0; i<100; i++) state.particles.push({x:(Math.random()-0.5)*300,y:(Math.random()-0.5)*200,type:Math.random()>0.14?'p':'n',vx:(Math.random()-0.5)*2,vy:(Math.random()-0.5)*2}); }
function drawNucleosynthesis(ctx, canvas, time, playing) { 
    const cx=(canvas.width-320)/2, cy=canvas.height/2; 
    if(playing) { 
        state.particles.forEach(p => { 
            p.x+=p.vx; p.y+=p.vy; 
            if(Math.abs(p.x)>150) p.vx*=-1; 
            if(Math.abs(p.y)>100) p.vy*=-1; 
        }); 
    } 
    state.particles.forEach(p => { 
        ctx.beginPath(); ctx.arc(cx+p.x,cy+p.y,p.type==='p'?4:3,0,Math.PI*2); 
        ctx.fillStyle=p.type==='p'?'#ff6666':'#6666ff'; ctx.fill(); 
    }); 
    ctx.fillStyle='#fff'; ctx.font='12px Arial'; ctx.textAlign='center'; 
    ctx.fillText('Protons (red) + Neutrons (blue) → H, He, Li',cx,cy+130); 
    return 't≈3 min'; 
}

// 04
function initRecombination() { state.electrons = []; state.photons = []; for(let i=0; i<50; i++) { state.electrons.push({x:(Math.random()-0.5)*400,y:(Math.random()-0.5)*300,bound:false}); state.photons.push({x:(Math.random()-0.5)*400,y:(Math.random()-0.5)*300,vx:(Math.random()-0.5)*3,vy:(Math.random()-0.5)*3}); } }
function drawRecombination(ctx, canvas, time, playing, scale) { 
    const cx=(canvas.width-320)/2, cy=canvas.height/2; 
    const temp = Math.max(0, 1 - time*0.001*scale); 
    if(playing) { 
        state.electrons.forEach(e => { if(!e.bound && temp < 0.5) e.bound = Math.random() > temp; }); 
        state.photons.forEach(p => { if(temp > 0.3) { p.vx = (Math.random()-0.5)*3; p.vy = (Math.random()-0.5)*3; } p.x += p.vx; p.y += p.vy; if(Math.abs(p.x)>200) p.vx*=-1; if(Math.abs(p.y)>150) p.vy*=-1; }); 
    } 
    state.electrons.forEach(e => { 
        ctx.beginPath(); ctx.arc(cx+e.x,cy+e.y,3,0,Math.PI*2); 
        ctx.fillStyle=e.bound?'#88ff88':'#ff8888'; ctx.fill(); 
    }); 
    state.photons.forEach(p => { 
        ctx.beginPath(); ctx.arc(cx+p.x,cy+p.y,2,0,Math.PI*2); 
        ctx.fillStyle=`rgba(255,${Math.floor(200*temp)},${Math.floor(100*temp)},${temp>0.3?0.3:0.8})`; ctx.fill(); 
    }); 
    return `T=${Math.floor(3000*temp+300)}K`; 
}

// 05
function initDarkAges() { state.fog = []; for(let i=0;i<100;i++) state.fog.push({x:Math.random()*800, y:Math.random()*600, alpha: Math.random()*0.5}); }
function drawDarkAges(ctx, canvas, time, playing) {
    const cx=(canvas.width-320)/2, cy=canvas.height/2;
    ctx.fillStyle = `rgba(10, 5, 20, ${0.8 + Math.sin(time)*0.1})`; 
    ctx.fillRect(0,0,canvas.width, canvas.height);
    state.fog.forEach(f => {
        ctx.fillStyle = `rgba(30, 30, 50, ${f.alpha})`;
        ctx.beginPath(); ctx.arc(f.x, f.y, 40, 0, Math.PI*2); ctx.fill();
    });
    ctx.fillStyle='#fff'; ctx.font='16px Arial'; ctx.textAlign='center';
    ctx.fillText('The Universe is opaque and dark. Neutral Hydrogen dominates.', cx, cy);
    return 'z ≈ 30';
}

// 06
function initDarkMatter() { state.particles = []; for(let i=0; i<500; i++) state.particles.push({x:(Math.random()-0.5)*400,y:(Math.random()-0.5)*300,vx:0,vy:0}); }
function drawDarkMatter(ctx, canvas, time, playing, scale) { 
    const cx=(canvas.width-320)/2, cy=canvas.height/2; 
    if(playing) { 
        state.particles.forEach((p,i) => { 
            state.particles.forEach((q,j) => { 
                if(i>=j) return; 
                const dx=q.x-p.x, dy=q.y-p.y, d=Math.sqrt(dx*dx+dy*dy)+1; 
                if(d<100) { const f=0.0001*scale/d; p.vx+=dx*f; p.vy+=dy*f; q.vx-=dx*f; q.vy-=dy*f; } 
            }); 
            p.x+=p.vx; p.y+=p.vy; p.vx*=0.99; p.vy*=0.99; 
        }); 
    } 
    state.particles.forEach(p => { 
        ctx.beginPath(); ctx.arc(cx+p.x,cy+p.y,2,0,Math.PI*2); 
        ctx.fillStyle='rgba(200,200,255,0.7)'; ctx.fill(); 
    }); 
    return 'Gravity at work'; 
}

// 07
function initDarkEnergy() { state.scale = 1; state.history = []; }
function drawDarkEnergy(ctx, canvas, time, playing, scale) { 
    const cx=(canvas.width-320)/2, cy=canvas.height/2; 
    if(playing) { 
        state.scale *= (1 + 0.001*scale); 
        if(state.scale > 3) state.scale = 1; 
        state.history.push(state.scale); 
        if(state.history.length > 200) state.history.shift(); 
    } 
    const r = 50 * state.scale; 
    ctx.strokeStyle='#f472b6'; ctx.lineWidth=2; 
    for(let i=0; i<5; i++) { 
        ctx.beginPath(); ctx.arc(cx,cy,r*(1+i*0.3),0,Math.PI*2); ctx.stroke(); 
    } 
    ctx.fillStyle='#fff'; ctx.font='12px Arial'; ctx.textAlign='center'; 
    ctx.fillText('Λ-CDM Universe',cx,cy-r-20); 
    return `a=${state.scale.toFixed(2)}`; 
}

// 08 BAO (3D Implementation)
function initBAO(canvas) {
    if (!THREE) return;
    
    // Cleanup previous scene if exists
    if (three.renderer) {
        // Simple disposal
        three.renderer.domElement.remove();
    }

    three.scene = new THREE.Scene();
    three.scene.background = new THREE.Color(0x020210);
    three.scene.fog = new THREE.Fog(0x020210, 50, 200);

    three.camera = new THREE.PerspectiveCamera(75, canvas.width/canvas.height, 0.1, 1000);
    three.camera.position.z = 100;

    three.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    three.renderer.setSize(canvas.width, canvas.height);

    // Create galaxy distribution
    const geometry = new THREE.BufferGeometry();
    const count = 10000;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        // Random distribution
        const r = Math.random() * 100;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        
        let x = r * Math.sin(phi) * Math.cos(theta);
        let y = r * Math.sin(phi) * Math.sin(theta);
        let z = r * Math.cos(phi);

        // Add "BAO Rings" - slight overdensity at r=50
        if (Math.random() > 0.8) {
             const baoR = 50 + (Math.random()-0.5)*5;
             x = baoR * Math.sin(phi) * Math.cos(theta);
             y = baoR * Math.sin(phi) * Math.sin(theta);
             z = baoR * Math.cos(phi);
        }

        positions[i*3] = x;
        positions[i*3+1] = y;
        positions[i*3+2] = z;

        colors[i*3] = 0.5 + Math.random()*0.5;
        colors[i*3+1] = 0.5 + Math.random()*0.5;
        colors[i*3+2] = 1.0;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({ size: 0.5, vertexColors: true, transparent: true, opacity: 0.8 });
    three.mesh = new THREE.Points(geometry, material);
    three.scene.add(three.mesh);
}

function drawBAO(ctx, canvas, time, playing, scale) {
    if (!three.renderer) return 'Loading 3D...';
    
    if (playing) {
        three.mesh.rotation.y = time * 0.1;
        three.mesh.rotation.z = time * 0.05;
    }
    
    three.renderer.render(three.scene, three.camera);
    
    // Return empty string as we don't draw text on the 3D canvas (it's handled by DOM UI)
    return 'Scale: ~150 Mpc';
}

// 09
function initHubble() { state.galaxies = []; for(let i=0; i<40; i++) { const a=Math.random()*Math.PI*2, d=50+Math.random()*200; state.galaxies.push({x:Math.cos(a)*d, y:Math.sin(a)*d, d, size:3+Math.random()*4}); } }
function drawHubble(ctx, canvas, time, playing, scale) { 
    const cx=(canvas.width-320)/2, cy=canvas.height/2; 
    const expansion = 1 + time*0.0001*scale; 
    state.galaxies.forEach(g => { 
        const x=cx+g.x*expansion, y=cy+g.y*expansion; 
        const z=g.d*0.01*expansion; 
        const r=Math.min(255,150+z*20), gr=Math.max(0,200-z*30), b=Math.max(0,255-z*50); 
        ctx.beginPath(); ctx.arc(x,y,g.size,0,Math.PI*2); 
        ctx.fillStyle=`rgb(${r},${gr},${b})`; ctx.fill(); 
    }); 
    ctx.beginPath(); ctx.arc(cx,cy,8,0,Math.PI*2); ctx.fillStyle='#fff'; ctx.fill(); ctx.fillText('You',cx-10,cy+20); 
    return `a=${expansion.toFixed(2)}`; 
}

// 10
function initRedshift() { state.slice = []; for(let i=0; i<2000; i++) { const theta = Math.random()*Math.PI; const r = Math.random()*300; if(Math.cos(theta*4 + r*0.1) > 0) state.slice.push({x: r*Math.cos(theta), y: r*Math.sin(theta)}); } }
function drawRedshift(ctx, canvas, time, playing) {
    const cx=(canvas.width-320)/2, cy=canvas.height/2 + 200;
    state.slice.forEach(s => {
        ctx.fillStyle = '#aaa';
        ctx.fillRect(cx + s.x, cy - s.y, 1, 1);
        ctx.fillRect(cx - s.x, cy - s.y, 1, 1);
    });
    ctx.fillStyle='#fff'; ctx.fillText('SDSS Slice', cx, cy + 20);
    return 'z < 0.2';
}

// Main Engine
window.CosmologyEngine = {
    init: (canvasId) => {
        const canvas = document.getElementById(canvasId);
        
        // Check for WebGL context first for 3D demos
        const filename = window.location.pathname.split('/').pop().replace('.html', '');
        const demo = demos[filename] || demos['01-cmb-anisotropies'];
        
        // 2D Context (created only if needed, or if engine forces it)
        // Note: calling getContext('2d') on a canvas that has 'webgl' context will return null
        let ctx = null;
        if (demo.type !== '3d') {
            ctx = canvas.getContext('2d');
        }
        
        let playing = true, time = 0, scale = 1;
        
        if (demo) {
            document.getElementById('title').textContent = demo.title;
            document.getElementById('description').textContent = demo.desc;
            document.getElementById('infoBox').textContent = demo.info;
            document.title = demo.title + ' - CCAB';
            demo.init(canvas); // Pass canvas for 3D init
        }

        function animate() {
            if (playing) time += 0.016;
            
            if (demo) {
                if (demo.type === '3d') {
                    // 3D Rendering (managed by Three.js inside draw)
                   const status = demo.draw(null, canvas, time, playing, scale);
                   document.getElementById('stateVal').textContent = status;
                } else {
                    // 2D Rendering
                    ctx.fillStyle = 'rgba(2,2,16,0.2)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    const status = demo.draw(ctx, canvas, time, playing, scale);
                    document.getElementById('stateVal').textContent = status;
                }
            }
            
            document.getElementById('timeVal').textContent = time.toFixed(1);
            requestAnimationFrame(animate);
        }

        document.getElementById('playBtn').onclick = () => { playing = !playing; document.getElementById('playBtn').textContent = playing ? '⏸ Pause' : '▶ Play'; };
        document.getElementById('resetBtn').onclick = () => { time = 0; if(demo) demo.init(canvas); };
        document.getElementById('scale').oninput = e => { scale = parseFloat(e.target.value); document.getElementById('scaleVal').textContent = scale.toFixed(1); };

        animate();
    }
};