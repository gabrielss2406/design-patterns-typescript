import { ProductComponent } from "./Component";

// Purpose: Represent the leaf objects in the composition. A leaf has no children.
export class ProductLeaf extends ProductComponent {
    constructor(public name: string, private price: number) {
        super();
    }

    getPrice(): number {
        return this.price;
    }
}