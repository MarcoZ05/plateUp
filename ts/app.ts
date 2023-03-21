import Game from "./Game.js";
import { Dish, Steak_Raw } from "./items.js";
import { Worktop, Stove, Trash } from "./objects.js";

const canvas = document.getElementById("game") as HTMLCanvasElement;
const game = new Game(canvas, { w: 1920, h: 1080 });
game.ctx.imageSmoothingEnabled = false;

game.addPlayer(
  { x: 500, y: 500 },
  { w: 150, h: 150 },
  "./assets/player.png",
  "CopiedByKakashi",
  true
);

const worktop1 = new Worktop({
  x: 0,
  y: 0,
  w: 250,
  h: 250,
});
worktop1.placedItem = new Dish();
game.addGameObject(worktop1);

const worktop2 = new Worktop({
  x: 0,
  y: 250,
  w: 250,
  h: 250,
});
worktop2.placedItem = new Steak_Raw();
game.addGameObject(worktop2);

const stove = new Stove({
  x: 0,
  y: 500,
  w: 250,
  h: 250,
});
game.addGameObject(stove);

const trash = new Trash({
  x: 0,
  y: 750,
  w: 250,
  h: 250,
});
game.addGameObject(trash);

game.run();
