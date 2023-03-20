import GameItem from "../GameItem.js";

export class Steak extends GameItem {
  constructor() {
    super("steak", "assets/steak.png", {}, ["place", "cook", "combine"]);
  }
}
