import { Customer } from "../customer/Customer";
import { InterpriseCustomer } from "../customer/InterpriseCustomer";
import { InterpriseVehicle } from "../vehicle/InterpriseVehicle";
import { Vehicle } from "../vehicle/Vehicle";
import { CustomerVehicleFactory } from "./CustomerVehicleFactory";

export class InterpriseCustomerVehicleFactory implements CustomerVehicleFactory { // Concrete factory implementing the CustomerVehicleFactory
    createCustomer(customerName: string): Customer {
        return new InterpriseCustomer(customerName);
    }
    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new InterpriseVehicle(vehicleName, customer);
    }
}