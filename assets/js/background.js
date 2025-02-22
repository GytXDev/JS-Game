class Background {
    constructor(game) {
        this.game = game;
        this.image = document.getElementById('background');
        this.width = 2400;
        this.height = this.game.baseHeight;
        this.x;
    }
    update() { }
    draw() {
        this.game.ctx.drawImage(this.image, this.x, 0);
    }
    resize() {
        this.x = 0;
    }
}