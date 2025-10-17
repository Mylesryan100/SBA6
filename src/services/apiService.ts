
import ErrorHandling from "../utils/errorHandler";

export async function fetchAllProducts(): Promise<unknown> {
  try {
    const response = await fetch("https://dummyjson.com/products");
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    throw error;
  }
}