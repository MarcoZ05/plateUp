class GameItem {
    constructor(name, imageSrc) {
        this.image = new Image();
        this.name = name;
        this.image.src = imageSrc;
    }
    draw(ctx, x, y, width, height) {
        ctx.drawImage(this.image, x, y, width, height);
    }
}
export default GameItem;
