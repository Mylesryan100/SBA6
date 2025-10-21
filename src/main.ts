
import { Product } from "./models/Product";
import { calculateDiscount } from "./utils/discountCalculator";

async function fetchProducts(): Promise<Product[]> {
  const response = await fetch("https://dummyjson.com/products");
  
  if (!response.ok) {
    throw new Error(`Failed to fetch products: ${response.status}`);
  }

  const data = await response.json();
  
  // The API returns { products: [...] }, so we only return the array
  const products: Product[] = data.products.map((p: any) => ({
    id: p.id,
    title: p.title,
    description: p.description,
    category: p.category,
    price: p.price
  }));

  console.log("Products fetched:", products);
  return products;
}

fetchProducts()
  .then((products) => {
    console.log("First Product:", products[0]);
    products[0].displayDetails();
    console.log(`Discounted Price: $${products[0].getPriceWithDiscount().toFixed(2)}`);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//import { Product } from "./models/Product";

const mascara = new Product(
  1,
  "Essence Mascara Lash Princess",
  "Popular mascara known for volumizing and lengthening effects.",
  "beauty",
  9.99,
  7.17
);

// Display all details
mascara.displayDetails();

// Apply discount

const discountAmount = calculateDiscount(mascara.price, mascara.discountPercentage);
console.log(` Discount amount: $${discountAmount.toFixed(2)}`);

//const discountedPrice = mascara.getPriceWithDiscount(7.17);
//console.log("Final Price:", discountedPrice); 

const finalPrice = mascara.getPriceWithDiscount();
console.log(`Final Price: $${finalPrice.toFixed(2)}`);