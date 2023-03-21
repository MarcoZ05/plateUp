import GameObject from "../GameObject.js";

export class Trash extends GameObject {
    constructor(settings: { x: number; y: number; w: number; h: number }) {
        super(settings.x, settings.y, settings.w, settings.h, "assets/trash.png");
    }

    update() {
        if (this.placedItem) {
            this.placedItem = null;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        super.drawImage(ctx);
    }
}