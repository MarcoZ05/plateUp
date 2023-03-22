import GameItem from "../GameItem.js";
import { Dish_Steak_Overcooked } from "../items.js";

export class Steak_Overcooked extends GameItem {
    constructor() {
        super("steak_overcooked", "assets/steak_2.png", {
            dish: new Dish_Steak_Overcooked(),
        }, true);
    }
}