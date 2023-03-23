import GameItem from "./GameItem.js";

class GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  image: HTMLImageElement = new Image();
  placedItem: GameItem | null = null;
  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    imageSrc: string
  ) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image.src = imageSrc;
    this.image.style.imageRendering = "pixelated";
  }

  drawImage(ctx: CanvasRenderingContext2D): void {
    if (this.image.complete) {
      ctx.drawImage(
        this.image,
        this.x,
        this.y,
        this.width,
        this.height
      );
    }
  }

  drawItem(ctx: CanvasRenderingContext2D): void {
    if (this.placedItem)
      this.placedItem.draw(
        ctx,
        this.x + this.width / 4,
        this.y + this.height / 4,
        this.width / 2,
        this.height / 2,
        true
      );
  }

  draw(ctx: CanvasRenderingContext2D): void {
    // check if image is loaded
    this.drawImage(ctx);

    // draw the placed item
    this.drawItem(ctx);
  }

  update() {
  }
}

export default GameObject;
