type furnitureType = 'Sofa' | 'Chair' | 'Table';
type furnitureStyle = 'Modern' | 'Art deco' | 'Loft';
type furnitureColor = 'black' | 'white' | 'silver';

interface FurnitureInfo {
    furnitureType: furnitureType;
    furnitureStyle: furnitureStyle;
    furnitureColor: furnitureColor;
}
interface IAbstractFurniture extends FurnitureInfo {
    getFurnitureInfo(): FurnitureInfo;
    getFurnitureDescription(): string;
}
interface AbstractSofa extends IAbstractFurniture {}
interface AbstractChair extends IAbstractFurniture {}
interface AbstractTable extends IAbstractFurniture {}

interface IAbstractFactory {
    furnitureStyle: furnitureStyle
    createSofa(): AbstractSofa;
    createChair(): AbstractChair;
    createTable(): AbstractTable;
}

abstract class AbstractFurniture implements IAbstractFurniture {
    protected abstract _furnitureType: furnitureType;
    protected _furnitureStyle: furnitureStyle;
    protected _furnitureColor: furnitureColor;

    constructor(
        furnitureStyle: furnitureStyle,
        furnitureColor: furnitureColor
    ) {
        this._furnitureStyle = furnitureStyle;
        this._furnitureColor = furnitureColor;
    }

    public get furnitureType(): furnitureType {
        return this._furnitureType;
    }
    public get furnitureStyle(): furnitureStyle {
        return this._furnitureStyle;
    }
    public get furnitureColor(): furnitureColor {
        return this._furnitureColor;
    }

    public getFurnitureInfo(): FurnitureInfo {
        return {
            furnitureType: this._furnitureType,
            furnitureStyle: this._furnitureStyle,
            furnitureColor: this._furnitureColor
        }
    }
    public abstract getFurnitureDescription(): string;
}
class Sofa extends AbstractFurniture implements AbstractSofa {
    protected _furnitureType: furnitureType = 'Sofa';
    
    constructor(
        furnitureStyle: furnitureStyle,
        furnitureColor: furnitureColor
    ) {
        super(furnitureStyle, furnitureColor);
    }

    public getFurnitureDescription(): string {
        return `This is the sofa in ${this._furnitureStyle} style`;
    }
}
class Chair extends AbstractFurniture implements AbstractChair {
    protected _furnitureType: furnitureType = 'Chair';
    
    constructor(
        furnitureStyle: furnitureStyle,
        furnitureColor: furnitureColor
    ) {
        super(furnitureStyle, furnitureColor);
    }

    public getFurnitureDescription(): string {
        return `This is the chair in ${this._furnitureStyle} style`;
    }
}
class Table extends AbstractFurniture implements AbstractTable {
    protected _furnitureType: furnitureType = 'Table';
    
    constructor(
        furnitureStyle: furnitureStyle,
        furnitureColor: furnitureColor
    ) {
        super(furnitureStyle, furnitureColor);
    }

    public getFurnitureDescription(): string {
        return `This is the ${this._furnitureColor} table in ${this._furnitureStyle} style`;
    }
}

abstract class AbstractFactory implements IAbstractFactory {
    protected abstract readonly _furnitureStyle: furnitureStyle;
    protected _furnitureColor: furnitureColor;

    constructor(furnitureColor: furnitureColor) {
        this._furnitureColor = furnitureColor;
    }

    public get furnitureStyle(): furnitureStyle {
        return this._furnitureStyle;
    }

    public createSofa(): AbstractSofa {
        return new Sofa(this._furnitureStyle, this._furnitureColor);
    }
    public createChair(): AbstractChair {
        return new Chair(this._furnitureStyle, this._furnitureColor);
    }
    public createTable(): AbstractTable {
        return new Table(this._furnitureStyle, this._furnitureColor);
    }
}
class ModernFactory extends AbstractFactory implements IAbstractFactory {
    protected readonly _furnitureStyle: furnitureStyle = 'Modern';
}
class ArtDecoFactory extends AbstractFactory implements IAbstractFactory {
    protected readonly _furnitureStyle: furnitureStyle = 'Art deco';
}
class LoftFactory extends AbstractFactory implements IAbstractFactory {
    protected readonly _furnitureStyle: furnitureStyle = 'Loft';
}

export default function clientCode() {
    const blackModernFactory = new ModernFactory('black');
    const whiteModernFactory = new ModernFactory('white');
    const whiteArtDecoFactory = new ArtDecoFactory('white');
    const silverLoftFactory = new LoftFactory('silver');
    const item1 = blackModernFactory.createChair();
    const item2 = whiteModernFactory.createSofa();
    const item3 = whiteArtDecoFactory.createTable();
    const item4 = silverLoftFactory.createSofa();
    const items = [item1, item2, item3, item4];
    items.forEach(item => {
        console.log(item.getFurnitureDescription());
    })
}