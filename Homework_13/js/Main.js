var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cube, cube2;

function createBox() {
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: rgb(163, 2, 20)
  });
  cube = new THREE.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  scene.add(cube);
  cube.scale.x = 14;
  cube.scale.y = 14;
  cube.scale.z = 14;

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.05;
  cube.rotation.y += 0.05;
  createBox2();
  renderer.render(scene, camera);
}

function createBox2() {
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: rgb(18, 176, 179)
  });
  cube2 = new THREE.Mesh(geometry, material);
  cube2.position.set(4, 0);
  cube.add(cube2);
  cube2.scale.x = .75;
  cube2.scale.y = .75;
  cube2.scale.z = .75;
  animate2();
}


function animate2() {
  requestAnimationFrame(animate2);
  cube2.rotation.x += 0.02;
  cube2.rotation.y += 0.02;
}


function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(rgb(0,0,0));
  return scene;
}

function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 95, -15);
  return camera;
}

function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(30, 64, 30);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  return light;
}

function getRenderer() {
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  return renderer;
}

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.2;
  controls.panSpeed = 0.2;
  return controls;
}

function loadModel() {
  var loader = new THREE.OBJLoader();
  loader.load('model/Bitcoin_metal_coin.obj', function (object) {
    object.rotation.z = Math.PI;
    scene.add(object);

  });
}
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
};

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);
var game1 = createBox();

loadModel()

render();
