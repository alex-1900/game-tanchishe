import EntityBackground from "../../Entity/Facade/Background";
import MainTitle from "../../Entity/Facade/MainTitle";
import NameInput from "../../Entity/Facade/NameInput";
import StartGameButton from "../../Entity/Facade/StartGameButton";
import SocialButton from "../../Entity/Facade/SocialButton";
import { EventSocialIntro, EventSocialRank } from "../../../config/events";
import ServiceDomHelper from "./DomHelper";
import IntroBoard from "../../Entity/Facade/IntroBoard";
import { APP_HOME_LINK } from "../../../config/constant";
import BackButton from "../../Entity/Facade/BackButton";
import { get, make } from "../../Common/functions";

export default class UserScreen {
    public static KEY: string = 'Service.Facade.UserScreen';

    private domHelper: ServiceDomHelper;

    public constructor() {
        this.domHelper = get(ServiceDomHelper);
    }

    public buildFirstScreen(): HTMLElement {
        const bg = this.domHelper.makeFromEntity(get(EntityBackground));
        const title = this.domHelper.makeFromEntity(get(MainTitle));
        const inputWrap = this.domHelper.getWarper(this.domHelper.makeFromEntity(get(NameInput)));
        const startBtnWrap = this.domHelper.getWarper(this.domHelper.makeFromEntity(get(StartGameButton)));
        const socialWraper = this.domHelper.getWarper();

        socialWraper.appendChild(this.domHelper.makeFromEntity(
            make(SocialButton, '简介', this.domHelper.handlerEvent(EventSocialIntro), '#F4A460')
        ));
        socialWraper.appendChild(this.domHelper.makeFromEntity(
            make(SocialButton, '主站', null, '#5F9EA0', APP_HOME_LINK)
        ));
        socialWraper.appendChild(this.domHelper.makeFromEntity(
            make(SocialButton, '排行', this.domHelper.handlerEvent(EventSocialRank), '#8FBC8F')
        ));

        bg.appendChild(title);
        bg.appendChild(inputWrap);
        bg.appendChild(startBtnWrap);
        bg.appendChild(socialWraper);
        return bg;
    }

    public buildSocialIntro(): HTMLElement {
        const bg = this.domHelper.makeFromEntity(get(EntityBackground));
        const backBar = this.domHelper.getWarper(
            this.domHelper.makeFromEntity(get(BackButton)),
            {textAlign: 'left'}
        );
        const introBoard = this.domHelper.makeFromEntity(get(IntroBoard));

        bg.appendChild(backBar);
        bg.appendChild(introBoard);
        return bg;
    }
}
