class Player {
    constructor(x, y, width, height, color, name) {
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
        this.color = color;
        this.name = name;
    }
    draw(ctx) {
        // draw the player
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
        // draw the direction
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.x +
            this.width * (this.direction.d ? 1 : 0) -
            this.width * (this.direction.a ? 1 : 0), this.y +
            this.height * (this.direction.s ? 1 : 0) -
            this.height * (this.direction.w ? 1 : 0));
        ctx.stroke();
        // draw the name
        ctx.fillStyle = "black";
        ctx.font = "30px Comic Sans MS";
        ctx.textAlign = "center";
        ctx.fillText(this.name, this.x, this.y - this.height / 2 - this.height / 10);
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
