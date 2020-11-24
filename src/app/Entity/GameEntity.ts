import { makeUUIDV4 } from "../Common/functions";
import { FrameRelated } from "../interface";

export default abstract class GameEntity implements FrameRelated {

    public abstract update(timestamp: number): any;

    public getUniqueId(): string {
        return makeUUIDV4();
    }

    public onDestruct(): void {

    }
}
