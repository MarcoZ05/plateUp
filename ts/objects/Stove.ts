import GameObject from "../GameObject.js";
import { COOKING_TIME } from "../constants.js";

export class Stove extends GameObject {
  constructor(settings: { x: number; y: number; w: number; h: number }) {
    super(settings.x, settings.y, settings.w, settings.h, "assets/stove.png");
  }

  update() {
    if (this.placedItem && this.placedItem.cookingTime !== null) {
      if (this.placedItem.cookingTime === undefined)
        this.placedItem.cookingTime = 0;
      this.placedItem.cookingTime++;
      if (this.placedItem.cookingTime > COOKING_TIME) {
        this.placedItem.cookingTime = 0;
        this.placedItem = this.placedItem.cook();
      }
    }
  }
}
