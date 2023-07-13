// @ts-ignore - ignore unresolved import for template file
import type { Path } from 'd3-path';
import PathUtil from '../../Util/PathUtil';

import alea from 'alea';
import { createNoise3D, type NoiseFunction3D } from 'simplex-noise';

type Point = [number, number];

export default class Generator {
    private noise: NoiseFunction3D;

    constructor() {
        const prng = alea(0);
        this.noise = createNoise3D(prng);
    }

    public generateRays(
        center: Point,
        outerRadius: number,
        innerRadius: number,
        rayCount = 20,
        rotation = 0
    ): Path[] {
        const rays: Path[] = [];
        for (let i = 0; i < rayCount; i++) {
            const angle = (i / rayCount) * Math.PI * 2 + rotation;
            const ray = this.generateRay(center, outerRadius, innerRadius, angle);
            rays.push(PathUtil.createCardinalSpline(ray, 1));
        }
        return rays;
    }

    private generateRay(
        center: Point,
        outerRadius: number,
        innerRadius: number,
        angle: number
    ): Point[] {
        const rayPath = [];
        const rayPointCount = 10;
        const noiseDensity = 0.1;

        for (let i = 0; i <= rayPointCount; i++) {
            const r = (outerRadius - innerRadius) * (i / rayPointCount) + innerRadius;
            const normalizedNoise = this.noise(
                noiseDensity * Math.cos(angle),
                noiseDensity * Math.sin(angle),
                noiseDensity * r
            );

            const rayPoint: Point = [
                center[0] + Math.cos(angle + normalizedNoise) * r,
                center[1] + Math.sin(angle + normalizedNoise) * r,
            ];
            rayPath.push(rayPoint);
        }
        return rayPath;
    }
}
