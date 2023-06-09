import GameObject from "./GameObject.js";
import KeyListener from "./KeyListener.js";
import Player from "./Player.js";
import { Dish, Dish_Steak_Cooked, Dish_Steak_Raw, Steak_Raw } from "./items.js";
import { Stove, Trash, Worktop } from "./objects.js";

class Game {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  gameObjects: GameObject[] = [];
  player: Player[] = [];
  keyListener: KeyListener;
  constructor(canvas: HTMLCanvasElement, size: { w: number; h: number }) {
    // get canvas and context
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d")!;
    // set canvas size
    this.canvas.width = size.w;
    this.canvas.height = size.h;
    // init key listener
    this.keyListener = new KeyListener();
  }

  addPlayer(
    pos: { x: number; y: number },
    size: { w: number; h: number },
    color: string,
    name: string,
    controlledByUser: boolean
  ) {
    const player = new Player(pos.x, pos.y, size.w, size.h, color, name);
    this.player.push(player);
    if (controlledByUser) this.initPlayerControl(player);
  }

  addGameObject(gameObject: GameObject) {
    this.gameObjects.push(gameObject);
  }

  draw() {
    // clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // draw background
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

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

  initPlayerControl(player: Player, steps: number = 10) {
    this.keyListener.addKey(
      "w",
      () => {
        player.move({ x: 0, y: -steps }, this.gameObjects, this.canvas);
      },
      (w: boolean) => (player.direction.w = w)
    );
    this.keyListener.addKey(
      "s",
      () => {
        player.move({ x: 0, y: steps }, this.gameObjects, this.canvas);
      },
      (s: boolean) => (player.direction.s = s)
    );
    this.keyListener.addKey(
      "a",
      () => {
        player.move({ x: -steps, y: 0 }, this.gameObjects, this.canvas);
      },
      (a: boolean) => (player.direction.a = a)
    );
    this.keyListener.addKey(
      "d",
      () => {
        player.move({ x: steps, y: 0 }, this.gameObjects, this.canvas);
      },
      (d: boolean) => (player.direction.d = d)
    );
    this.keyListener.addKey("e", () => {
      player.changeItem(this.gameObjects);
      player.combine(this.gameObjects);
    });
  }

  start() {
    this.ctx.imageSmoothingEnabled = false;
    this.run();
  }

  run() {
    this.draw();
    this.update();
    requestAnimationFrame(() => this.run());
  }

  test() {
    this.addPlayer(
      { x: 500, y: 500 },
      { w: 150, h: 150 },
      "./assets/player.png",
      "CopiedByKakashi",
      true
    );

    const worktop1 = new Worktop({
      x: 0,
      y: 0,
      w: 200,
      h: 200,
    });
    worktop1.placedItem = new Dish();
    this.addGameObject(worktop1);

    const worktop2 = new Worktop({
      x: 0,
      y: 200,
      w: 200,
      h: 200,
    });
    worktop2.placedItem = new Steak_Raw();
    this.addGameObject(worktop2);

    const worktop3 = new Worktop({
      x: 0,
      y: 400,
      w: 200,
      h: 200,
    });
    worktop3.addServingItem(new Dish_Steak_Cooked());
    this.addGameObject(worktop3);

    const stove = new Stove({
      x: 0,
      y: 600,
      w: 200,
      h: 200,
    });
    this.addGameObject(stove);

    const trash = new Trash({
      x: 0,
      y: 880,
      w: 200,
      h: 200,
    });
    this.addGameObject(trash);
  }
}

export default Game;
