import GameObject from "../GameObject.js";
export class Worktop extends GameObject {
    constructor(settings) {
        super(settings.x, settings.y, settings.w, settings.h, "assets/worktop.png");
    }
    update() { }
}
