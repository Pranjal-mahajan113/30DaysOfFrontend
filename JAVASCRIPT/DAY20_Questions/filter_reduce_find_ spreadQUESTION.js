// -----------------------------------
// Day 20: JavaScript 
// filter(), reduce(), find(), spread
// -----------------------------------

console.log(" Day 20 — Practice ");

// ---------------------------
// 1. FILTER QUESTIONS
// ---------------------------

// Q1: Get all even numbers from array
const nums = [1, 2, 3, 4, 5, 6];
const evens = nums.filter(n => n % 2 === 0);
console.log("Q1 Evens:", evens);

// Q2: Filter names longer than 4 letters
const names = ["Raj", "Amit", "Sonia", "Vikram"];
const longNames = names.filter(n => n.length > 4);
console.log("Q2 Long Names:", longNames);

// Q3: Get students who scored above 80
const students = [
  { name: "A", score: 75 },
  { name: "B", score: 90 },
  { name: "C", score: 82 }
];
const toppers = students.filter(s => s.score > 80);
console.log("Q3 Toppers:", toppers);

// ---------------------------
// 2. REDUCE QUESTIONS
// ---------------------------

// Q4: Sum of all numbers
const sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log("Q4 Sum:", sum);

// Q5: Count frequency of items
const letters = ["a", "b", "a", "c", "b", "a"];
const frequency = letters.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log("Q5 Frequency:", frequency);

// Q6: Find maximum number
const maxNum = nums.reduce((max, curr) => curr > max ? curr : max, nums[0]);
console.log("Q6 Max Number:", maxNum);

// ---------------------------
// 3. FIND QUESTIONS
// ---------------------------

// Q7: Find first odd number
const firstOdd = nums.find(n => n % 2 !== 0);
console.log("Q7 First Odd:", firstOdd);

// Q8: Find student with score above 85
const above85 = students.find(s => s.score > 85);
console.log("Q8 Above 85:", above85);

// ---------------------------
// 4. SPREAD OPERATOR QUESTIONS
// ---------------------------

// Q9: Merge two arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5];
const merged = [...arr1, ...arr2];
console.log("Q9 Merged Array:", merged);

// Q10: Copy object & update value
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 };
console.log("Q10 Updated User:", updatedUser);



// Original Array
//    [1, 2, 3, 4, 5]

//                    │
//  ┌───────────────────────────────────────┐
//  │                 │                     │
//  ▼                 ▼                     ▼

//  MAP()            FILTER()              REDUCE()
// (Transform)       (Select)           (Summarize)

//  │                   │                     │
//  ▼                   ▼                     ▼
 
// [1, 4, 9, 16, 25]    [2, 4]                15
//  (Squares)           (Even nos)           (Sum of all)



// map() → Har element par operation lagta hai → same length new array milta hai.

// filter() → Condition lagti hai → subset of array milta hai.

// reduce() → Poore array ko collapse karke ek single value milta hai.



//  reduce Syntax:
// array.reduce((accumulator, currentValue) => {
//     // operation
// }, initialValue);


// accumulator (acc) → This is the running total that gets updated at each step.

// currentValue (curr) → This is the current element of the array.

// initialValue (0) → This is the starting value for the accumulator.