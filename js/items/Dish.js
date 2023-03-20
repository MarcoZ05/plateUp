import GameItem from "../GameItem.js";
export class Dish extends GameItem {
    constructor() {
        super("dish", "assets/dish.png", {}, ["place"]);
    }
}
