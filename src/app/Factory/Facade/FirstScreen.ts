import Background from "../../Entity/Facade/Background";

export default class FirstScreen {
    public static KEY: string = 'Factory.Facade.FirstScreen';

    public make(): HTMLElement {
        const background = new Background();
        return background.create();
    }
}
