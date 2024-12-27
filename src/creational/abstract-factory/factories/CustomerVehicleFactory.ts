import { Customer } from "../customer/Customer";
import { Vehicle } from "../vehicle/Vehicle";

export interface CustomerVehicleFactory { // Factory interface for creating Customer and Vehicle
    createCustomer(customerName: string): Customer;
    createVehicle(vehicleName: string, customerName: string): Vehicle;
}