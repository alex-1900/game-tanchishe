import { MaskRelated, Indexable } from "../interface";

export default class Animation {
    public static KEY: string = 'Service.Animation';

    private isRunning: boolean = false;

    private req: number = 0;

    private entities: Indexable<MaskRelated> = {};

    public start() {
        this.isRunning = true;
        const step = ((timestamp: number) => {
            if (this.isRunning) {
                for (const i in this.entities) {
                    this.entities[i].update(timestamp);
                }
                this.req = requestAnimationFrame(step);
            }
        }).bind(this);
        this.req = requestAnimationFrame(step);
    }

    public addEntity(entity: MaskRelated) {
        this.entities[entity.getUniqueId()] = entity;
    }

    public removeEntity(entity: MaskRelated) {
        const uniqueId = entity.getUniqueId();
        if (this.entities[uniqueId]) {
            this.entities[uniqueId].onDestruct();
            delete this.entities[uniqueId];
        }
    }

    public stop() {
        this.isRunning = false;
        cancelAnimationFrame(this.req);
    }
}
