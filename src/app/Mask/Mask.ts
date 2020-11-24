import { get, makeUUIDV4 } from "../Common/functions";
import { MaskRelated } from "../interface";
import GameScreen from "../Service/Facade/GameScreen";

export default abstract class Mask implements MaskRelated {

    public constructor() {
        const gameScreenService: GameScreen = get(GameScreen);
        const canvas = gameScreenService.buildMask();
        document.getElementById('app').appendChild(canvas);
    }

    public abstract update(timestamp: number): any;

    public getUniqueId(): string {
        return makeUUIDV4();
    }

    public onDestruct(): void {

    }
}
