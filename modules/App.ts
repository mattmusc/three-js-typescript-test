import { CustomWebGLRenderer, CustomScene, CustomCamera } from '.';
import { Cube } from './geometries';


export class App {
    webGLRenderer: CustomWebGLRenderer;
    camera: CustomCamera;
    scene: CustomScene;

    constructor() {
        this.webGLRenderer = new CustomWebGLRenderer();
        this.camera = new CustomCamera();
        this.scene = new CustomScene();

        const cube = new Cube();
        this.scene.add( cube.mesh );

        document.body.appendChild( this.webGLRenderer.getDomElement() );
    }

    start = () => {
        requestAnimationFrame( this.start );

        this.scene.objects[0].rotation.x += 0.01;
        this.scene.objects[0].rotation.y += 0.02;

        this.webGLRenderer.render( this.scene.scene, this.camera.camera );
    }
}
