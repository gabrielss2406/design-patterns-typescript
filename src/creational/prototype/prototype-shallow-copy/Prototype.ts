export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) { }

    clone(): this {
        return Object.create(this);
    }

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

export class Address {
    constructor(public street: string, public number: number) { }
}

const address1 = new Address('Main St.', 123);
const person1 = new Person('John', 20);
person1.addAddress(address1);

const person2 = person1.clone(); // Shallow copy: only the reference is copied
person2.name = 'Doe';

person1.addresses[0].number = 321; // This will affect both person1 and person2, because the reference is the same

console.log(person2.addresses);