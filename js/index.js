import Game from "./Game.js";
import { Dish } from "./items.js";
import { Worktop, Stove } from "./objects.js";
const canvas = document.getElementById("game");
const game = new Game(canvas, { w: 1920, h: 1080 });
game.ctx.imageSmoothingEnabled = false;
game.addPlayer({ x: 500, y: 500 }, { w: 150, h: 150 }, "./assets/player.png", "CopiedByKakashi", true);
const worktop = new Worktop({
    x: 0,
    y: 0,
    w: 250,
    h: 250,
});
worktop.placedItem = new Dish();
game.addGameObject(worktop);
game.addGameObject(new Worktop({
    x: 0,
    y: 250,
    w: 250,
    h: 250,
}));
game.addGameObject(new Worktop({
    x: 0,
    y: 500,
    w: 250,
    h: 250,
}));
game.addGameObject(new Stove({
    x: 0,
    y: 750,
    w: 250,
    h: 250,
}));
game.run();
