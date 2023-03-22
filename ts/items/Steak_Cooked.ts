import GameItem from "../GameItem.js";
import { Dish_Steak_Cooked, Steak_Overcooked } from "../items.js";

export class Steak_Cooked extends GameItem {
    constructor() {
        super("steak_cooked", "assets/steak_1.png", {
            dish: new Dish_Steak_Cooked(),
        }, true, true);
    }

    cook() {
        return new Steak_Overcooked();
    }
}