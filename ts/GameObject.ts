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

  draw(ctx: CanvasRenderingContext2D) {
    // check if image is loaded
    if (this.image.complete)
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  update() {}
}

export default GameObject;
