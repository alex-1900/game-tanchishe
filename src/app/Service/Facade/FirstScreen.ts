import { container } from "../../Common/Container";
import ServiceDocument from "../Document";
import EntityBackground from "../../Entity/Facade/Background";
import MainTitle from "../../Entity/Facade/MainTitle";
import NameInput from "../../Entity/Facade/NameInput";
import StartGameButton from "../../Entity/Facade/StartGameButton";

export default class FirstScreen {
    public static KEY: string = 'Service.Facade.FirstScreen';

    private docService: ServiceDocument;

    public constructor() {
        this.docService = container.get(ServiceDocument.KEY);
    }

    public getDom(): HTMLElement {
        const bg = this.makeFromEntity(EntityBackground);
        const title = this.makeFromEntity(MainTitle);
        const inputWrap = this.getWarper(this.makeFromEntity(NameInput));
        const startBtnWrap = this.getWarper(this.makeFromEntity(StartGameButton));

        bg.appendChild(title);
        bg.appendChild(inputWrap);
        bg.appendChild(startBtnWrap);
        return bg;
    }

    private getWarper(dom: HTMLElement): HTMLElement {
        const doc = this.docService;
        const element = doc.options(doc.box('div'), {
            css: {textAlign: 'center'}
        });
        element.appendChild(dom);
        return element;
    }

    private makeFromEntity(entityDef: any): HTMLElement {
        const entity = container.get(entityDef.KEY);
        const doc = this.docService;
        const dom = doc.options(doc.box(entity.tag), {
            css: entity.style
        });

        if (entity.onclick) {
            dom.onclick = entity.onclick;
        }

        if (entity.innerText) {
            dom.innerText = entity.innerText;
        }

        if (entity.innerHTML) {
            dom.innerHTML = entity.innerHTML;
        }

        if (entity.type) {
            dom.type = entity.type;
        }
        return dom;
    }
}
