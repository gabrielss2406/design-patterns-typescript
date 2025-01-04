import { ProductDecorator } from "./ProductDecorator";

// Purpose: Concrete decorator class.
// This class adds a stamp to the product.
export class ProductStampDecorator extends ProductDecorator {
    private stampPrice: number = 2.5;

    getPrice(): number {
        return super.getPrice() + this.stampPrice;
    }

    getName(): string {
        return super.getName() + ' + Estampado';
    }
}