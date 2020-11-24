import { get } from "../../Common/functions";
import Mask from "../../Entity/Game/Mask";
import ServiceDomHelper from "./DomHelper";

export default class GameScreen {
    public static KEY: string = 'Service.Facade.GameScreen';

    private domHelper: ServiceDomHelper;

    public constructor() {
        this.domHelper = get(ServiceDomHelper);
    }

    public buildMask(): HTMLCanvasElement {
        const canvas = this.domHelper.makeFromEntity(get(Mask));
        return canvas;
    }
}
