import Controller from "./Controller";
import ServiceAnimation from "../Service/Animation";
import { container } from "../Common/Container";
import SnakeHead from "../Entity/Game/SnakeHead";
import { make } from "../Common/functions";

export default class Game extends Controller {

    public static KEY: string = 'Controller.Game';

    public constructor() {
        super();
        this.listenerGameStart = this.listenerGameStart.bind(this);
        this.listenerGameStop = this.listenerGameStop.bind(this);
    }

    public listenerGameStart(_: Event) {
        const animationService: ServiceAnimation = container.get(ServiceAnimation.KEY);
        animationService.start();
        const snakeHead1: SnakeHead = make(SnakeHead, 1);
        const snakeHead2: SnakeHead = make(SnakeHead, 2);
        animationService.addEntity(snakeHead1);
        animationService.addEntity(snakeHead2);
    }

    public listenerGameStop(_: Event) {
        const animationService: ServiceAnimation = container.get(ServiceAnimation.KEY);
        animationService.stop();
    }

}
