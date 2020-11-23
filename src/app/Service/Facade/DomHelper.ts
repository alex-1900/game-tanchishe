import { container } from "../../Common/Container";
import ServiceDocument from "../Document";
import { eventDispatch } from "../../Common/functions";

export default class DomHelper {
    public static KEY: string = 'Service.Facade.DomHelper';

    private docService: ServiceDocument;

    public constructor() {
        this.docService = container.get(ServiceDocument.KEY);
        this.handlerEvent = this.handlerEvent.bind(this);
    }

    public getWarper(dom: HTMLElement = null): HTMLElement {
        const doc = this.docService;
        const element = doc.options(doc.box('div'), {
            css: {textAlign: 'center'}
        });
        if (dom) {
            element.appendChild(dom);
        }
        return element;
    }

    public makeFromEntity(entity: any): HTMLElement {
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

        if (entity.placeholder) {
            dom.placeholder = entity.placeholder;
        }

        if (entity.href) {
            dom.href = entity.href;
        }

        if (entity.target) {
            dom.target = entity.target;
        }

        return dom;
    }

    public handlerEvent(event: Event) {
        return (e: Event) => {
            e.preventDefault();
            eventDispatch(event);
        }
    }
}
