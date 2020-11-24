import { EventCtrlPageIndex } from "../../../config/events";
import { eventDispatch } from "../../Common/functions";

export default class BackButton {
    static KEY = 'Entity.Facade.BackButton'

    tag: string = 'button';

    type: string = 'button';

    innerText: string = '↩';

    style = {
        margin: '1rem 2rem',
        padding: '.2rem .8rem',
        background: '#EEE',
        border: '1px solid #CCC',
        borderRadius: '5px'
    }

    public onclick(_: Event) {
        eventDispatch(EventCtrlPageIndex)
    }
}
