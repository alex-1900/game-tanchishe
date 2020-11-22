import { ElementOption } from "../interface";

export default class Document {
    public static KEY: string = 'Service.Document';

    public box(dom: HTMLElement = null, type: string = 'div'): HTMLElement {
        const element = document.createElement(type);
        if (dom) {
            element.appendChild(dom);
        }
        return element;
    }

    public options(element: HTMLElement, options: ElementOption = {}): HTMLElement {
        element.className += options.className || '';
        element.hidden = options.hidden || false;

        const css: CSSStyleDeclaration = options.css;
        if (css && Object.keys(css).length > 0) {
            for (const name in css) {
                element.style[name] = css[name];
            }
        }

        if (options.id) {
            element.id = options.id;
        }

        if (options.innerHTML) {
            element.innerHTML = options.innerHTML;
        }

        if (options.innerText) {
            element.innerText = options.innerText;
        }

        return element;
    }
}
