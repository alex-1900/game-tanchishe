export interface Indexable<T> {
    [key: string]: T
}

export interface ElementOption {
    css?: any,
    className?: string,
    hidden?: boolean,
    id?: string,
    innerHTML?: string,
    innerText?: string
}

export interface Strategy {
    algorithm(): any;
}
