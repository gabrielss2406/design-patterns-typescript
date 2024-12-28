// Purpose: Define the interface for the objects that can be part of the composite.
export abstract class ProductComponent { // Component
    abstract getPrice(): number; // Operation

    add(product: ProductComponent): void { } // Add
    remove(product: ProductComponent): void { } // Remove
    // Here I can add getChilds of UML diagram, but I will not use it in this example
}