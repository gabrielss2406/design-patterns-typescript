import { Bicycle } from "../vehicle/Bicycle";
import { Vehicle } from "../vehicle/Vehicle";
import { VehicleFactory } from "./VehicleFactory";

export class BicycleFactory extends VehicleFactory { // Concrete Creator
    getVehicle(vehicleName: string): Vehicle {
        return new Bicycle(vehicleName);
    }
}