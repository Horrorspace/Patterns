enum engineTypes {
    sport = 'sport',
    regular = 'regular'
}

type engineType = `${engineTypes}`;

abstract class Engine {
    public abstract engineType: engineType;
}

class SportEngine extends Engine {
    public engineType = engineTypes.sport;
}

class RegularEngine extends Engine {
    public engineType = engineTypes.regular;
}

interface Car {
    seats: number;
    engine: Engine | null;
    tripComputer: boolean;
    GPS: boolean;
}

abstract class Builder {
    protected seats: number;
    protected engine: Engine | null;
    protected tripComputer: boolean;
    protected GPS: boolean;

    constructor() {
        this.seats = 0;
        this.engine = null;
        this.tripComputer = false;
        this.GPS = false;
    }

    public abstract setSeats(num: number): void;
    public abstract setEngine(engine: Engine): void;
    public abstract setTripComputer(enable: boolean): void;
    public abstract setGPS(enable: boolean): void;
    public getCar(): Car {
        return {
            seats: this.seats,
            engine: this.engine,
            tripComputer: this.tripComputer,
            GPS: this.GPS
        }
    }
}

class CarAutoBuilder extends Builder {
    constructor() {
        super();
    }

    public setSeats(num: number): void {
        this.seats = num;
        console.log(`${num} seats is installed`);
    }
    public setEngine(engine: Engine): void {
        this.engine = engine;
        console.log(`${engine.engineType} engine is installed`);
    }
    public setTripComputer(enable: boolean): void {
        this.tripComputer = enable;
        if (enable) console.log('trip computer is installed');
    }
    public setGPS(enable: boolean): void {
        this.GPS = enable;
        if (enable) console.log('GPS is installed');
    }
}

class CarManualBuilder extends Builder {
    constructor() {
        super();
    }

    public setSeats(num: number): void {
        this.seats = num;
        console.log(`${num} seats is installed manual`);
    }
    public setEngine(engine: Engine): void {
        this.engine = engine;
        console.log(`${engine.engineType} engine is installed manual`);
    }
    public setTripComputer(enable: boolean): void {
        this.tripComputer = enable;
        if (enable) console.log('trip computer is installed manual');
    }
    public setGPS(enable: boolean): void {
        this.GPS = enable;
        if (enable) console.log('GPS is installed manual');
    }
}

class Director {
    public constructSportCar(builder: Builder): Car {
        builder.setSeats(2);
        builder.setEngine(new SportEngine());
        builder.setTripComputer(true);
        builder.setGPS(true);
        return builder.getCar();
    }

    public constructRegularCar(builder: Builder): Car {
        builder.setSeats(4);
        builder.setEngine(new RegularEngine());
        builder.setTripComputer(false);
        builder.setGPS(false);
        return builder.getCar();
    }
}


export default function clientCode() {
    const carAutoBuilder = new CarAutoBuilder();
    const carManualBuilder = new CarManualBuilder();
    const director = new Director();
    const sportCar = director.constructSportCar(carManualBuilder);
    const regularCar = director.constructRegularCar(carAutoBuilder);
}