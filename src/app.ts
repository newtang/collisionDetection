// Canvas-based collision detection application

import { drawSprites } from './sprites.js';

class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;

    constructor() {
        this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.init();
    }

    private init(): void {
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
        this.gameLoop();
    }

    private resizeCanvas(): void {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    private clearCanvas(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private gameLoop(): void {
        this.clearCanvas();
        drawSprites(this.ctx);
        requestAnimationFrame(() => this.gameLoop());
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Game();
});
