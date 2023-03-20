class GameItem {
    constructor(name, imageSrc, combinations = {}, interactions = ["place"]) {
        this.image = new Image();
        this.cookingTime = 0;
        this.name = name;
        this.image.src = imageSrc;
        this.combinations = combinations;
        this.interactions = interactions;
    }
    cook() {
        if (this.interactions.includes("cook")) {
            this.image.src = this.image.src.replace(this.image.src[this.image.src.length - 5], (parseInt(this.image.src[this.image.src.length - 5]) + 1).toString());
        }
    }
    draw(ctx, x, y, width, height, showCookingTime = false) {
        ctx.drawImage(this.image, x, y, width, height);
        // draw cooking time
        if (this.interactions.includes("cook") && showCookingTime) {
            ctx.fillStyle = "black";
            ctx.fillRect(x, y + height - 10, width, 10);
            ctx.fillStyle = "red";
            ctx.fillRect(x, y + height - 10, (width / 100) * this.cookingTime, 10);
        }
    }
}
export default GameItem;
