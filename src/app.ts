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
        
        // Handle window resize
        window.addEventListener('resize', () => this.resizeCanvas());
        
        // Start the game loop
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
        // Clear the canvas
        this.clearCanvas();
        
        // Draw the sprites
        drawSprites(this.ctx);
        
        // Continue the game loop
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Game();
});
