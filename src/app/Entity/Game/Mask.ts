import { get } from "../../Common/functions";
import Shapes from "../../Service/Shapes";

export default class Mask {
    static KEY = 'Entity.Game.Mask';

    tag: string = 'canvas';

    width: number = document.body.clientWidth;

    height: number = document.body.clientHeight;

    style = {
        zIndex: 1
    }

    snakeHead: HTMLCanvasElement = this.buildSnackHead();

    snakeSection: HTMLCanvasElement = this.buildSnackSection();

    public setZIndex(zIndex: number) {
        this.style.zIndex = zIndex;
    }

    private buildSnackHead(): HTMLCanvasElement {
        const size = 10;
        // canvas
        const shapes: Shapes = get(Shapes);
        return shapes.snakeHead(size/2, size/2, size/2, 'yellow')
    }

    private buildSnackSection(): HTMLCanvasElement {

    }
}
