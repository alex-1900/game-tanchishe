import { EventCtrlGameStart } from "../../../config/events";
import { eventDispatch } from "../../Common/functions";

export default class StartGameButton {
    static KEY = 'Entity.Facade.StartGameButton';

    tag: string = 'button';

    type: string = 'button';

    innerText: string = 'Game Start';

    style = {
        display: 'inline-block',
        padding: '.5rem',
        margin: '2rem',
        background: '#FFFAFA',
        border: '1px solid #CCC',
        borderRadius: '5px'
    }

    public onclick(_: Event) {
        eventDispatch(EventCtrlGameStart)
    }
}
