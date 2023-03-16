class GameItem {
  name: string;
  image: HTMLImageElement = new Image();
  constructor(name: string, imageSrc: string) {
    this.name = name;
    this.image.src = imageSrc;
  }

  draw(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    ctx.drawImage(this.image, x, y, width, height);
  }
}

export default GameItem;
