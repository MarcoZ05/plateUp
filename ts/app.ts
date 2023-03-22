import Game from "./Game.js";

const canvas = document.getElementById("game") as HTMLCanvasElement;
const game = new Game(canvas, { w: 1920, h: 1080 });

game.test()
game.start();
