import { BoxGeometry, Geometry, Material, Mesh, MeshNormalMaterial, Object3D } from 'three';

export type CubeConfig = {
    depth: number,
    height: number,
    width: number,
};

const defaultCubeConfig: CubeConfig = {
    depth: 0.2,
    height: 0.2,
    width: 0.2,
};

export class Cube {
    private geometry: Geometry;
    private material: Material;

    mesh: Mesh;

    constructor(config: CubeConfig = defaultCubeConfig) {
        const { depth, height, width } = config;

        this.geometry = new BoxGeometry(width, height, depth);
        this.material = new MeshNormalMaterial();
        this.mesh = new Mesh(this.geometry, this.material);
    }
}
