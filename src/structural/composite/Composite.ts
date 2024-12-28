import { ProductComponent } from "./Component";

// Purpose: Represent the composite objects in the composition. A composite has children.
export class ProductComposite extends ProductComponent {
    private products: ProductComponent[] = [];

    getPrice(): number { // Delegate the operation to the childrens
        return this.products.reduce((sum, product) => sum + product.getPrice(), 0);
    }

    add(...products: ProductComponent[]): void {
        this.products.push(...products);
    }

    remove(product: ProductComponent): void {
        const index = this.products.indexOf(product);
        if (index !== -1) this.products.splice(index, 1);
    }
}