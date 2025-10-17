
import {Product} from "../models/Product";

export function calculateTax(price: number, category:string): number;
    const groceriesTax : number = 3;
    const defaultTax : number = 4.75;
if (product.category === "groceries") {
    return product.getPriceWithTax(groceriesTax)
}   else {
    return product.getPriceWithTax(defaultTax)
}