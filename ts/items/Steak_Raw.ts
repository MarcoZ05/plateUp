import GameItem from "../GameItem.js";
import { Steak_Cooked } from "../items.js";

export class Steak_Raw extends GameItem {
  constructor() {
    super("steak_raw", "assets/steak_0.png", {}, ["place", "cook", "combine"]);
  }

  cook() {
    return new Steak_Cooked();
  }
}
