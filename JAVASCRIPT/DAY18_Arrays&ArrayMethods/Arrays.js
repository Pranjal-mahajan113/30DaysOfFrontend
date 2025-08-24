// ====================
// Day 18: Arrays & Array Methods
// ====================

//  What is an Array?
// Array = A collection of values stored in one variable.
// Example: A list of fruits
let fruits = ["apple", "banana", "mango"];
console.log("Original Fruits:", fruits);

// ====================
// 1. push()
// ====================
// Adds an element to the END of the array
fruits.push("orange");
console.log("After push:", fruits); // ["apple","banana","mango","orange"]

// ====================
// 2. pop()
// ====================
// Removes the LAST element of the array
fruits.pop();
console.log("After pop:", fruits); // ["apple","banana","mango"]

// ====================
// 3. unshift()
// ====================
// Adds an element at the BEGINNING of the array
fruits.unshift("grapes");
console.log("After unshift:", fruits); // ["grapes","apple","banana","mango"]

// ====================
// 4. shift()
// ====================
// Removes the FIRST element of the array
fruits.shift();
console.log("After shift:", fruits); // ["apple","banana","mango"]

// ====================
// 5. splice()
// ====================
// (start index, delete count, items to add)
// Removes OR replaces elements
fruits.splice(1, 1, "kiwi"); // remove 1 element from index 1 & add "kiwi"
console.log("After splice:", fruits); // ["apple","kiwi","mango"]

// ====================
// 6. slice()
// ====================
// (start index, end index) → copies part of the array
let newFruits = fruits.slice(0, 2); // copy from index 0 to 1
console.log("After slice:", newFruits); // ["apple","kiwi"]

