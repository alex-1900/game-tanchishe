import { container } from "./Container";

/**
 * Bind the event and controller.
 * @param type Event type
 * @param cls Controller
 * @param method The Controller method
 */
export function eventMapping(type: string, cls: any, method: string) {
    document.addEventListener(type, get(cls)[method]);
}

/**
 * Dispatch an Event.
 * @param event Evnet
 */
export function eventDispatch(event: Event) {
    document.dispatchEvent(event);
}

/**
 * 高阶函数，返回一个能够绑定特定 defination 的函数
 * @param defination Defination 构造器
 */
export function serviceDifinationRegister(defination: Function) {
    return function (service: any) {
        container.def(service.KEY, defination.call(container, service));
    }
}

/**
 * 生成 UUID v4 版本字符串
 */

export function makeUUIDV4() {
    return (String(1e7)+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, (c: any) =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export function make(def: any, ...params: any): any {
    return container.make(def.KEY, ...params);
}

export function get(def: any): any {
    return container.get(def.KEY);
}
