import { Vehicle } from "./Vehicle";

export class Bicycle implements Vehicle {
    constructor(private name: string) {
        this.name = name;
    }

    pickUp(customerName: string): void {
        console.log(`${this.name} is picking up ${customerName}`);
    }

    stop(): void {
        console.log(`${this.name} is stopping`);
    }
}