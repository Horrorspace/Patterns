enum colors {
    red = 'red',
    blue = 'blue',
    yellow = 'yellow',
    green = 'green'
}

type color = `${colors}`;

class Color {
    private _color: color;
    public readonly colors: color[] = Object.values(colors);

    constructor(color: color) {
        this._color = color;
    }

    public get color(): color {
        return this._color;
    }
    public setColor(color: color): void {
        this._color = color;
    }
}

abstract class Shape {
    private _color: Color;

    constructor(color: Color) {
        this._color = color;
    }

    public changeColor(): void {
        const colors = this._color.colors;
        const currentColor = this._color.color;
        const currentIndex = colors.indexOf(currentColor);
        let nextColorIndex: number;
        if (currentIndex === colors.length) {
            nextColorIndex = 0;
        }
        else nextColorIndex = currentIndex + 1;
        const newColor = colors[nextColorIndex];
        this._color.setColor(newColor);
    }
    public get color(): color {
        return this._color.color;
    }
    public abstract getDescription(): string;
}

class Circle extends Shape {
    private _radius: number;

    constructor(radius: number, color: Color) {
        super(color);
        this._radius = radius;
    }

    public get radius(): number {
        return this._radius;
    }
    public getDescription(): string {
        return `This is ${this.color} circle`;
    }
}

class Square extends Shape {
    private _width: number;

    constructor(width: number, color: Color) {
        super(color);
        this._width = width;
    }

    public get width(): number {
        return this._width;
    }
    public getDescription(): string {
        return `This is ${this.color} square`;
    }
}


export default function clientCode() {
    const circle = new Circle(5, new Color('red'));
    console.log(circle.getDescription());
    circle.changeColor();
    console.log(circle.getDescription());
}