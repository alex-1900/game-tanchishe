import GameEntity from "../GameEntity";

export default class SnakeHead extends GameEntity {
    static KEY = 'Entity.Game.SnakeHead';

    num: number;

    public constructor(num: number) {
        super();
        this.num = num;
    }

    public update(timestamp: number): any {
        console.log(this.num);
    }
}
