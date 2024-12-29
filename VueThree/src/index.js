import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

import model from './model'
// 场景
const scene = new THREE.Scene();
scene.add(model);

/**
 * 创建网络模型
 */
const material = new THREE.MeshBasicMaterial({
    color:0x00ffff,
    transparent: true,
    opacity: 0.5,
});

const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

// 设置Three.js输出的Canvas画布尺寸，宽，高
const width = window.innerWidth;
const height = window.innerHeight;

/**
 * 透视投影相机设置
 */
// 现场角度，width/height：Canvas画布宽高比，1：进截面，3000：远截面
const camera = new THREE.PerspectiveCamera(30,width/height,1,3000);
camera.position.set(44,-336,265);//相机在Three.js三维坐标系中的位置
camera.lookAt(0,0,0);//相机观察目标指向Three.js坐标系原点

/**
 * 创建渲染器对象
 */
const renderer = new THREE.WebGLRenderer({
    antialias:true,// 启动抗锯齿
});
// 设置背景颜色
renderer.setClearColor(0x444444);
renderer.setSize(width,height);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera,renderer.domElement);
controls.addEventListener('change',function (){
    renderer.render(scene,camera);
    console.log('camera.position',camera.position);
    console.log('camera.lookAt',camera.lookAt);
});

// 创建Stats对象
const stats = new Stats();
document.body.appendChild(stats.domElement);

function render(){
    stats.update();
    renderer.render(scene,camera);
    // model.rotateY(0.01);
    requestAnimationFrame(render);
}
render();

window.onresize = function(){
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};