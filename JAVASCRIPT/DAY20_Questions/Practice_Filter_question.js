// ---------------------------
// Day 20 — Map() & Higher Order Functions 
// ---------------------------

// Q1: Square each number using map
const numbers = [2, 4, 6, 8];
const squares = numbers.map(num => num * num);
console.log("Q1 Squares:", squares);  // [4, 16, 36, 64]

// Q2: Convert an array of names to uppercase
const names = ["alice", "bob", "charlie"];
const upperNames = names.map(name => name.toUpperCase());
console.log("Q2 Uppercase:", upperNames);  // ["ALICE", "BOB", "CHARLIE"]

// Q3: Extract first names from array of objects
const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" }
];
const firstNames = users.map(user => user.firstName);
console.log("Q3 First Names:", firstNames); // ["John", "Jane"]

// Q4: Add 10 to every number
const ten = [10,20,30,40];
const addTen = ten.map(n => n + 10);
console.log("Q4 Add 10:", addTen);

// Q5: Get lengths of each word
const words = ["apple", "banana", "cherry"];
const lengths = words.map(w => w.length);
console.log("Q5 Lengths:", lengths);  // [5, 6, 6]

// Q6: Multiply each price by 2
const prices = [100, 200, 300];
const doubledPrices = prices.map(p => p * 2);
console.log("Q6 Doubled Prices:", doubledPrices); // [200, 400, 600]

// Q7: Boolean array → true if number > 50
const nums = [10, 60, 45, 80];
const checkAbove50 = nums.map(n => n > 50);
console.log("Q7 Above 50:", checkAbove50); // [false, true, false, true]

// Q8: Format as "Name: Age"
const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
const formatted = people.map(p => `${p.name}: ${p.age}`);
console.log("Q8 Formatted:", formatted); // ["Alice: 25", "Bob: 30"]

// Q9: Create array of objects with index
const letters = ["a", "b", "c"];
const withIndex = letters.map((letter, index) => ({ id: index, value: letter }));
console.log("Q9 With Index:", withIndex);
// [{id:0, value:"a"}, {id:1, value:"b"}, {id:2, value:"c"}]

// Q10: Chain map() → Square + add 1
const chainResult = numbers.map(n => n * n).map(n => n + 1);
console.log("Q10 Chain:", chainResult); // [5, 17, 37, 65]

