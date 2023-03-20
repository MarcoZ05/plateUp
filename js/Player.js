import GameItem from "./GameItem.js";
class Player {
    constructor(x, y, width, height, imageSrc, name) {
        this.image = new Image();
        this.holdingItem = new GameItem("steak_0", "./assets/steak_0.png", {}, ["cook", "place"]);
        this.itemChangePossible = true;
        this.direction = {
            w: false,
            a: false,
            s: false,
            d: false,
        };
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image.src = imageSrc;
        this.name = name;
    }
    drawPlayer(ctx) {
        ctx.save();
        ctx.translate(this.x, this.y);
        if (this.direction.s && this.direction.a)
            ctx.rotate((1 * Math.PI) / 4);
        else if (this.direction.s && this.direction.d)
            ctx.rotate((7 * Math.PI) / 4);
        else if (this.direction.w && this.direction.a)
            ctx.rotate((3 * Math.PI) / 4);
        else if (this.direction.w && this.direction.d)
            ctx.rotate((5 * Math.PI) / 4);
        else if (this.direction.a)
            ctx.rotate(Math.PI / 2);
        else if (this.direction.w)
            ctx.rotate(Math.PI);
        else if (this.direction.d)
            ctx.rotate((3 * Math.PI) / 2);
        ctx.drawImage(this.image, -this.width / 2, -this.height / 2, this.width, this.height);
        ctx.restore();
    }
    drawDirection(ctx) {
        const newPos = this.getNewPos();
        if (!(newPos.x === this.x && newPos.y === this.y)) {
            ctx.beginPath();
            ctx.lineWidth = 15;
            ctx.lineCap = "round";
            ctx.strokeStyle = "aqua";
            ctx.moveTo(newPos.x, newPos.y);
            ctx.lineTo(newPos.x, newPos.y);
            ctx.stroke();
        }
    }
    drawName(ctx) {
        ctx.fillStyle = "black";
        ctx.font = "30px Comic Sans MS";
        ctx.textAlign = "center";
        ctx.fillText(this.name, this.x, this.y - this.height / 2 - this.height / 10);
    }
    drawItem(ctx) {
        // TODO: better item positioning
        if (this.holdingItem !== null)
            this.holdingItem.draw(ctx, this.x + this.width / 5, this.y + this.height / 5, this.width / 2, this.height / 2);
    }
    getNewPos() {
        return {
            x: this.x +
                this.width * (this.direction.d ? 1 : 0) -
                this.width * (this.direction.a ? 1 : 0),
            y: this.y +
                this.height * (this.direction.s ? 1 : 0) -
                this.height * (this.direction.w ? 1 : 0),
        };
    }
    draw(ctx) {
        // draw the player
        this.drawPlayer(ctx);
        // draw the direction
        this.drawDirection(ctx);
        // draw the name
        this.drawName(ctx);
        // draw the item
        this.drawItem(ctx);
    }
    interact(gameObjects) {
        // get the object the player is looking at
        const watchedObject = this.getWatchedObject(gameObjects);
        //TODO: add interaction with other objects
    }
    changeItem(gameObjects) {
        // return if the player is not allowed to change the item
        if (!this.itemChangePossible)
            return;
        // get the object the player is looking at
        const watchedObject = this.getWatchedObject(gameObjects);
        // return if the player is not looking at an object
        if (watchedObject === undefined)
            return;
        // return if the object is not a game item
        const tempGameItem = watchedObject.placedItem || null;
        watchedObject.placedItem = this.holdingItem;
        this.holdingItem = tempGameItem;
        // set the item change possible to false
        this.itemChangePossible = false;
        // timeout to set the item change possible to true
        setTimeout(() => {
            this.itemChangePossible = true;
            // TODO: better item change possible timeout
        }, 250);
    }
    getWatchedObject(gameObjects) {
        // get watched position
        const watchedPosition = {
            x: this.x +
                this.width * (this.direction.d ? 1 : 0) -
                this.width * (this.direction.a ? 1 : 0),
            y: this.y +
                this.height * (this.direction.s ? 1 : 0) -
                this.height * (this.direction.w ? 1 : 0),
        };
        // get the object the player is looking at
        const watchedObject = gameObjects.find((gameObject) => {
            // check if the player is looking at the gameObject
            return (watchedPosition.x > gameObject.x &&
                watchedPosition.x < gameObject.x + gameObject.width &&
                watchedPosition.y > gameObject.y &&
                watchedPosition.y < gameObject.y + gameObject.height);
        });
        return watchedObject;
    }
    move(steps, gameObjects, canvas) {
        // check for every step if there is a collision
        for (let i = 0; i < Math.abs(steps.x); i++) {
            // check if there is a collision
            if (this.checkCollision(gameObjects, canvas))
                break;
            // if there is no collision, move one step
            this.x += Math.sign(steps.x);
            // check if there is a collision
            if (this.checkCollision(gameObjects, canvas)) {
                // if there is a collision, move one step back
                this.x -= Math.sign(steps.x);
                break;
            }
        }
        for (let i = 0; i < Math.abs(steps.y); i++) {
            // check if there is a collision
            if (this.checkCollision(gameObjects, canvas))
                break;
            // if there is no collision, move one step
            this.y += Math.sign(steps.y);
            // check if there is a collision
            if (this.checkCollision(gameObjects, canvas)) {
                // if there is a collision, move one step back
                this.y -= Math.sign(steps.y);
                break;
            }
        }
    }
    checkCollision(gameObjects, canvas) {
        return (gameObjects.some((gameObject) => {
            // check if the player is colliding or inside the gameObject
            return (this.x + this.width / 2 > gameObject.x &&
                this.x - this.width / 2 < gameObject.x + gameObject.width &&
                this.y + this.height / 2 > gameObject.y &&
                this.y - this.height / 2 < gameObject.y + gameObject.height);
        }) ||
            // check if the player is colliding or inside the canvas
            this.x + this.width / 2 > canvas.width ||
            this.x - this.width / 2 < 0 ||
            this.y + this.height / 2 > canvas.height ||
            this.y - this.height / 2 < 0);
    }
    changeDirection(key, value) {
        this.direction[key] = value;
    }
    update() { }
}
export default Player;
