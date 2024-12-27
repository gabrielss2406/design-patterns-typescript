import { IndividualCustomerVehicleFactory } from "./factories/IndividualCustomerVehicleFactory";
import { InterpriseCustomerVehicleFactory } from "./factories/InterpriseCustomerVehicleFactory";

const interpriseFactory = new InterpriseCustomerVehicleFactory(); // Concrete factory implementing the CustomerVehicleFactory
const individualFactory = new IndividualCustomerVehicleFactory(); // Concrete factory implementing the CustomerVehicleFactory

const car1 = interpriseFactory.createVehicle("Ferrari", "John Doe"); // Creating a vehicle for an InterpriseCustomer
const car2 = individualFactory.createVehicle("Ford", "Marcio Silva"); // Creating a vehicle for an IndividualCustomer

car1.pickUp(); // Output: John Doe is driving the Ferrari
car2.pickUp(); // Output: Marcio Silva is driving the Ford
