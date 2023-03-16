import Game from "./Game.js";
import { Worktop } from "./objects.js";

const canvas = document.getElementById("game") as HTMLCanvasElement;
const game = new Game(canvas, { w: 1920, h: 1080 });

// game.addPlayer(
//   { x: 500, y: 500 },
//   { w: 150, h: 150 },
//   "aqua",
//   "CopiedByKakashi",
//   true
// );

game.addGameObject(
  new Worktop({
    x: 0,
    y: 0,
    w: 64 * 10,
    h: 64 * 10,
  })
);

game.run();
