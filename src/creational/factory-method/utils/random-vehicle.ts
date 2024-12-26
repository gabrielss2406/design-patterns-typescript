import { BicycleFactory } from "../factories/BicycleFactory";
import { CarFactory } from "../factories/CarFactory";
import { Vehicle } from "../vehicle/Vehicle";

export function RandomVehicle(): Vehicle {
    const carFactory = new CarFactory(); // Concrete Creator
    const bicycleFactory = new BicycleFactory(); // Concrete Creator

    const car1 = carFactory.getVehicle('Fusca'); // Concrete Product
    const car2 = carFactory.getVehicle('Celta'); // Concrete Product
    const bicycle = bicycleFactory.getVehicle('Bicycle'); // Concrete Product

    const vehicles = [car1, car2, bicycle];

    return vehicles[Math.floor(Math.random() * vehicles.length)];
}