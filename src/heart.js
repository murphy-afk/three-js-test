import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe88bd6);

const camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 100);
camera.position.set(3, 2, 5);
camera.lookAt(0,0,0);

const heartShape = new THREE.Shape();
heartShape.moveTo( 25, 25 );
heartShape.bezierCurveTo( 25, 25, 20, 0, 0, 0 );
heartShape.bezierCurveTo( - 30, 0, - 30, 35, - 30, 35 );
heartShape.bezierCurveTo( - 30, 55, - 10, 77, 25, 95 );
heartShape.bezierCurveTo( 60, 77, 80, 55, 80, 35 );
heartShape.bezierCurveTo( 80, 35, 80, 0, 50, 0 );
heartShape.bezierCurveTo( 35, 0, 25, 25, 25, 25 );
const extrudeSettings = {
	depth: 8,
	bevelEnabled: true,
	bevelSegments: 2,
	steps: 2,
	bevelSize: 1,
	bevelThickness: 1
};
const heart = new THREE.Mesh(
  new THREE.ExtrudeGeometry( heartShape, extrudeSettings ).center(),
  new THREE.MeshBasicMaterial({ color: 0xc70404})
);
heart.scale.setScalar( 0.04 );
heart.rotation.z = Math.PI;
scene.add( heart );


const renderer = new THREE.WebGLRenderer({antialias:true});
renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRatio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

renderer.setAnimationLoop(() => {
  heart.rotation.y += 0.02;
  renderer.render(scene, camera);
});

