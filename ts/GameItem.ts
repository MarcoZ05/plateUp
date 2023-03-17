class GameItem {
  name: string;
  image: HTMLImageElement = new Image();
  combinations:{};
  constructor(name: string, imageSrc: string, combinations:{}) {
    this.name = name;
    this.image.src = imageSrc;
    this.combinations = combinations
  }

  combine(item:GameItem){

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
