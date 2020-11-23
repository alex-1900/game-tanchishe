import { Container } from "../app/Common/Container";
import { serviceDifinationRegister } from "../app/Common/functions";
import CtrlFacade from "../app/Controller/Facade";
import CtrlGame from "../app/Controller/Game";
import EntityBackground from "../app/Entity/Facade/Background";
import ServiceFirstScreen from "../app/Service/Facade/FirstScreen";
import ServiceAnimation from "../app/Service/Animation";
import ServiceDocument from "../app/Service/Document";
import EntityMainTitle from "../app/Entity/Facade/MainTitle";
import EntityNameInput from "../app/Entity/Facade/NameInput";
import EntityStartGameButton from "../app/Entity/Facade/StartGameButton";

const defaultRegister = serviceDifinationRegister((service: any) => {
    return (_: Container) => new service;
});

defaultRegister(CtrlFacade);
defaultRegister(CtrlGame);

defaultRegister(ServiceAnimation);
defaultRegister(ServiceDocument);
defaultRegister(ServiceFirstScreen);

defaultRegister(EntityBackground);
defaultRegister(EntityMainTitle);
defaultRegister(EntityNameInput);
defaultRegister(EntityStartGameButton);
