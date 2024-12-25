import _ from 'lodash';

export interface Prototype {
    clone(): Prototype;
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) { }

    clone(): this {
        //return _.clone(this) // Shallow copy: only the reference is copied
        return _.cloneDeep(this); // Deep copy: all properties are copied, using lodash
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

const person2 = person1.clone(); // Deep copy: all properties are copied
person2.name = 'Doe';

person1.addresses[0].number = 321; // This will not affect person2, because the reference is different

console.log(person1.addresses);
console.log(person2.addresses);
