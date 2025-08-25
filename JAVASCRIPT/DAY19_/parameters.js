// -------------------------------
// Default Parameters, Rest & Spread Operators
// -------------------------------

// Default Parameters
function multiply(a, b = 2) {
    return a * b;
}
console.log("Default Parameter:", multiply(5)); // 10

// Rest Operator (...) → Collects arguments into an array
function sumAll(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}
console.log("Rest Operator:", sumAll(1, 2, 3, 4, 5)); // 15

// Spread Operator (...) → Expands an array into individual elements
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log("Spread Operator:", combined); // [1, 2, 3, 4, 5, 6]

// Spread with objects
let obj1 = {name: "Alice"};
let obj2 = {age: 25};
let merged = {...obj1, ...obj2};
console.log("Spread in Objects:", merged); // {name: 'Alice', age: 25}
