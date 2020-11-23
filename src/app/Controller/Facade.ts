import { EventCtrlGameStart, EventCtrlGameStop } from "../../config/events";
import { container } from "../Common/Container";
import { eventDispatch } from "../Common/functions";
import ServiceFirstScreen from "../Service/Facade/FirstScreen";
import Controller from "./Controller";

export default class Facade extends Controller {

    public static KEY: string = 'Controller.Facade';

    public constructor() {
        super();
        this.listenerReady = this.listenerReady.bind(this);
    }

    public listenerReady(_: Event) {
        // eventDispatch(EventCtrlGameStart)
        const serviceFirstScreen: ServiceFirstScreen = container.get(ServiceFirstScreen.KEY);
        const firstScreen = serviceFirstScreen.getDom();
        document.getElementById('app').appendChild(firstScreen);
    }

}
