// ------------------------------
// Day 1: Basics & Syntax 
// ------------------------------

// Introduction
console.log("Hello, JavaScript ");

// Variables
var oldVar = "I am var";   // function-scoped
let modernVar = "I am let"; // block-scoped
const constantVar = "I am const"; // cannot be reassigned

console.log(oldVar, modernVar, constantVar);

// Data types
let name = "Pranjal"; // string
let age = 22;         // number
let isStudent = true; // boolean
let nothing = null;   // null
let notDefined;       // undefined
let bigNum = 12345678901234567890n; // bigint
let uniqueId = Symbol("id"); // symbol

console.log(typeof name, typeof age, typeof isStudent, typeof nothing, typeof notDefined, typeof bigNum, typeof uniqueId);

// // Operators
// let x = 10, y = 3;
// console.log("Arithmetic:", x + y, x - y, x * y, x / y, x % y);
// console.log("Comparison:", x > y, x === y, x !== y);
// console.log("Logical:", x > 5 && y < 5, x > 5 || y > 5, !(x > y));

// // Assignment
// let z = 5;
// z += 2; // z = z + 2
// console.log("Assignment result:", z);

// Template literals
let city = "xyz";
let intro = `My name is ${name}, I am ${age} years old and I live in ${city}.`;
console.log(intro);
