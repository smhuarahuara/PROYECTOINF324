var scene, camera, renderer, mesh;
var meshFloor;

var crate, crateTexture, crateNormalMap, crateBumpMap;

var crate2;

var keyboard={};
var player={height:1.8, speed:0.2, turnSpeed: Math.PI*0.02};

function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(90, 1200/720, 0.1, 1000);

    var texture0 = new THREE.TextureLoader().load("hola/Concrete-Floor-Tile.png");

    meshFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(30,50,30, 50),
        new THREE.MeshPhongMaterial({color:0xffffff, wireframe: false, map: texture0})

    );
    meshFloor.rotation.x -= Math.PI / 2;
    meshFloor.receiveShadow = true;
    scene.add(meshFloor);

    

    camera.position.set(0,player.height,-5);
    camera.lookAt(new THREE.Vector3(0,player.height,0));

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(1280, 720);
    
    ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    light = new THREE.PointLight(0xffffff, 0.8, 18);
    light.position.set(-3,6,-3);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    scene.add(light);

    light = new THREE.PointLight(0xffffff, 0.8, 18);
    light.position.set(13,6,23);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    scene.add(light);

    light = new THREE.PointLight(0xffffff, 0.8, 18);
    light.position.set(-5,6,23);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    scene.add(light);

    light = new THREE.PointLight(0xffffff, 0.8, 18);
    light.position.set(5,6,-23);
    light.castShadow = true;
    light.shadow.camera.near = 0.1;
    light.shadow.camera.far = 25;
    scene.add(light);

    var texture = new THREE.TextureLoader().load("hola/03intonacorovinato2.jpg");

    //1ra pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(1,6,25),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(14.5, 1+3/2, 15);
    //1ra pared: Fin

    //2da pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(1,6,50),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(-14.5, 1+3/2, 0);
    //2da pared: Fin

    //3ra pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(30,6,1),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(0, 1+3/2, 25);
    //3ra pared: Fin

    //4ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(30,6,1),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(0, 1+3/2, -25);
    //4ta pared: Fin

    //5ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(1,6,15),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(14.5, 1+3/2, -19.5);
    //5ta pared: Fin

    //6ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(20,6,1),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(-4, 1+3/2, -18);
    //6ta pared: Fin

    //7ma pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(13,6,1),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(8.5, 1+3/2, -11.5);
    //7ma pared: Fin

    //8va pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(1,6,50),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(-4.5, 1+3/2, 0);
    //8va pared: Fin

    //1ra pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(1,6,25),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(2.5, 1+3/2, 0.5);
    //1ra pared: Fin

    //4ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(20,6,1),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(5, 1+3/2, 13);
    //4ta pared: Fin

    //4ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(12,6,1),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(9, 1+3/2, 2);
    //4ta pared: Fin

    //5ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(1,6,7.5),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(5.5, 1+3/2, -21.5);
    //5ta pared: Fin

    
    var texture1 = new THREE.TextureLoader().load("hola/sign_browndoor.png");
    //5ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(0.3,4,2),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture1})
    );
    scene.add(crate);
    crate.position.set(-4, 3/2, -12.5);
    //5ta pared: Fin

    //5ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(0.3,4,2),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture1})
    );
    scene.add(crate);
    crate.position.set(-4, 3/2, -0.5);
    //5ta pared: Fin

    //5ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(0.3,4,2),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture1})
    );
    scene.add(crate);
    crate.position.set(2, 3/2, 5);
    //5ta pared: Fin

    //5ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(2,4,0.3),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture1})
    );
    scene.add(crate);
    crate.position.set(-1, 3/2, 12.5);
    //5ta pared: Fin

    //5ta pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(2,4,0.3),
        new THREE.MeshPhongMaterial({color: 0xffffff, map: texture1})
    );
    scene.add(crate);
    crate.position.set(-1, 3/2, -17.5);
    //5ta pared: Fin

    //1ra pared: Inicio
    crate = new THREE.Mesh(
        new THREE.BoxGeometry(30,1,50),
        new THREE.MeshBasicMaterial({color: 0xffffff, map: texture})
    );
    scene.add(crate);
    crate.position.set(0, 6, 0);
    //1ra pared: Fin

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap;

    document.body.appendChild(renderer.domElement);

    animate();
}

function animate(){
    requestAnimationFrame(animate);


    if (keyboard[87]){
        camera.position.x -= Math.sin(camera.rotation.y)*player.speed;
        camera.position.z -= -Math.cos(camera.rotation.y)*player.speed;
    }

    if (keyboard[83]){
        camera.position.x += Math.sin(camera.rotation.y)*player.speed;
        camera.position.z += -Math.cos(camera.rotation.y)*player.speed;
    }

    if (keyboard[65]){
        camera.position.x += Math.sin(camera.rotation.y+Math.PI/2)*player.speed;
        camera.position.z += -Math.cos(camera.rotation.y+Math.PI/2)*player.speed;
    }

    if (keyboard[68]){
        camera.position.x += Math.sin(camera.rotation.y-Math.PI/2)*player.speed;
        camera.position.z += -Math.cos(camera.rotation.y-Math.PI/2)*player.speed;
    }

    if (keyboard[37]){
        camera.rotation.y -= player.turnSpeed;
    }
    if (keyboard[39]){
        camera.rotation.y += player.turnSpeed;
    }

    renderer.render(scene, camera);
}

function keyDown(event){
    keyboard[event.keyCode] = true;
}

function keyUp(event){
    keyboard[event.keyCode] = false;
}

window.addEventListener('keydown', keyDown);
window.addEventListener('keyup', keyUp);

window.onload = init;
