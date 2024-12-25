export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) { }

    clone(): Person {
        const newObject = new Person(this.name, this.age); // Deep copy: all properties are copied
        newObject.addresses = this.addresses.map((item) => item.clone()); // Deep copy: all properties are copied
        // I can make a shallow copy using Object.assign({}, this) but it will not work well for nested objects
        return newObject;
    }

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

export class Address {
    constructor(public street: string, public number: number) { }

    clone(): Address {
        return new Address(this.street, this.number);
    }
}

const address1 = new Address('Main St.', 123);
const person1 = new Person('John', 20);
person1.addAddress(address1);

const person2 = person1.clone(); // Deep copy: all properties are copied
person2.name = 'Doe';

person1.addresses[0].number = 321; // This will affect only person1, because the address was deep copied

console.log(person1.addresses);
console.log(person2.addresses);