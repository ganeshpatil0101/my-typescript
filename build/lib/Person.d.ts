declare class Person {
    private name;
    constructor(name: string);
    getName(): string;
    callbackTest(callback: Function): void;
}
export = Person;
