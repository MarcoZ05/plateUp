class GameItem {
  name: string;
  image: HTMLImageElement = new Image();
  combinations: Record<string, GameItem> = {};
  interactions: string[]; // "cook", "place", "combine"
  cookingTime: number = 0;
  constructor(
    name: string,
    imageSrc: string,
    combinations: Record<string, GameItem> = {},
    interactions: string[] = ["place"]
  ) {
    this.name = name;
    this.image.src = imageSrc;
    this.combinations = combinations;
    this.interactions = interactions;
  }

  combine(placedItem: GameItem) {
    if (this.combinations[placedItem.name]) {
      return this.combinations[placedItem.name];
    } else {
      return null;
    }
  }

  cook(): GameItem {
    return this
  }

  draw(
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number,
    showCookingTime: boolean = false
  ): void {
    ctx.drawImage(this.image, x, y, width, height);

    // draw cooking time
    if (this.interactions.includes("cook") && showCookingTime) {
      ctx.fillStyle = "black";
      ctx.fillRect(x, y + height - 10, width, 10);
      ctx.fillStyle = "red";
      ctx.fillRect(x, y + height - 10, (width / 100) * this.cookingTime, 10);
    }
  }
}

export default GameItem;
