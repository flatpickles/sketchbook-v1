import Sketch, { SketchType } from '../Sketch.js';
import { FloatParam, BoolParam, ColorParam } from '../SketchParam.js';

import presetsObject from './presets.json';

export default class CanvasTemplate extends Sketch {
    name = 'Canvas Template';
    type = SketchType.Canvas;
    // date = new Date('10/25/2022');
    description = `
        This is a template project for a canvas-based sketch.
    `;
    showPresets = false;

    settings = {};
    bundledPresets = presetsObject;

    params = {
        demoFloat: new FloatParam('Demo Float', 0.5, 0.0, 1.0),
        demoColor: new ColorParam('Demo Color', '#00FF00'),
    };
    
    sketchFn = ({}) => {
        return ({ context, width, height }) => {
            // Clear the previous frame
            context.clearRect(0, 0, width, height);

            // Calculate circle radius
            const radius = Math.min(width/2, height/2) * this.params.demoFloat.value;

            // Draw a circle!
            context.beginPath();
            context.arc(width/2, height/2, radius, 0, Math.PI * 2);
            context.fillStyle = this.params.demoColor.value;
            context.fill();
        };
    };
}