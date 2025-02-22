class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = canvas.width;
        this.height = canvas.height;
        this.baseHeight = 720;
        this.ratio = this.height / this.baseHeight;
        this.player = new Player(this);
        this.gravity = 1;

        this.rezise(window.innerWidth, window.innerHeight);

        window.addEventListener('resize', e => { 
            this.rezise(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
        });
    }
    rezise(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.fillStyle = 'red';
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ratio = this.height / this.baseHeight;
        this.player.rezise();
        console.log(this.height, this.baseHeight, this.ratio);
    }

    render() {
        // this.ctx.fillStyle = 'red';
        this.player.update();
        this.player.draw();
    }
}

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;
    ctx.fillStyle = 'gold';

    const game = new Game(canvas, ctx);

    function animate() {
        game.ctx.clearRect(0, 0, game.width, game.height);
        game.render();
        requestAnimationFrame(animate);
    }

    this.requestAnimationFrame(animate);

   
});