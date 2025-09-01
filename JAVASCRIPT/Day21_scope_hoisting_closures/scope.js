// ===============================
// Day 21 - Scope 
// ===============================

// 🔹 1. Global Scope
// Variables declared outside functions/blocks are globally accessible
let globalVar = "I am Global";

function printGlobal() {
  console.log(globalVar); // ✅ Accessible
}
printGlobal();


// 🔹 2. Function Scope
// Variables declared inside a function are not accessible outside
function functionScope() {
  let funcVar = "I am Function Scoped";
  console.log(funcVar); // ✅ Accessible here
}
functionScope();
// console.log(funcVar); ❌ Error: funcVar is not defined


// 🔹 3. Block Scope
// let and const have block scope
{
  let blockVar = "I am Block Scoped";
  const blockConst = "Block Const";
  console.log(blockVar, blockConst); // ✅ Accessible
}
// console.log(blockVar); ❌ Not accessible


// 🔹 Interview Q1: Difference between var, let, const in scope?
// var → function scoped, let/const → block scoped
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 1000);
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 1000);
}
// Output shows: "var" leaks scope → prints 3,3,3 but "let" works → 0,1,2
