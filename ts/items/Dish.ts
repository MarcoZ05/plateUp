import GameItem from "../GameItem.js";
import { Dish_Steak_Raw } from "../items.js";

export class Dish extends GameItem {
  constructor() {
    super("dish", "assets/dish.png", {
      steak_raw: new Dish_Steak_Raw(),
    }, ["place"]);
  }
}
