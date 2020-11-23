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
        if (this.store[key] === undefined) {
            this.store[key] = this.make(key);
        }
        return this.store[key];
    }

    public set(key: string, val: any) {
        this.store[key] = val;
    }

    public def(key: string, defination: Function) {
        this.definations[key] = defination;
    }

    public make(key: string, ...params: any): any {
        if (this.definations[key] !== undefined) {
            const val = this.definations[key].apply(this, params);
            if (val !== undefined) {
                return val;
            }
        }
        throw new Error('The value is not found in container.');
    }
}

export const container = new Container();
