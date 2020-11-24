import Controller from "./Controller";
import ServiceAnimation from "../Service/Animation";
import { get } from "../Common/functions";
import ServiceScheduler from "../Service/Facade/Scheduler";

export default class Game extends Controller {

    public static KEY: string = 'Controller.Game';

    public constructor() {
        super();
        this.listenerGameStart = this.listenerGameStart.bind(this);
        this.listenerGameStop = this.listenerGameStop.bind(this);
    }

    public listenerGameStart(_: Event) {
        const serviceScheduler: ServiceScheduler = get(ServiceScheduler);
        serviceScheduler.stateSocialIntro(false);
        serviceScheduler.stateFirstScreen(false);

        const animationService: ServiceAnimation = get(ServiceAnimation);
        animationService.start();
    }

    public listenerGameStop(_: Event) {
        const animationService: ServiceAnimation = get(ServiceAnimation);
        animationService.stop();
    }

}
