import { PerspectiveCamera } from 'three';

export type CameraConfig = {
    far: number,
    fov: number,
    near: number,
    zPos: number,
};

const defaultCameraConfig: CameraConfig = {
    far: 10,
    fov: 70,
    near: 0.01,
    zPos: 1,
};

export class CustomCamera {
    camera: PerspectiveCamera;

    constructor(config: CameraConfig = defaultCameraConfig) {
        const { far, fov, near, zPos } = config;
        this.camera = new PerspectiveCamera( fov, window.innerWidth / window.innerHeight, near, far );
        this.camera.position.z = zPos;
    }
}
