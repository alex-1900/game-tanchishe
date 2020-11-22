import { Container } from "../app/Common/Container";
import { serviceDifinationRegister } from "../app/Common/functions";
import CtrlFacade from "../app/Controller/Facade";
import CtrlGame from "../app/Controller/Game";
import FactoryFirstScreen from "../app/Factory/Facade/FirstScreen";
import ServiceAnimation from "../app/Service/Animation";
import ServiceDocument from "../app/Service/Document";

const defaultRegister = serviceDifinationRegister((service: any) => {
    return (_: Container) => new service;
});

defaultRegister(CtrlFacade);
defaultRegister(CtrlGame);
defaultRegister(ServiceAnimation);
defaultRegister(ServiceDocument);
defaultRegister(FactoryFirstScreen);
