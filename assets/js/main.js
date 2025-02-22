class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = canvas.width;
        this.height = canvas.height;
        this.baseHeight = 720;
        this.ratio = this.height / this.baseHeight;
        this.background = new Background(this);
        this.player = new Player(this);
        this.gravity;
        this.resize(window.innerWidth, window.innerHeight);

        window.addEventListener('resize', (e) => {
            this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
        });

        // Mouse controls
        this.canvas.addEventListener('mousedown', () => {
            this.player.flap();
        });

        // Keyboard controls
        window.addEventListener('keydown', (e) => {
            if (e.key === ' ' || e.key === 'Enter') this.player.flap();
        });

        // Touch controls
        this.canvas.addEventListener('touchstart', (e) => {
            this.player.flap();
        });
    }

    resize(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx.fillStyle = 'red';
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ratio = this.height / this.baseHeight;

        this.gravity = 0.15 * this.ratio;
        this.background.resize();
        this.player.resize();
    }

    render() {
        this.background.update();
        this.background.draw();
        this.player.update();
        this.player.draw();
    }
}

window.addEventListener('load', function () {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 720;
    canvas.height = 720;
    const game = new Game(canvas, ctx);

    function animate() {
        game.ctx.clearRect(0, 0, game.width, game.height);
        game.render();
        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
});
