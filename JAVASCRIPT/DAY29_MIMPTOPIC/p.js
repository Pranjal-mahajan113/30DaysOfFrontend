// 1️⃣ Lexical Scope
// ---------------------------------------------------------------------------------------------------
// let outerVar = "Hello"; // ! Global variable

// function outer() {
//   let innerVar = "World"; // ! Outer function variable

//   function inner() {
//     // ! Lexical Scope: 'inner' can access variables from its defining outer scopes
//     console.log(outerVar, innerVar); // ✅ Output: Hello World
//   }

//   inner(); // ! Call inner inside outer
// }

// outer(); // ! Call outer
// ? Functions remember variables from their defining location

// 2️⃣ Scope Chain
// ---------------------------------------------------------------------------------------------------
let outerVar = "Hello"; // ! Global variable
let a = 10; // ! Global scope

function first() {
  let b = 20; // ! First function scope

  function second() {
    let c = 30; // ! Second function scope
    // ! Scope chain: JS looks in 'second' → 'first' → global
    console.log(a + b + c); // ✅ Output: 60
  }

  second(); // ! Call inner function
}

first(); // ! Call outer function
// ? JS resolves variable names by checking outer scopes if not found locally

// 3️⃣ Closures
// ---------------------------------------------------------------------------------------------------
// let outerVar = "Hello"; // ! Global variable
// function outer() {
//   let count = 0; // ! Outer function variable

//   return function inner() {
//     // ! Closure: 'inner' retains access to 'count' even after 'outer' finishes
//     count++;
//     console.log(count); 
//   };
// }

// const counter = outer(); // ! outer() runs and returns 'inner'
// counter(); // ✅ Output: 1
// counter(); // ✅ Output: 2
// // ? Inner function remembers outer variables → private state possible

// 4️⃣ Shadowing
// ---------------------------------------------------------------------------------------------------
let name = "Pranjal"; // ! Global variable

function greet() {
  let name = "Mahajan"; // ! Local variable shadows outer 'name'
  console.log("Hello", name); // ✅ Output: Hello Mahajan
}

greet();
console.log(name); // ✅ Output: Pranjal
// ? Local variable hides outer variable of the same name
