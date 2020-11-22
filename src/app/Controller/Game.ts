import Controller from "./Controller";
import ServiceAnimation from "../Service/Animation";
import { container } from "../Common/Container";

export default class Game extends Controller {

    public static KEY: string = 'Controller.Game';

    public constructor() {
        super();
        this.listenerGameStart = this.listenerGameStart.bind(this);
        this.listenerGameStop = this.listenerGameStop.bind(this);
    }

    public listenerGameStart(_: Event) {
        const animationService: ServiceAnimation = container.get(ServiceAnimation.KEY);
        animationService.setFrameUpdatedHandler(this.frameUpdatedHandler);
        animationService.start();
    }

    public listenerGameStop(_: Event) {
        const animationService: ServiceAnimation = container.get(ServiceAnimation.KEY);
        animationService.stop();
    }

    private frameUpdatedHandler(timestamp: number) {
        console.log(timestamp);
    }

}
