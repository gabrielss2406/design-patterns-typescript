import { Customer } from "./Customer";

export class IndividualCustomer implements Customer { // Implementing the Customer interface
    constructor(public name: string) { }
}