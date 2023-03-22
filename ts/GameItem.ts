import { COOKING_TIME } from "./constants.js";

class GameItem {
  name: string;
  image: HTMLImageElement = new Image();
  combinations: Record<string, GameItem> = {};
  placeable: boolean = false;
  cookingTime: number | null = null;
  constructor(
    name: string,
    imageSrc: string,
    combinations: Record<string, GameItem> = {},
    placeable: boolean = false,
    cookable: boolean = false
  ) {
    this.name = name;
    this.image.src = imageSrc;
    this.combinations = combinations;
    this.placeable = placeable;
    if (cookable) this.cookingTime = 0;
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
    if (showCookingTime && this.cookingTime !== null) {
      ctx.fillStyle = "black";
      ctx.fillRect(x, y + height - 10, width, 10);
      ctx.fillStyle = "lime";
      ctx.fillRect(x, y + height - 10, (this.cookingTime / COOKING_TIME) * width, 10);
    }
  }
}

export default GameItem;
