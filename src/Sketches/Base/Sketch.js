export const SketchType = {
    Undefined: "Undefined",
    Canvas: "Canvas",
    Shader: "Shader"
}

export default class Sketch {
    name = "Unnamed Sketch";
    type = SketchType.Undefined
    params = {};
    settings = {};
    sketchFn = ({}) => {
        return ({ context, width, height }) => {
            context.clearRect(0, 0, width, height);
            context.fillStyle = '#ffffff';
            context.fillRect(0, 0, width, height);
        }
    };
}

