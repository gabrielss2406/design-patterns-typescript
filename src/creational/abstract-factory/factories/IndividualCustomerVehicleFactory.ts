import { Customer } from "../customer/Customer";
import { IndividualCustomer } from "../customer/IndividualCustomer";
import { IndividualVehicle } from "../vehicle/IndividualVehicle";
import { Vehicle } from "../vehicle/Vehicle";
import { CustomerVehicleFactory } from "./CustomerVehicleFactory";

export class IndividualCustomerVehicleFactory implements CustomerVehicleFactory { // Concrete factory implementing the CustomerVehicleFactory
    createCustomer(customerName: string): Customer {
        return new IndividualCustomer(customerName);
    }
    createVehicle(vehicleName: string, customerName: string): Vehicle {
        const customer = this.createCustomer(customerName);
        return new IndividualVehicle(vehicleName, customer);
    }
}