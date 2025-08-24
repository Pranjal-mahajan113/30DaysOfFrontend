// =======================
// Playground: Loops in JS
// =======================

// 1. for loop
// -------------------
// Best for iterating when you know the exact number of times to run the loop
let fruits = ["Apple", "Banana", "Mango", "Orange"];

console.log("---- Using for loop ----");
for (let i = 0; i < fruits.length; i++) {
  console.log("Index " + i + " : " + fruits[i]);
}


// 2. for...of loop
// -------------------
// Best for directly accessing values of an iterable (like arrays, strings, etc.)
console.log("\n---- Using for...of loop ----");
for (let fruit of fruits) {
  console.log("Fruit: " + fruit);
}


// 3. for...in loop
// -------------------
// Best for iterating over OBJECT properties (also works with arrays but not recommended)
let student = {
  name: "Pranjal",
  age: 22,
  course: "BCA"
};

console.log("\n---- Using for...in loop ----");
for (let key in student) {
  console.log(key + " : " + student[key]);
}


//  Quick Recap:
// for → iterate with index (arrays, numbers, fixed range)
// for...of → iterate values (arrays, strings, sets, maps)
// for...in → iterate keys/properties (objects)
