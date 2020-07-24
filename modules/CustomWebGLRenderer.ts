import { Camera, Object3D, WebGLRenderer } from 'three';

export class CustomWebGLRenderer {
    private webGLRenderer: THREE.WebGLRenderer;

    constructor() {
        this.webGLRenderer = new WebGLRenderer();
        this.webGLRenderer.setPixelRatio( window.devicePixelRatio );
        this.webGLRenderer.setSize( window.innerWidth, window.innerHeight );
    }

    getDomElement(): HTMLCanvasElement {
        return this.webGLRenderer.domElement;
    }

    render(scene: Object3D, camera: Camera): void {
        return this.webGLRenderer.render(scene, camera);
    }
}
