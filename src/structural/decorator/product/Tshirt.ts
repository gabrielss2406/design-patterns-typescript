import { IProduct } from "./IProduct";

// Purpose: Concrete product class.     
export class Tshirt implements IProduct {
    private price: number = 10.9;
    private name: string = 'Camiseta';

    getPrice(): number {
        return this.price;
    }
    getName(): string {
        return this.name;
    }
}