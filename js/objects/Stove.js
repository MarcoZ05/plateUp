import GameObject from "../GameObject.js";
export class Stove extends GameObject {
    constructor(settings) {
        super(settings.x, settings.y, settings.w, settings.h, "assets/stove.png");
    }
    // add one line to
    update() {
        if (this.placedItem && this.placedItem.interactions.includes("cook")) {
            if (this.placedItem.cookingTime === undefined)
                this.placedItem.cookingTime = 0;
            this.placedItem.cookingTime++;
            if (this.placedItem.cookingTime > 100) {
                this.placedItem.cookingTime = 0;
                this.placedItem.cook();
            }
        }
    }
}
