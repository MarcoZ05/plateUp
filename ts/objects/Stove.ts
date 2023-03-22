import GameObject from "../GameObject.js";

export class Stove extends GameObject {
  constructor(settings: { x: number; y: number; w: number; h: number }) {
    super(settings.x, settings.y, settings.w, settings.h, "assets/stove.png");
  }

  update() {
    if (this.placedItem && this.placedItem.cookingTime !== null) {
      if (this.placedItem.cookingTime === undefined)
        this.placedItem.cookingTime = 0;
      this.placedItem.cookingTime++;
      if (this.placedItem.cookingTime > 100) {
        this.placedItem.cookingTime = 0;
        this.placedItem = this.placedItem.cook();
      }
    }
  }
}
