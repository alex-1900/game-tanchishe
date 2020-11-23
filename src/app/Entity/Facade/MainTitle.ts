import { APP_NAME_ZH } from '../../../config/constant'

export default class MainTitle {
    static KEY = 'Entity.Facade.MainTitle';

    tag: string = 'h1';

    style = {
        textAlign: 'center',
        lineHeight: '6rem'
    }

    innerText: string = APP_NAME_ZH;
}
