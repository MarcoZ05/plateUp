import GameObject from "../GameObject.js";

export class Worktop extends GameObject {
  constructor(settings: { x: number; y: number; w: number; h: number }) {
    super(settings.x, settings.y, settings.w, settings.h, "assets/worktop.png");
  }

  update() {}
}
