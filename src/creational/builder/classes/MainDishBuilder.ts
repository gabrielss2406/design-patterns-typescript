import { MealBuilderProtocol } from "../interface/MealBuilderProtocol";
import { MealBox } from "./MealBox";
import { Beans, Beverage, Dessert, Meat, Rice } from "./Meals";

// Define a new interface that extends MealBuilderProtocol and includes makeBeverage
interface MainDishBuilderProtocol extends MealBuilderProtocol {
    makeBeverage(): this;
}

// -- This class is a concrete builder
export class MainDishBuilder implements MainDishBuilderProtocol {
    private _meal: MealBox = new MealBox();

    reset(): this {
        this._meal = new MealBox();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice('Arroz', 10);
        const beans = new Beans('Feijão', 5);
        const meat = new Meat('Carne', 15);

        this._meal.add(rice, beans, meat);
        return this;
    }
    makeBeverage(): this {
        const beverage = new Beverage('Cerveja', 12);

        this._meal.add(beverage);
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