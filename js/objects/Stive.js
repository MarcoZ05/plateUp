import GameObject from "../GameObject";
export class Stove extends GameObject {
    constructor(settings) {
        super(settings.x, settings.y, settings.w, settings.h, "assets/stove.png");
        this.cookingTime = 0;
    }
    update() {
        if (this.placedItem && this.placedItem.interactions.includes("cook")) {
            this.cookingTime++;
            if (this.cookingTime >= 100) {
                this.placedItem = null;
                this.cookingTime = 0;
            }
        }
        else
            this.cookingTime = 0;
    }
}
