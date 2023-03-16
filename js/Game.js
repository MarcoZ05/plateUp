import KeyListener from "./KeyListener.js";
import Player from "./Player.js";
class Game {
    constructor(canvas, size) {
        this.gameObjects = [];
        this.player = [];
        // get canvas and context
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        // set canvas size
        this.canvas.width = size.w;
        this.canvas.height = size.h;
        // init key listener
        this.keyListener = new KeyListener();
    }
    addPlayer(pos, size, color, name, controlledByUser) {
        const player = new Player(pos.x, pos.y, size.w, size.h, color, name);
        this.player.push(player);
        if (controlledByUser)
            this.initPlayerControl(player);
    }
    addGameObject(gameObject) {
        this.gameObjects.push(gameObject);
    }
    draw() {
        // clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // draw game objects
        this.gameObjects.forEach((gameObject) => gameObject.draw(this.ctx));
        // draw players
        this.player.forEach((player) => player.draw(this.ctx));
    }
    update() {
        // update game objects
        this.gameObjects.forEach((gameObject) => gameObject.update());
        // update players
        this.player.forEach((player) => player.update());
        // update key listener
        this.keyListener.update();
    }
    initPlayerControl(player, steps = 10) {
        this.keyListener.addKey("w", () => {
            player.move({ x: 0, y: -steps }, this.gameObjects, this.canvas);
        }, (w) => (player.direction.w = w));
        this.keyListener.addKey("s", () => {
            player.move({ x: 0, y: steps }, this.gameObjects, this.canvas);
        }, (s) => (player.direction.s = s));
        this.keyListener.addKey("a", () => {
            player.move({ x: -steps, y: 0 }, this.gameObjects, this.canvas);
        }, (a) => (player.direction.a = a));
        this.keyListener.addKey("d", () => {
            player.move({ x: steps, y: 0 }, this.gameObjects, this.canvas);
        }, (d) => (player.direction.d = d));
    }
    run() {
        this.draw();
        this.update();
        requestAnimationFrame(() => this.run());
    }
}
export default Game;
