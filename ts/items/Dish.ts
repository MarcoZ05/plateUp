import GameItem from "../GameItem.js";
import { Dish_Steak_Raw, Dish_Steak_Cooked, Dish_Steak_Overcooked } from "../items.js";

export class Dish extends GameItem {
  constructor() {
    super("dish", "assets/dish.png", {
      steak_raw: new Dish_Steak_Raw(),
      steak_cooked: new Dish_Steak_Cooked(),
      steak_overcooked: new Dish_Steak_Overcooked(),
    }, true);
  }
}
