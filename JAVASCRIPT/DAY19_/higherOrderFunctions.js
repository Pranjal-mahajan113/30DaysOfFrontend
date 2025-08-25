// -------------------------------
// Higher-Order Functions in JavaScript
// -------------------------------

// map() → Creates a new array by applying a function to each element
let numbers = [1, 2, 3, 4];
let squared = numbers.map(num => num * num);
console.log("map():", squared); // [1, 4, 9, 16]

// filter() → Creates a new array with elements that pass a condition
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("filter():", evenNumbers); // [2, 4]

// reduce() → Reduces array to a single value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("reduce():", sum); // 10

// find() → Finds the first element that satisfies a condition
let found = numbers.find(num => num > 2);
console.log("find():", found); // 3

// some() → Returns true if ANY element passes the condition
let hasGreaterThan3 = numbers.some(num => num > 3);
console.log("some():", hasGreaterThan3); // true

// every() → Returns true if ALL elements pass the condition
let allPositive = numbers.every(num => num > 0);
console.log("every():", allPositive); // true
