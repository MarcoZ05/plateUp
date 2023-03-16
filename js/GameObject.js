class GameObject {
    constructor(x, y, width, height, imageSrc) {
        this.image = new Image();
        this.placedItem = null;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image.src = imageSrc;
        this.image.style.imageRendering = "pixelated";
    }
    draw(ctx) {
        // check if image is loaded
        if (this.image.complete)
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
    update() { }
}
export default GameObject;
