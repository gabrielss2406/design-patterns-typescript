import { ProductDecorator } from "./product/ProductDecorator";
import { ProductStampDecorator } from "./product/ProductStampDecorator";
import { Tshirt } from "./product/Tshirt";

const tShirt = new Tshirt(); // Concrete product class  
const decoratedTShirt = new ProductDecorator(tShirt); // Decorator class
const stampedTShirt = new ProductStampDecorator(tShirt); // Concrete decorator class
// Why decorator is good? Because it allows us to add new features to an object without changing its structure.

console.log(tShirt.getPrice());
console.log(decoratedTShirt.getPrice());
console.log(stampedTShirt.getPrice());