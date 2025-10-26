
export function calculateTax(price: number, category: string): number {
  const groceriesTaxRate = 0.03;
  const defaultTaxRate = 0.0475;
  const taxRate = category === "groceries" ? groceriesTaxRate : defaultTaxRate;
  const taxAmount = price * taxRate;

  console.log(
    `Calculating tax for ${category}: ${taxRate * 100}% → $${taxAmount.toFixed(2)}`
  );

  return taxAmount;
}













//export function calculateTax(price: number, category: string): number {
//    const groceriesTax : number = 3;
 //   const defaultTax : number = 4.75;
//if (product.category === "groceries") {
 //   return product.getPriceWithTax(groceriesTax)
//}   else {
 //   return product.getPriceWithTax(defaultTax)
//}