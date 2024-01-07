import * as  THREE from 'three'

console.log(THREE)
console.log("javascript is working");

const scene = new THREE.Scene();

const geometry = new THREE.SphereGeometry(1, 32, 32,)
const material = new THREE.MeshBasicMaterial({ color: 0xff000 , wireframe:true})

const mesh = new THREE.Mesh(geometry, material)
mesh.position.x = 0.7
mesh.position.y = -0.6
mesh.position.z = 1

scene.add(mesh)




const sizes = {   
    width: 800,
    height:600


}


const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height ,1,100)
camera.position.z = 3
scene.add(camera)




const canvas = document.querySelector('canvas.webgl')


const renderer = new THREE.WebGLRenderer({   

    canvas: canvas

})

console.log(mesh.position.length())
console.log (mesh.position.distanceTo(camera.position))
console.log (mesh.position.normalize())


let time = Date.now()



const tick = () => {  

    const currentTime = Date.now()
    const deltaTime = currentTime -time
    
    mesh.rotation.y += 0.01 * deltaTime


renderer.render(scene, camera)

window.requestAnimationFrame(tick)
}

tick()








renderer.setSize(sizes.width, sizes.height)

renderer.render(scene, camera)




