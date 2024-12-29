import * as THREE from 'three';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader';

const loader = new OBJLoader();
const model = new THREE.Group();

loader.load('../mx/3D_PCB2_2023-12-03.obj',function(gltf){
    console.log('gltf',gltf);
    model.add(gltf);
});

export default model;