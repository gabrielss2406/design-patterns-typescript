import { MainDishBuilder } from "../../creational/builder/classes/MainDishBuilder";
import { VeganDishBuilder } from "../../creational/builder/classes/VeganDishBuilder";

// This file is suposed to exists in the builder paste (src/creational/builder/)
export class BuilderFacade {
    private mainDishBuilder = new MainDishBuilder();
    private veganDishBuilder = new VeganDishBuilder();

    makeMeal1(): void {
        this.mainDishBuilder.makeMeal();
        console.log(this.mainDishBuilder.getMeal());
        console.log(this.mainDishBuilder.getPrice());
    }

    makeMeal2(): void {
        this.mainDishBuilder.reset();
        const meal2 = this.mainDishBuilder.makeBeverage().getMeal();
        console.log(meal2);
    }

    makeMeal3(): void {
        const veganMeal = this.veganDishBuilder.makeMeal().getMeal();
        console.log(veganMeal);
        console.log(veganMeal.getPrice());
    }
}