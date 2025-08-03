// Canvas-based collision detection application

interface Circle {
    x: number;
    y: number;
    radius: number;
    color: string;
}

class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private circle: Circle;

    constructor() {
        console.log('Game constructor');
        this.canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
        this.ctx = this.canvas.getContext('2d')!;
        this.circle = {
            x: 100,
            y: 100,
            radius: 30,
            color: '#ff6b6b'
        };
        this.init();
    }

    private init(): void {
        if (!this.canvas) {
            console.error('Canvas element not found!');
            return;
        }

        // Set canvas size to match window size
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

    private drawCircle(circle: Circle): void {
        this.ctx.beginPath();
        this.ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = circle.color;
        this.ctx.fill();
        this.ctx.strokeStyle = '#333';
        this.ctx.lineWidth = 2;
        this.ctx.stroke();
    }

    private clearCanvas(): void {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    private gameLoop(): void {
        // Clear the canvas
        this.clearCanvas();
        
        // Draw the circle
        this.drawCircle(this.circle);
        
        // Continue the game loop
        requestAnimationFrame(() => this.gameLoop());
    }
}

// Initialize the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Game();
});
