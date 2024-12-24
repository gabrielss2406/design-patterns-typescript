import { MealBuilderProtocol } from "../interface/MealBuilderProtocol";
import { MealBox } from "./MealBox";
import { Beans, Beverage, Dessert, Meat, Rice } from "./Meals";

// -- This class is a concrete builder
// A alternative builder that implements the MealBuilderProtocol interface.
export class VeganDishBuilder implements MealBuilderProtocol {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice('Arroz', 10);
        const beans = new Beans('Feijão', 5);

        this._meal.add(rice, beans);
        return this;
    }
    makeDessert(): this {
        const dessert = new Dessert('Torta de limão', 18);

        this._meal.add(dessert);
        return this;
    }

    getMeal(): MealBox {
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice();
    }
}