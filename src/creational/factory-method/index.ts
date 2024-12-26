import { Car } from "./vehicle/Car";
import { RandomVehicle } from "./utils/random-vehicle";
import { CarFactory } from "./factories/CarFactory";

// This is a normal client code that uses the Car class.
//  const fusca = new Car("Fusca");
//  fusca.pickUp("João");
//  fusca.stop();
// Because of this if I change the Car class to a Bicycle class, I would have to change the client code.
// The Factory Method pattern solves this problem by creating a method that creates the objects.
// If I create this object many times, I can create a factory method that creates the objects for me.

// Now I will use the factory method to create the Car object.
const carFactory = new CarFactory();

// I use random parameters to show that the factory method is creating the objects.
const customerNames = ["João", "Ana", "Maria", "José"];
for (let i = 0; i < 10; i++) {
    const vehicle = RandomVehicle();
    const name = customerNames[Math.floor(Math.random() * customerNames.length)];
    vehicle.pickUp(name);
    vehicle.stop();

    // I can also use the factory method to create the objects.
    const newCar = carFactory.pickUp(name, `NOVO CARRO - ${Math.random() * 100}`);
    newCar.stop();

    console.log('------------------');
}