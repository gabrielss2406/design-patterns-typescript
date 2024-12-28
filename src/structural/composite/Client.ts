import { ProductComposite } from "./Composite";
import { ProductLeaf } from "./Leaf";

const shirt = new ProductLeaf("Camiseta", 20);
const pants = new ProductLeaf("Pantalones", 50);
const shoes = new ProductLeaf("Zapatos", 100);
const tablet = new ProductLeaf("Tablet", 200);
const cellphone = new ProductLeaf("Celular", 300);

const products = new ProductComposite(); // Composite object
const electronics = new ProductComposite(); // Composite object

products.add(shirt, pants, shoes);
electronics.add(tablet, cellphone);
products.add(electronics); // Add a composite object to another composite object

console.log(products)
console.log(products.getPrice()); // Output: 670