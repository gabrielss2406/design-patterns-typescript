import { MealCompositeProtocol } from "../interface/MealCompositeProtocol";

// -- This class is a leaf class
// The reason for this exists is for the composite pattern.
export abstract class AbstractMeal implements MealCompositeProtocol {
    constructor(private name: string, private price: number) { }

    getPrice() {
        return this.price;
    }
}