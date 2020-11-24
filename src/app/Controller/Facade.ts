import { container } from "../Common/Container";
import ServiceScheduler from "../Service/Facade/Scheduler";
import Controller from "./Controller";

export default class Facade extends Controller {

    public static KEY: string = 'Controller.Facade';

    public constructor() {
        super();
        this.listenerReady = this.listenerReady.bind(this);
        this.listenerSocialIntro = this.listenerSocialIntro.bind(this);
        this.listenerSocialRank = this.listenerSocialRank.bind(this);
    }

    public listenerReady(_: Event) {
        const serviceScheduler: ServiceScheduler = container.get(ServiceScheduler.KEY);
        serviceScheduler.stateSocialIntro(false);
        serviceScheduler.stateFirstScreen(true);
    }

    public listenerSocialIntro(_: Event) {
        const serviceScheduler: ServiceScheduler = container.get(ServiceScheduler.KEY);
        serviceScheduler.stateFirstScreen(false);
        serviceScheduler.stateSocialIntro(true);
    }

    public listenerSocialRank(_: Event) {
        alert('敬请期待');
    }

}
