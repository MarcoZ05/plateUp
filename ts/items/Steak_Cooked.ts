import GameItem from "../GameItem.js";
import { Steak_Overcooked } from "../items.js";

export class Steak_Cooked extends GameItem {
    constructor() {
        super("steak_cooked", "assets/steak_1.png", {}, ["place", "combine", "cook"]);
    }

    cook() {
        return new Steak_Overcooked();
    }
}