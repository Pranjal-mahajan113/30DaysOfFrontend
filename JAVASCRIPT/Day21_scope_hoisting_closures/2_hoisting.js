// ===============================
// Day 21 - Hoisting
// ===============================

// Hoisting = JavaScript moves declarations to the top of the scope
// BUT initialization is not hoisted for let/const

// 🔹 1. Hoisting with var
console.log(a); // ✅ undefined (not error, because var is hoisted)
var a = 10;

// 🔹 2. Hoisting with let
// console.log(b); ❌ ReferenceError (Temporal Dead Zone)
let b = 20;

// 🔹 3. Hoisting with const
 // console.log(c);  ❌ ReferenceError
const c = 30;

// 🔹 4. Function Declarations are hoisted fully
sayHello(); // ✅ Works
function sayHello() {
  console.log("Hello from hoisted function!");
}

// 🔹 5. Function Expressions are NOT hoisted
// greet(); ❌ Error
var greet = function () {
  console.log("Hi from function expression!");
};

// 🔹 Interview Q2: What happens when you use var before declaration?
// Answer: It will be hoisted and initialized as undefined.
