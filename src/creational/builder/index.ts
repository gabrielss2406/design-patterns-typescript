import { MainDishBuilder } from "./classes/MainDishBuilder";
import { VeganDishBuilder } from "./classes/VeganDishBuilder";
import { Director } from "./classes/Director";

// -- Creating a main dish using the Builder
// Director is responsible for constructing the object using the builder.
const mainDishBuilder = new MainDishBuilder();
const director = new Director(mainDishBuilder);

director.constructSimpleMeal();
console.log(mainDishBuilder.getMeal().getPrice());

director.constructFullMeal();
console.log(mainDishBuilder.getMeal().getPrice());

// -- Create a vegan dish using the Builder
const veganDishBuilder = new VeganDishBuilder();
const veganDirector = new Director(veganDishBuilder);

veganDirector.constructSimpleMeal();
console.log(veganDishBuilder.getMeal().getPrice());

veganDirector.constructFullMeal();
console.log(veganDishBuilder.getMeal().getPrice());