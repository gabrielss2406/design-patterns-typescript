import { IProduct } from "./IProduct";

// Purpose: Decorator class.
export class ProductDecorator implements IProduct {
    private product: IProduct;

    constructor(product: IProduct) {
        this.product = product;
    }

    getPrice(): number {
        return this.product.getPrice();
    }

    getName(): string {
        return this.product.getName();
    }
}