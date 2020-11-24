import { get } from "../../Common/functions";
import ServiceUserScreen from "./UserScreen";

export default class Scheduler {
    public static KEY: string = 'Service.Facade.Scheduler';

    private firstScreen: HTMLElement = null;

    private socialIntro: HTMLElement = null;

    private serviceUserScreen: ServiceUserScreen;

    public constructor() {
        this.serviceUserScreen = get(ServiceUserScreen);
    }

    public stateFirstScreen(active: boolean) {
        if (active) {
            if (!this.firstScreen) {
                this.firstScreen = this.serviceUserScreen.buildFirstScreen();
                document.getElementById('app').appendChild(this.firstScreen);
            }
        }
        if (this.firstScreen) {
            this.firstScreen.hidden = !active;
        }
    }

    public stateSocialIntro(active: boolean) {
        if (active) {
            if (!this.socialIntro) {
                this.socialIntro = this.serviceUserScreen.buildSocialIntro();
                document.getElementById('app').appendChild(this.socialIntro);
            }
        }
        if (this.socialIntro) {
            this.socialIntro.hidden = !active;
        }
    }
}
