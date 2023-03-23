import GameObject from "../GameObject.js";
import GameItem from "../GameItem.js";

export class Worktop extends GameObject {
  servingItem: GameItem | null = null;
  autoSpawn: GameItem | null = null;
  constructor(settings: { x: number; y: number; w: number; h: number }) {
    super(settings.x, settings.y, settings.w, settings.h, "assets/worktop.png");
  }

  addServingItem(item: GameItem) {
    this.servingItem = item;
  }

  draw(ctx: CanvasRenderingContext2D): void {
    super.draw(ctx);

    if (this.servingItem) {

      ctx.fillStyle = "black";
      ctx.beginPath();
      ctx.arc(
        this.x + this.width / 4,
        this.y + this.height / 4,
        this.width / 5 + 4,
        0,
        2 * Math.PI
      );
      ctx.fill();

      ctx.fillStyle = "white";
      ctx.beginPath();
      ctx.arc(
        this.x + this.width / 4,
        this.y + this.height / 4,
        this.width / 5,
        0,
        2 * Math.PI
      );
      ctx.fill();

      // draw the serving items
      this.servingItem.draw(
        ctx,
        this.x + this.width / 12,
        this.y + this.height / 12,
        this.width / 3,
        this.height / 3
      );
    }
  }

  update() {
    super.update();

    // serve the items in the servingItems array
    if (this.placedItem !== null && this.servingItem !== null && this.servingItem.name === this.placedItem.name) {
      this.servingItem = null;
      this.placedItem = null;
    }

    // auto spawn items
    if (this.autoSpawn !== null) {
      this.placedItem = this.autoSpawn;
      this.autoSpawn = null;
    }
  }
}
