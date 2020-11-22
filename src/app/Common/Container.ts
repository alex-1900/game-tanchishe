import { Indexable } from "../interface";

export class Container {
    private store: Indexable<any> = {};

    private definations: Indexable<Function> = {};

    public has(key: string): boolean {
        return !(
            this.store[key] === undefined && this.definations[key] === undefined
        )
    }

    public get<T = any>(key: string): T {
        if (this.store[key] !== undefined) {
            return this.store[key];
        }
        if (this.definations[key] !== undefined) {
            const val = this.definations[key].call(this, this);
            if (val !== undefined) {
                this.store[key] = val;
                return val;
            }
        }
        throw new Error('The value is not found in container.');
    }

    public set(key: string, val: any) {
        this.store[key] = val;
    }

    public def(key: string, defination: Function) {
        this.definations[key] = defination;
    }
}

export const container = new Container();
