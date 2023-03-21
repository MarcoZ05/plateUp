import GameItem from "../GameItem.js";

export class Steak_Overcooked extends GameItem {
    constructor() {
        super("steak_overcooked", "assets/steak_2.png", {}, ["place", "combine"]);
    }
}