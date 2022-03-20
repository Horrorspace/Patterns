export type furnitureType = 'Sofa' | 'Chair' | 'Table';
export type furnitureStyle = 'Modern' | 'Art deco' | 'Loft';
export type furnitureColor = 'black' | 'White' | 'Silver';

export interface FurnitureInfo {
    furnitureType: furnitureType;
    furnitureStyle: furnitureStyle;
    furnitureColor: furnitureColor;
}
export interface IAbstractFurniture extends FurnitureInfo {
    getFurnitureInfo(): FurnitureInfo;
}
export interface AbstractSofa extends IAbstractFurniture {}
export interface AbstractChair extends IAbstractFurniture {}
export interface AbstractTable extends IAbstractFurniture {}

export interface IAbstractFactory {
    furnitureStyle: furnitureStyle
    createSofa(): AbstractSofa;
    createChair(): AbstractChair;
    createTable(): AbstractTable;
}

export abstract class AbstractFurniture implements IAbstractFurniture {
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
export class Sofa extends AbstractFurniture implements AbstractSofa {
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
export class Chair extends AbstractFurniture implements AbstractChair {
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
export class Table extends AbstractFurniture implements AbstractTable {
    protected _furnitureType: furnitureType = 'Table';
    
    constructor(
        furnitureStyle: furnitureStyle,
        furnitureColor: furnitureColor
    ) {
        super(furnitureStyle, furnitureColor);
    }

    public getFurnitureDescription(): string {
        return `This is the table in ${this._furnitureStyle} style`;
    }
}

export abstract class AbstractFactory implements IAbstractFactory {
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
export class ModernFactory extends AbstractFactory implements IAbstractFactory {
    protected readonly _furnitureStyle: furnitureStyle = 'Modern';
}
export class ArtDecoFactory extends AbstractFactory implements IAbstractFactory {
    protected readonly _furnitureStyle: furnitureStyle = 'Art deco';
}
export class LoftFactory extends AbstractFactory implements IAbstractFactory {
    protected readonly _furnitureStyle: furnitureStyle = 'Loft';
}