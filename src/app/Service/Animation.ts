export default class Animation {
    public static KEY: string = 'Service.Animation';

    private isRunning: boolean = false;

    private req: number = 0;

    private frameUpdatedHandler: Function = null;

    public start() {
        this.isRunning = true;
        const step = ((timestamp: number) => {
            if (this.isRunning && this.frameUpdatedHandler) {
                this.frameUpdatedHandler(timestamp);
                this.req = requestAnimationFrame(step);
            }
        }).bind(this);
        this.req = requestAnimationFrame(step);
    }

    public setFrameUpdatedHandler(handler: Function) {
        this.frameUpdatedHandler = handler;
    }

    public stop() {
        this.isRunning = false;
        cancelAnimationFrame(this.req);
    }
}
