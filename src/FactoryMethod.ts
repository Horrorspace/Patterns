abstract class Logistics {
    public abstract createTransport(): Transport;
}

abstract class Transport {
    public abstract deliver(): void;
}

class Truck extends Transport {
    public deliver(): void {
        console.log('Truck deliver');
    }
}

class Ship extends Transport {
    public deliver(): void {
        console.log('Ship deliver');
    }
}

class RoadLogistics extends Logistics {
    public createTransport(): Transport {
        return new Truck();
    }
}
class SealLogistics extends Logistics {
    public createTransport(): Transport {
        return new Ship();
    }
}

enum logisticsTypes {
    road = 'road',
    seal = 'seal'
}

type logisticsType = `${logisticsTypes}`;

export default function clientCode(logisticsType: logisticsType) {
    let logistics: Logistics;
    switch (logisticsType) {
        case logisticsTypes.road:
            logistics = new RoadLogistics();
            break;
        case logisticsTypes.seal:
            logistics = new SealLogistics();
            break;
        default:
            throw new Error('wrong logistics type');
    }
    const transport = logistics.createTransport();
    transport.deliver();
}