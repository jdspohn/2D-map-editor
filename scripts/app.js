class Application {

    constructor(canvas, activeTile, img) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

        this.map = [];

        this.activeTile = activeTile;
        this.img = img;

        this.mouse = {
            x: undefined,
            y: undefined
        }

        this.timePassed = 0;
    }

    render(delta) {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // render map
        // this.map.render();

        this.ctx.lineWidth = 1.0;
        
        this.ctx.stroke();

        // render mouse tile
        if (this.activeTile && this.mouse.x != undefined) {
            this.ctx.save();
            this.ctx.filter = 'grayscale(100%) brightness(150%)';
            this.ctx.drawImage(this.img, (this.mouse.x - this.img.width/2), (this.mouse.y - this.img.height/2));
            this.ctx.restore();
        }

    }

}