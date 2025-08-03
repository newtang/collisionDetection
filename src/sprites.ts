// Sprite management and drawing utilities

export interface Circle {
    type: 'circle';
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
}

class SpriteManager {
    private sprites: Circle[] = [];

    constructor() {}

    public addSprite(sprite: Circle): void {
        this.sprites.push(sprite);
    }

    public removeSprite(index: number): void {
        if (index >= 0 && index < this.sprites.length) {
            this.sprites.splice(index, 1);
        }
    }

    public clearSprites(): void {
        this.sprites = [];
    }

    public draw(ctx: CanvasRenderingContext2D): void {
        this.sprites.forEach(sprite => {
            if (sprite.type === 'circle') {
                this.drawCircle(ctx, sprite);
            }
        });
    }

    public moveSprites(ctx: CanvasRenderingContext2D): void {
        this.sprites.forEach(sprite => {
            sprite.x += sprite.vx;
            sprite.y += sprite.vy;


            if ((sprite.x > ctx.canvas.width - sprite.radius) && sprite.vx > 0) {
                sprite.vx = -sprite.vx;
            }
            if ((sprite.x < sprite.radius) && sprite.vx < 0) {
                sprite.vx = -sprite.vx;
            }
            if ((sprite.y > ctx.canvas.height - sprite.radius) && sprite.vy > 0) {
                sprite.vy = -sprite.vy;
            }
            if ((sprite.y < sprite.radius) && sprite.vy < 0) {
                sprite.vy = -sprite.vy;
            }
        });

    }

    private drawCircle(ctx: CanvasRenderingContext2D, circle: Circle): Circle {
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = circle.color;
        ctx.fill();
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 2;
        ctx.stroke();
        return circle;
    }
}

// Create a singleton instance
export const spriteManager = new SpriteManager();
let initialized = false;
function initSprites(ctx: CanvasRenderingContext2D): void {
    if (initialized) {
        return;
    }
    initialized = true;
    spriteManager.addSprite({
        type: 'circle',
        x: 100,
        y: 100,
        vx: 1,
        vy: 1,
        radius: 30,
        color: '#ff6b6b'
    });
}

export function drawSprites(ctx: CanvasRenderingContext2D): void {
    if (!initialized) {
        initSprites(ctx);
    }
    spriteManager.moveSprites(ctx);
    spriteManager.draw(ctx);
}   