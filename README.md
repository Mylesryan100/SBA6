# SBA6

Reflection Document

1. How you implemented TypeScript features and OOP principles.

In this project, I implemented TypeScript features and object-oriented programming (OOP) principles to build a structured, maintainable application that interacts with the DummyJSON Products API. I began by defining strongly typed interfaces and a Product class that encapsulates both data ( for example: properties like id, title, price, and discountPercentage) and behavior (methods such as displayDetails() and getPriceWithDiscount()). This approach demonstrated key OOP principles—encapsulation, by bundling related properties and methods; abstraction, by hiding complex calculations behind clear method names; and reusability, through well-defined utility modules like discountCalculator and taxCalculator. TypeScript’s static typing was especially valuable for preventing runtime errors and ensuring data integrity when fetching API responses.

2. The challenges you encountered and how you overcame them.

One of the biggest challenges I faced was working with API data that didn’t automatically map to my typeScript classes. At first, I created plain javaScript objects, which caused method calls like .displayDetails() to fail since those objects didn’t inherit from the class. I resolved this by using the new Product() constructor to generate proper instances for each API item, restoring access to the class’s methods. Managing asynchronous functions was another learning curve; I handled it by using async/await along with try/catch statements, which helped make the code flow easier to read and debug.

3. How you handled asynchronous operations and error management.

I handled asynchronous operations and error management by developing a dedicated errorHandler that includes a custom AppError class and separate functions to handle network failures, bad API responses, and unexpected runtime errors. This modular structure kept my code cleaner and made troubleshooting far simpler. Overall, this project  taught me how to combine asynchronous logic with structured error management in a real-world coding scenario.
