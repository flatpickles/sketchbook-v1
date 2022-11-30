import NoSignal from './Sketches/Projects/NoSignal/index.js';
import Rectilinear from './Sketches/Projects/Rectilinear/index.js';
import FloppyDisk from './Sketches/Projects/FloppyDisk/index.js';
import Mandelbrot from './Sketches/Projects/Mandelbrot/index.js';
import EtherealGoop from './Sketches/Projects/EtherealGoop/index.js';
import ReglCube from './Sketches/Projects/ReglCube/index.js';

const sketches = [
    new ReglCube(),
    new EtherealGoop(),
    new Mandelbrot(),
    new Rectilinear(),
    new NoSignal(),
    new FloppyDisk(),
];

export default sketches;