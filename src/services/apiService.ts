
import {
  AppError,
  handleNetworkError,
  handleApiError,
  handleUnexpectedError,
} from "../utils/errorHandler";
import { Product } from "../models/Product";

export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      handleApiError(response.status, response.statusText);
      throw new AppError("Failed to fetch products", response.status);
    }

    const data = await response.json();

    // Convert raw API objects to Product instances
    const products: Product[] = data.products.map(
      (p: any) =>
        new Product(
          p.id,
          p.title,
          p.description,
          p.category,
          p.price,
          p.discountPercentage
        )
    );

    console.log(" Products fetched successfully:", products.length);
    return products; 
  } catch (error: any) {
    // Handle network-related errors
    if (error.name === "TypeError") {
      handleNetworkError(error);
    } else {
      handleUnexpectedError(error);
    }

    console.error(" Error fetching products:", error.message || error);
    throw error;
  }
}