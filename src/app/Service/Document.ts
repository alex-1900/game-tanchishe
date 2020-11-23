import { ElementOption } from "../interface";

export default class Document {
    public static KEY: string = 'Service.Document';

    public box(type: string = 'div'): any {
        const element = document.createElement(type);
        return element;
    }

    public options(element: HTMLElement, options: ElementOption = {}): any {

        const css: CSSStyleDeclaration = options.css;
        if (css && Object.keys(css).length > 0) {
            for (const name in css) {
                element.style[name] = css[name];
            }
        }

        if (options.id) {
            element.id = options.id;
        }

        if (options.className) {
            element.className += options.className || '';
        }

        element.hidden = options.hidden || false;

        if (options.innerHTML) {
            element.innerHTML = options.innerHTML;
        }

        if (options.innerText) {
            element.innerText = options.innerText;
        }

        return element;
    }
}
