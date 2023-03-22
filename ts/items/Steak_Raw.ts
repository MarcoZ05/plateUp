import GameItem from "../GameItem.js";
import { Dish_Steak_Raw, Steak_Cooked } from "../items.js";

export class Steak_Raw extends GameItem {
  constructor() {
    super("steak_raw", "assets/steak_0.png", {
      dish: new Dish_Steak_Raw(),
    }, ["place", "cook", "combine"]);
  }

  cook() {
    return new Steak_Cooked();
  }
}
