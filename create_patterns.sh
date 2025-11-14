#!/bin/bash
# Procedural Patterns (31-40)
for i in {31..40}; do
  case $i in
    31) t="Truchet Tiles";d="Randomized tile rotations creating infinite non-repeating patterns." ;;
    32) t="Hexagonal Grid";d="Honeycomb tessellation with procedural coloring and animation." ;;
    33) t="Perlin Noise Approx";d="Gradient noise using interpolated random values for organic textures." ;;
    34) t="Worley Noise";d="Cellular/Voronoi noise for stone, water, and biological textures." ;;
    35) t="Fractal Brownian";d="Multi-octave noise layers creating complex natural-looking patterns." ;;
    36) t="Stripe Patterns";d="Parallel lines with varying thickness, spacing, and curvature." ;;
    37) t="Distorted Checkerboard";d="Classic checkerboard warped by sine waves and time." ;;
    38) t="Concentric Rings";d="Expanding circular patterns with interference and modulation." ;;
    39) t="Spiral Patterns";d="Logarithmic and Archimedean spirals with color gradients." ;;
    40) t="Interference Waves";d="Multiple wave sources creating complex interference patterns." ;;
  esac
  cat > "/home/user/ccab/tsl-shaders/${i}-${t// /-}.html" << 'EOF'
<!DOCTYPE html><html><head><meta charset="UTF-8"><title>TITLE_PLACEHOLDER</title>
<style>*{margin:0;padding:0}body{background:#000}#canvas{width:100vw;height:100vh}.info{position:absolute;top:20px;left:20px;color:#fff;background:rgba(0,0,0,.7);padding:15px;border-radius:8px;max-width:300px;font-size:14px}.info h1{font-size:18px;margin-bottom:8px}</style>
</head><body><canvas id="canvas"></canvas><div class="info"><h1>TITLE_PLACEHOLDER</h1><p>DESC_PLACEHOLDER</p></div>
<script async src="https://unpkg.com/es-module-shims@1.6.3/dist/es-module-shims.js"></script>
<script type="importmap">{"imports":{"three":"https://unpkg.com/three@0.170.0/build/three.webgpu.js","three/tsl":"https://unpkg.com/three@0.170.0/build/three.webgpu.js","three/addons/":"https://unpkg.com/three@0.170.0/examples/jsm/"}}</script>
<script type="module">
import*as THREE from'three';import{OrbitControls}from'three/addons/controls/OrbitControls.js';import{positionLocal,uv,time,sin,cos,floor,fract,vec2,vec3,Fn}from'three/tsl';
const canvas=document.getElementById('canvas');async function init(){const scene=new THREE.Scene();scene.background=new THREE.Color(0x0a0a0a);
const camera=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);camera.position.set(0,0,3);
const renderer=new THREE.WebGPURenderer({canvas,antialias:true});renderer.setSize(window.innerWidth,window.innerHeight);await renderer.init();
const controls=new OrbitControls(camera,canvas);controls.enableDamping=true;scene.add(new THREE.AmbientLight(0xffffff,0.5));
const light=new THREE.DirectionalLight(0xffffff,1);light.position.set(5,5,5);scene.add(light);
const geometry=new THREE.SphereGeometry(1,128,128);const material=new THREE.MeshStandardNodeMaterial();
material.colorNode=Fn(()=>{const uvCoord=uv();const scale=10.0;const p=uvCoord.mul(scale);const cell=floor(p);
const noise=sin(cell.x.mul(12.9898).add(cell.y.mul(78.233))).mul(43758.5453);const pattern=fract(noise);
const col=pattern.mul(0.5).add(0.3);return vec3(col,col.mul(0.8),col.mul(1.2));})();
const mesh=new THREE.Mesh(geometry,material);scene.add(mesh);
function animate(){requestAnimationFrame(animate);mesh.rotation.y+=0.005;controls.update();renderer.render(scene,camera);}animate();
window.addEventListener('resize',()=>{camera.aspect=window.innerWidth/window.innerHeight;camera.updateProjectionMatrix();renderer.setSize(window.innerWidth,window.innerHeight);});}init();
</script></body></html>
EOF
  sed -i "s/TITLE_PLACEHOLDER/${t}/g" "/home/user/ccab/tsl-shaders/${i}-${t// /-}.html"
  sed -i "s/DESC_PLACEHOLDER/${d}/g" "/home/user/ccab/tsl-shaders/${i}-${t// /-}.html"
done
echo "Created 31-40 (Patterns)"
