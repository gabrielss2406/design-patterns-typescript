import { Vehicle } from "../vehicle/Vehicle";

export abstract class VehicleFactory {
    abstract getVehicle(vehicleName: string): Vehicle; // Factory Method

    pickUp(customerName: string, vehicleName: string): Vehicle { // This is a example of a implementation in the Creator
        const vehicle = this.getVehicle(vehicleName);
        vehicle.pickUp(customerName);
        return vehicle;
    }
}