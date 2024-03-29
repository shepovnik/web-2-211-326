
const div = document.querySelector('.threejs');
const cameraro = document.querySelector('.cameraro');
let mesh;


document.forms[0].addEventListener('change', (e) => {
    directionalLight.intensity=e.target.value;
    
})

document.forms[1].addEventListener('change', (e) => {
    hemiLight.intensity=e.target.value;
    
})

document.forms[2].addEventListener('change', (e) => {
    upLight.intensity=e.target.value;
    
})
document.forms[3].addEventListener('change', (e) => {
    cube.material.color.set(e.target.value);
})
document.forms[4].addEventListener('change', (e) => {
    pyramid.material.color.set(e.target.value);
})

document.forms[5].addEventListener('change', (e) => {
    mesh1.material.color.set(e.target.value);
})


window.addEventListener('resize', onWindowResize);

function onWindowResize() {

  camera.aspect = div.clientWidth / div.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(div.clientWidth, div.clientHeight);

}



let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(70, div.clientWidth / div.clientHeight, 0.1, 100);
camera.position.set(0, 1, 3);
cameraTarget = new THREE.Vector3(0, 0.4, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(div.clientWidth, div.clientHeight);

div.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;

scene.background = new THREE.Color('black');
scene.fog = new THREE.Fog('black', 1, 5);

let hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 200, 0);
scene.add(hemiLight);

let directionalLight = new THREE.DirectionalLight(0xffffff, 1);

directionalLight.position.set(25, 25, 10);
directionalLight.castShadow = true;

scene.add(directionalLight);
let upLight = new THREE.DirectionalLight(0xffffff, 1);

upLight.position.set(15, 30, 40);
upLight.castShadow = true;


scene.add(upLight);

const plane = new THREE.Mesh(
new THREE.PlaneGeometry(4000, 4000),
new THREE.MeshPhongMaterial({ color:0x808080, dithering: false })
);
plane.rotation.x = - Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);
const loader = new STLLoader();
var geometry1 = new THREE.BufferGeometry();
const vertices1 = new Float32Array( [
    -3.0, -5.0,  2.0,
    2.0, -3.0,  5.0,
    2.0,  2.0,  2.0,

    1.6,  5.0,  2.0,
    -2.0,  3.0,  5.0,
    -2.0, -2.0,  2.0
] );
geometry1.setAttribute('position', new THREE.Float32BufferAttribute( vertices1, 3 ));
geometry1.computeVertexNormals();

const material1 = new THREE.MeshPhongMaterial( { color: 'Salmon', side: THREE.DoubleSide} );
const mesh1 = new THREE.Mesh( geometry1, material1 );
mesh1.receiveShadow=true;
mesh1.position.z=-2.5;
scene.add( mesh1 );

var geometry2 = new THREE.BufferGeometry();
const vertices2 = new Float32Array( [
    0, 0, 0.5,
    0.5, 0,  0,
    -0.25,  -Math.sqrt(0.5*0.5-0.25*0.25),  0,

    0, 0, 0.5,
    0.5, 0,  0,
    -0.25,  Math.sqrt(0.5*0.5-0.25*0.25),  0,

    0, 0, 0.5,
    -0.25,  -Math.sqrt(0.5*0.5-0.25*0.25),  0,
    -0.25,  Math.sqrt(0.5*0.5-0.25*0.25),  0,

    0.5, 0,  0,
    -0.25,  -Math.sqrt(0.5*0.5-0.25*0.25),  0,
    -0.25,  Math.sqrt(0.5*0.5-0.25*0.25),  0
] );
geometry2.setAttribute('position', new THREE.Float32BufferAttribute( vertices2, 3 ));
geometry2.computeVertexNormals();
const material2 = new THREE.MeshPhongMaterial( { color: 'Wheat', side:THREE.DoubleSide} );
const pyramid = new THREE.Mesh( geometry2, material2 );
pyramid.castShadow=true;
pyramid.position.x=0.9;
pyramid.position.y=1;
pyramid.position.z=0.2;


scene.add( pyramid );

const boxWidth = 0.5;
const boxHeight = 0.5;
const boxDepth = 0.5;
const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

const material = new THREE.MeshPhongMaterial({color: 'Wheat'});  // greenish blue

const cube = new THREE.Mesh(geometry, material);
cube.castShadow=true;
scene.add(cube);
cube.position.y = 0.5;
cube.position.x = -0.5;
camera.position.z = 2;

function render(time) {
    time *= 0.001;  // конвертировать время в секунды
   
    cube.rotation.x = time;
    cube.rotation.y = time;
    cube.rotation.z = time;

    pyramid.rotation.x = time;
    pyramid.rotation.z = time;
    pyramid.rotation.y = time;
  
   
    renderer.render(scene, camera);
   
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);