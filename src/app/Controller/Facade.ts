import { EventCtrlGameStart, EventCtrlGameStop } from "../../config/events";
import { container } from "../Common/Container";
import { eventDispatch } from "../Common/functions";
import FactoryFirstScreen from "../Factory/Facade/FirstScreen";
import Controller from "./Controller";

export default class Facade extends Controller {

    public static KEY: string = 'Controller.Facade';

    public constructor() {
        super();
        this.listenerReady = this.listenerReady.bind(this);
    }

    public listenerReady(_: Event) {
        // eventDispatch(EventCtrlGameStart)
        const factoryFirstScreen: FactoryFirstScreen = container.get(FactoryFirstScreen.KEY);
        const firstScreen = factoryFirstScreen.make();
        document.getElementById('app').appendChild(firstScreen);
    }

}
