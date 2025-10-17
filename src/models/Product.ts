
export interface Product {
  id: number;                 
  title: string;              
  description: string;        
  category: string;           
  price: number; 
  discountPercentage: number;
  
 constructor(id: number, title: string, description: string, category: string, price: number, discountPercentage: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
  }

  // Method: Display all product details
  displayDetails(): void {
    console.log("Product Details ----------------");
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Description: ${this.description}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: $${this.price.toFixed(2)}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log("----------------------------------");
  }
  getDiscount(percentage:number): number {
    return this.price * percentage/100
  }

  // Method: Calculate price after discount
  getPriceWithDiscount(): number {
    const discountAmount = (this.price * this.discountPercentage) / 100;
    const discountedPrice = this.price - discountAmount;
    console.log(
      `Discount applied (${this.discountPercentage}%): $${discountedPrice.toFixed(2)}`
    );
    return discountedPrice;
  }
}
getPriceWithTax(taxRate:number): number {
    return (this.price * (taxRate + 1));
}