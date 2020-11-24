import { END_ANGLE } from '../../config/constant'

export default class Shapes {
    public static KEY: string = 'Service.Shapes';

    private canvas: HTMLCanvasElement;

    private context: CanvasRenderingContext2D;

    public setCanvas(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
    }

    public currentCanvas(): HTMLCanvasElement {
        return this.canvas;
    }

    public snakeHead(x: number, y: number, r: number, color: string): void {
        this.renderOuter(x, y, r, color);
    
        const { context } = this;
        const eyeR = r / 2.3;
        const d = r / 1.8;
        const xd = r / 1.8;
        context.save();
        context.strokeStyle = color;
        context.fillStyle = 'white';
        context.beginPath();
        context.arc(x + xd, y - d, eyeR, 0, END_ANGLE);
        context.closePath();
        context.fill();
        context.stroke();
    
        context.beginPath();
        context.arc(x + xd, y + d, eyeR, 0, END_ANGLE);
        context.closePath();
        context.fill();
        context.stroke();
    
        context.fillStyle = 'black';
        context.beginPath();
        context.arc(x + xd, y - d, eyeR/2, 0, END_ANGLE);
        context.closePath();
        context.fill();
    
        context.beginPath();
        context.arc(x + xd, y + d, eyeR/2, 0, END_ANGLE);
        context.closePath();
        context.fill();
    
        const hlr = eyeR/3;
        const hlx = x + xd + hlr;
        let hly = y - d - hlr;
        context.fillStyle = 'white';
    
        context.beginPath();
        context.arc(hlx, hly, hlr, 0, END_ANGLE);
        context.closePath();
        context.fill();
    
        hly = y + d - hlr;
        context.beginPath();
        context.arc(hlx, hly, hlr, 0, END_ANGLE);
        context.closePath();
        context.fill();
    
        context.restore();
    }

    /**
     * 渲染一截蛇身
     * 
     * @param x x 坐标
     * @param y y 坐标
     * @param r 半径
     * @param pColor 主色
     * @param sColor 副色
     */
    public snakeSection(x: number, y: number, r: number, pColor: string, sColor: string): void {
        const { context } = this;
        this.renderOuter(x, y, r, pColor);
        // 中间颜色
        context.save();
        context.fillStyle = sColor;
        context.beginPath();
        context.arc(x, y, r/2, 0, END_ANGLE);
        context.closePath();
        context.fill();
        context.restore();
    }

    public food(x: number, y: number, color: string): void {
        const { context } = this;
        context.save();
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, 4, 0, END_ANGLE);
        context.closePath();
        context.fill();
        context.restore();
    }

    /**
     * 绘制网格地图
     * 
     * @param size 网格大小
     * @param mapSize 地图大小
     */
    public mapBackground(size: number, mapSize: number) {
        const xNum = mapSize / size
        const yNum = mapSize / size;
        const maxNum = Math.max(xNum, yNum);
        const { context } = this;

        context.beginPath();
        context.lineWidth = .1;
        context.fillStyle = '#aaa';
        for (let i = 0; i < maxNum; i++) {
            // 竖直线
            if (i < xNum) {
                context.moveTo(i * size, 0);
                context.lineTo(i * size, mapSize);
            }
            // 水平线
            if (i < yNum) {
                context.moveTo(0, i * size);
                context.lineTo(mapSize, i * size);
            }
        }
        context.closePath();
        context.stroke();
    }

    /**
     * 渲染外圈
     * 
     * @param x x 坐标
     * @param y y 坐标
     * @param r 半径
     */
    private renderOuter(x: number, y: number, r: number, color: string): void {
        const { context } = this;
        context.save();
        context.fillStyle = color;
        context.beginPath();
        context.arc(x, y, r, 0, END_ANGLE);
        context.closePath();
        context.fill();
        context.restore();
    }
}
