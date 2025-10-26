
export function calculateDiscount(price: number, discountPercentage: number): number {
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Discount percentage must be between 0 and 100.");
  }

  const discountAmount = (price * discountPercentage) / 100;
  console.log(
    `Calculating discount: ${discountPercentage}% of $${price.toFixed(2)} = $${discountAmount.toFixed(2)}`
  );
  return discountAmount;
}