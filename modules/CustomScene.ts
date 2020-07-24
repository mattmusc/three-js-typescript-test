import { Object3D, Scene } from 'three';

export class CustomScene {
    scene: Scene;
    objects: Object3D[];

    constructor() {
        this.objects = [];
        this.scene = new Scene();
    }

    add(obj: Object3D): void {
        this.objects.push(obj);
        this.scene.add(obj)
    }
}
