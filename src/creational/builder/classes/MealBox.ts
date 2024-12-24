import { MealCompositeProtocol } from "../interface/MealCompositeProtocol";

// This is a composite class that implements the MealCompositeProtocol interface.
// 
// What is composite? 
// Composite is a structural design pattern that lets you compose objects into tree structures to represent part-whole hierarchies.
//
export class MealBox implements MealCompositeProtocol {
    private readonly _children: MealCompositeProtocol[] = [];

    getPrice(): number {
        return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
    }

    add(...meal: MealCompositeProtocol[]): void {
        meal.forEach((item) => this._children.push(item));
    }

}