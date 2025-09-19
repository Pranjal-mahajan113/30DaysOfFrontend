//  1. Destructuring in JavaScript
// Definition: Destructuring allows you to unpack values from arrays 
// or properties from objects into variables in a clean, concise way.

//  Array Destructuring
const numbers = [10, 20, 30];
const [a, b, c] = numbers;
console.log("Array Destructuring:", a, b, c); // 10 20 30

//  Object Destructuring
const user = { name: "Alice", age: 25, country: "India" };
const { name, age } = user;
console.log("Object Destructuring:", name, age); // Alice 25

//  Default values
const [x, y = 50] = [10];
console.log("With default:", x, y); // 10 50

// Destructuring improves readability, avoids repetitive code like obj.property.
// Useful when working with APIs where data comes as nested objects.

// Analogy: Like unpacking a gift box  into individual items without extra effort.
