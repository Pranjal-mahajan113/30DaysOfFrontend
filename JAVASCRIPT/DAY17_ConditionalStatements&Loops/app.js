// ===============================
// DAY 17 - Conditional Statements & Loops
// ===============================

// ===============================
// 1️⃣ Conditional Statements
// ===============================

// Example 1: if - else
let age = 18;
if (age >= 18) {
    console.log("You are an adult."); // Runs if condition is true
} else {
    console.log("You are a minor."); // Runs if condition is false
}

// Example 2: switch
let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

// Example 3: Ternary operator (short if-else)
let score = 75;
let result = (score >= 50) ? "Pass" : "Fail";
console.log(result); // "Pass"

// ===============================
// 2️⃣ Loops
// ===============================

// Example 1: for loop
console.log("For Loop:");
for(let i = 1; i <= 5; i++) {
    console.log(i); // Prints 1 to 5
}

// Example 2: while loop
console.log("While Loop:");
let j = 1;
while(j <= 5) {
    console.log(j);
    j++;
}

// Example 3: do...while loop
console.log("Do...While Loop:");
let k = 1;
do {
    console.log(k); // Prints at least once even if condition is false
    k++;
} while(k <= 5);

// Example 4: for...of loop (arrays)
console.log("For...Of Loop:");
let fruits = ["Apple", "Banana", "Mango"];
for(let fruit of fruits) {
    console.log(fruit);
}

// Example 5: for...in loop (objects)
console.log("For...In Loop:");
let person = {name: "John", age: 25, city: "Delhi"};
for(let key in person) {
    console.log(key + " : " + person[key]);
}

// ===============================
// ✅ Key Notes
// - if/else → Simple conditional checks
// - switch → Multiple conditional checks
// - Ternary → Short if-else
// - for → Loop with counter
// - while → Loop while condition true
// - do...while → Executes at least once
// - for...of → Iterates over iterable objects (arrays, strings)
// - for...in → Iterates over object properties
// ===============================
