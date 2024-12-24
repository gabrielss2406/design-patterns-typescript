import { MealBuilderProtocol } from "../interface/MealBuilderProtocol";

// Define a new interface that extends MealBuilderProtocol and includes makeBeverage
interface MainDishBuilderProtocol extends MealBuilderProtocol {
    makeBeverage(): this;
}

// -- This class is a director for the builde
// The director is responsible for constructing the object using the builder.
export class Director {
    constructor(private builder: MealBuilderProtocol | MainDishBuilderProtocol) { }

    constructSimpleMeal(): void {
        this.builder.reset().makeMeal();
    }

    constructFullMeal(): void {
        this.builder.reset().makeMeal().makeDessert();
        if ('makeBeverage' in this.builder) {
            (this.builder as MainDishBuilderProtocol).makeBeverage();
        }
    }
}
