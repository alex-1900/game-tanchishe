import { container } from "./Container";

/**
 * Bind the event and controller.
 * @param type Event type
 * @param cls Controller
 * @param method The Controller method
 */
export function eventMapping(type: string, cls: any, method: string) {
    const key = cls.KEY;
    document.addEventListener(type, container.get(key)[method]);
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
