import { Container } from "../app/Common/Container";
import { serviceDifinationRegister } from "../app/Common/functions";
import CtrlFacade from "../app/Controller/Facade";
import CtrlGame from "../app/Controller/Game";
import ServiceUserScreen from "../app/Service/Facade/UserScreen";
import ServiceAnimation from "../app/Service/Animation";
import ServiceDocument from "../app/Service/Document";
import ServiceDomHelper from "../app/Service/Facade/DomHelper";
import ServiceScheduler from "../app/Service/Facade/Scheduler";
import ServiceGameScreen from "../app/Service/Facade/GameScreen";
import EntityBackground from "../app/Entity/Facade/Background";
import EntityMainTitle from "../app/Entity/Facade/MainTitle";
import EntityNameInput from "../app/Entity/Facade/NameInput";
import EntityStartGameButton from "../app/Entity/Facade/StartGameButton";
import EntitySocialButton from "../app/Entity/Facade/SocialButton";
import EntityIntroBoard from "../app/Entity/Facade/IntroBoard";
import EntityBackButton from "../app/Entity/Facade/BackButton";
import EntityMask from "../app/Entity/Game/Mask";
import ServiceShapes from "../app/Service/Shapes";

const defaultRegister = serviceDifinationRegister((service: any) => {
    return (_: Container) => new service;
});

defaultRegister(CtrlFacade);
defaultRegister(CtrlGame);

defaultRegister(ServiceAnimation);
defaultRegister(ServiceDocument);
defaultRegister(ServiceUserScreen);
defaultRegister(ServiceDomHelper);
defaultRegister(ServiceScheduler);
defaultRegister(ServiceGameScreen);
defaultRegister(ServiceShapes);

defaultRegister(EntityBackground);
defaultRegister(EntityMainTitle);
defaultRegister(EntityNameInput);
defaultRegister(EntityStartGameButton);
defaultRegister(EntityIntroBoard);
defaultRegister(EntityBackButton);

serviceDifinationRegister((service: any) => {
    return (s: string, c: Function, bc: string, h: string) => new service(s, c, bc, h);
})(EntitySocialButton);

serviceDifinationRegister((service: any) => {
    return () => new service();
})(EntityMask);
