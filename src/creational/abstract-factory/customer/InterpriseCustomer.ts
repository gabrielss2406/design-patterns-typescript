import { Customer } from "./Customer";

export class InterpriseCustomer implements Customer { // Implementing the Customer interface
    constructor(public name: string) { }
}