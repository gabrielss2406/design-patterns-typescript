import { Customer } from "../customer/Customer";
import { Vehicle } from "./Vehicle";

export class InterpriseVehicle implements Vehicle { // Implementing the Vehicle interface
    constructor(public name: string, private readonly customer: Customer) { }

    pickUp(): void {
        console.log(`${this.name} is picking up the ${this.customer.name} (Interprise)`);
    }
}