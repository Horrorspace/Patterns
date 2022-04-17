class State {
    private _value: number;
    private static instance: State

    constructor() {
        this._value = 0;
    }

    public static getInstance(): State {
        if (!State.instance) {
            State.instance = new State();
        }
        return this.instance;
    }
    public get value() {
        return this._value;
    }
    public setValue(value: number) {
        this._value = value;
    }
}


export default function clientCode() {
    const s1 = State.getInstance();
    const s2 = State.getInstance();
    console.log('s1', s1);
    console.log('s2', s2);
    s1.setValue(1);
    console.log('s1', s1);
    console.log('s2', s2);
    s2.setValue(2);
    console.log('s1', s1);
    console.log('s2', s2);
}