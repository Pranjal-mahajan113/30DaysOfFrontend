// 🔥 Callbacks in JavaScript
// A callback is a function passed as an argument to another function,
// executed later when an operation is done (used in async programming).

console.log("👉 Example 1: Basic Callback");

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Alice", sayBye); // Callback is executed after greet

// 👉 Interview Note:
// Callbacks can lead to "Callback Hell" when deeply nested async tasks.


// 🔥 Callbacks in JavaScript
// A callback is simply: 
// 👉 A FUNCTION passed as an argument into another function,
// and then executed later (inside that function).


// Step 1: Define a function that takes two parameters
//   - name (normal value, like a string)
//   - callback (expected to be a function)
function greet(name, callback) {
  console.log("Hello " + name); // this runs first
  callback(); // then the callback function is executed
}

// Step 2: Define a normal function
// This is just a plain function (not special yet).
function sayBye() {
  console.log("Goodbye!");
}

// Step 3: Call greet() and pass:
//   - "Alice" → goes into the parameter 'name'
//   - sayBye (function reference) → goes into the parameter 'callback'
greet("Alice", sayBye);

// 📝 What is happening under the hood:
// greet("Alice", sayBye)
//   → name = "Alice"
//   → callback = sayBye (function)
// Inside greet():
//   console.log("Hello Alice");
//   callback();  // which means → sayBye();

// Output:
// 👉 Hello Alice
// 👉 Goodbye!

// -------------------------------
// 📌 Interview Notes:
//
// 1. "sayBye" is a FUNCTION we defined. 
// 2. When we pass sayBye into greet(), it becomes the 'callback' parameter.
// 3. So 'callback' is just a variable that stores a FUNCTION, 
//    and when we call callback(), it executes sayBye().
// 4. Callbacks are very common in async programming 
//    (e.g., setTimeout, event listeners, API calls).
//
// ⚠️ Problem: If we keep nesting callbacks (one inside another),
//             code becomes messy → called "Callback Hell".
