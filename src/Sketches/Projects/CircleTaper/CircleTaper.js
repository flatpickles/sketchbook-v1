import Sketch, { SketchType, SketchCategory } from '../../Base/Sketch.js';
import { FloatParam, BoolParam, ColorParam } from '../../Base/SketchParam.js';
import { renderPaths } from 'canvas-sketch-util/penplot';

import Generator from './Generator.js';
import presetsObject from './presets.json';

export default class CircleTaper extends Sketch {
    name = 'Circle Taper';
    type = SketchType.Canvas;
    // date = new Date('05/17/2023');
    description = `
        This sketch is intended to be drawn out with a pen plotter.
    `;
    showPresets = false;
    experimental = true;
    displayAsPrint = true;
    settings = {};
    bundledPresets = presetsObject;
    category = SketchCategory.Paths;

    params = {
        startingRadius: new FloatParam('Center Radius', 1, 0.1, 2, 0.01, false),
        taperRatio: new FloatParam('Taper Ratio', 0.7, 0.5, 1, 0.01, false),
        divisionCount: new FloatParam('Division Count', 4, 2, 10, 1, false),
        taperCount: new FloatParam('Taper Count', 10, 0, 20, 1, false),
        forward: new BoolParam('Forward', false),
        rotation: new FloatParam('Rotation', 0, 0, 1, 0.01, false),
        lineWidth: new FloatParam('Nib Size (mm)', 1, 0.1, 2, 0.01, false),
    };
    
    sketchFn = () => {
        const generator = new Generator();

        return (props) => {
            const scaledNibSize = this.params.lineWidth.value * 0.0393701; // mm to inches
            const paths = generator.generate(
                [props.width/2, props.height/2],
                this.params.startingRadius.value,
                this.params.taperRatio.value,
                this.params.taperCount.value,
                this.params.forward.value,
                this.params.rotation.value * Math.PI * 2 / this.params.divisionCount.value,
                this.params.divisionCount.value,
            );

            return renderPaths(paths, {
                lineWidth: scaledNibSize,
                strokeStyle: 'black',
                lineCap: 'round',
                inkscape: true,
                ...props
            });
        }
    };
}
