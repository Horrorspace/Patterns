abstract class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    public get radius(): number {
        return this._radius
    }
}

abstract class Square {
    private _width: number;

    constructor(width: number) {
        this._width = width;
    }

    public get width(): number {
        return this._width;
    }
}

class RoundPeg extends Circle {
    constructor(radius: number) {
        super(radius);
    }
}

class SquarePeg extends Square {
    constructor(width: number) {
        super(width);
    }
}

class RoundHole extends Circle {
    constructor(radius: number) {
        super(radius);
    }

    public fits(peg: RoundPeg): boolean {
        return this.radius >= peg.radius;
    }
}

class SquarePegAdapter extends RoundPeg {
    constructor(pegWidth: SquarePeg) {
        const {width} = pegWidth;
        const radius = width * Math.sqrt(2) / 2;
        super(radius);
    }
}

export default function clientCode() {
    const hole = new RoundHole(5);
    const roundPeg = new RoundPeg(5);
    console.log(hole.fits(roundPeg));
    const smallSquarePeg = new SquarePeg(5);
    const bigSquarePeg = new SquarePeg(10);
    const squaresForCheck = [smallSquarePeg, bigSquarePeg];
    const adapterPipe = (squarePeg: SquarePeg) => {
        return new SquarePegAdapter(squarePeg);
    }
    const checkPipe = (peg: SquarePegAdapter) => {
        console.log(hole.fits(peg));
    }
    squaresForCheck
        .map(adapterPipe)
        .forEach(checkPipe);
}