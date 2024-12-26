import { MainDishBuilder } from "./classes/MainDishBuilder";
import { VeganDishBuilder } from "./classes/VeganDishBuilder";
import { Director } from "./classes/Director";

// -- Creating a main dish using the Builder
// Director is responsible for constructing the object using the builder.
const mainDishBuilder = new MainDishBuilder(); // Builder
const director = new Director(mainDishBuilder); // Director

director.constructSimpleMeal(); // Constructing a simple meal
console.log(mainDishBuilder.getMeal().getPrice());

director.constructFullMeal(); // Constructing a full meal
console.log(mainDishBuilder.getMeal().getPrice());

// -- Create a vegan dish using the Builder
const veganDishBuilder = new VeganDishBuilder();
const veganDirector = new Director(veganDishBuilder);

veganDirector.constructSimpleMeal();
console.log(veganDishBuilder.getMeal().getPrice());

veganDirector.constructFullMeal();
console.log(veganDishBuilder.getMeal().getPrice());