import { EventCtrlPageIndex } from "../../../config/events";
import { eventDispatch } from "../../Common/functions";

export default class IntroBoard {
    static KEY = 'Entity.Facade.IntroBoard'

    tag: string = 'div';

    innerText: string = `
贪吃蛇大作战，这是一个有毒的游戏！

这是一款超好玩的休闲竞技游戏，不仅比拼手速，更考验你的策略！在贪吃蛇大作战的世界中，每个人在初始都化身为一条小蛇，通过不断努力变得越来越长，最终制霸一方！

游戏玩法
1.控制摇杆走位你的小蛇，吃掉地图上彩色的小圆点，就会变长。
2.小心！蛇头碰到其他贪吃蛇就会死亡，并且产生大量小圆点。
3.长按加速键，用巧妙的走位让蛇身被别人撞上，就可以吃掉尸体迅速变长。
    `;

    style = {
        margin: '2rem',
        lineHeight: '2rem'
    }

    public onclick(_: Event) {
        eventDispatch(EventCtrlPageIndex)
    }
}
