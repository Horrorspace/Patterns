enum colors {
    red = 'red',
    blue = 'blue'
}

type color = `${colors}`;

interface IShape {
    x: number;
    y: number;
    color: color;
}

interface IRectangle extends IShape {
    width: number;
    height: number;
}

interface ICircle extends IShape {
    radius: number;
}

type shape = IShape | IRectangle | ICircle;

abstract class Shape {
    protected x: number;
    protected y: number;
    protected color: color;

    constructor(source: IShape) {
        this.x = source.x;
        this.y = source.y;
        this.color = source.color;
    }

    public abstract getFigure(): shape;
    public abstract clone(): Shape;
}

class Rectangle extends Shape {
    protected width: number;
    protected height: number;

    constructor(source: IRectangle) {
        super(source);
        this.width = source.width;
        this.height = source.height
    }

    public getFigure(): IRectangle {
        return {
            x: this.x,
            y: this.y,
            color: this.color,
            width: this.width,
            height: this.height
        }
    }
    public clone(): Shape {
        const rectangle = this.getFigure();
        return new Rectangle(rectangle);
    }
}

class Circle extends Shape {
    protected radius: number;

    constructor(source: ICircle) {
        super(source);
        this.radius = source.radius;
    }
    public getFigure(): ICircle {
        return {
            x: this.x,
            y: this.y,
            color: this.color,
            radius: this.radius
        }
    }
    public clone(): Shape {
        const circle = this.getFigure();
        return new Circle(circle);
    }
}


export default function clientCode() {
    const rectangle = new Rectangle({
        x: 0,
        y: 0,
        color: colors.red,
        width: 100,
        height: 200
    });
    const circle = new Circle({
        x: 0,
        y: 0,
        color: colors.blue,
        radius: 300
    });
    const rectangles: Rectangle[] = new Array(3)
        .fill(rectangle.clone());
    const circles: Circle[] = new Array(4)
        .fill(circle.clone());
    const shapes = [...rectangles, ...circles];
    shapes.forEach(rectangle => console.log(rectangle.getFigure()));
}