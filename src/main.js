import * as THREE from 'three';

// Scene: where everything lives
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x111111);

// Camera: the viewpoint
const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.set(3, 2, 5);
camera.lookAt(0, 0, 0);

// Renderer: draws the scene to the screen
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

// Cube
const cube = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({ color: 0xd94cbd })
);
scene.add(cube);

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1, 1, 1),
  new THREE.MeshStandardMaterial({color: 0x4cd9bd}),
);
cube2.position.set(1, 1, 0);
scene.add(cube2);

// Lights
scene.add(new THREE.AmbientLight(0xffffff, 0.5));

const sun = new THREE.DirectionalLight(0xffffff, 2);
sun.position.set(5, 8, 4);
scene.add(sun);

// Render loop
renderer.setAnimationLoop(() => {
  cube.rotation.y += 0.01;
  cube.rotation.x += 0.005;
  cube2.rotation.y -= 0.01;
  cube2.rotation.x -= 0.005;
  renderer.render(scene, camera);
});
