// function a() {
//   var b = 10;
//   c();
//   function c() {

//   }
// }
// a();
// console.log(b);

// ===============================================
// Lexical Environment & Scope Chain
// ===============================================

// Function a defines a variable b and an inner function c
function a() {
  var b = 10; // local variable inside a

  // Inner function (closure)
  function c() {
    // c does not have b, so JS looks in its lexical environment (parent a)
    console.log("Inside c, b is:", b);
  }

  c(); // call c inside a
}

// Call function a
a();

// Try to access b outside
// ❌ This will throw ReferenceError because b is not in global scope
// console.log("Outside a, b is:", b);

// ===============================================
// 🔹 Step-by-Step Execution Flow
// ===============================================

// 1. Global Execution Context created:
//    - a → function stored in memory
//    - b → not found in global

// 2. Call a()
//    - New Execution Context for a
//    - Local memory of a: b = 10, c → function

// 3. Call c()
//    - New Execution Context for c
//    - Looks for b → not in c
//    - Checks parent lexical environment (a) → finds b = 10
//    ✅ Prints: Inside c, b is: 10

// 4. After a() finishes, its memory (b and c) is destroyed
//    Global console.log(b) → ReferenceError

// ===============================================
// 🔹 Output
// ===============================================
// Inside c, b is: 10
// Uncaught ReferenceError: b is not defined

// ===============================================
// 🔹 Real Life Analogy
// ===============================================
// Think of function a as a locker with a key (b).
// Function c is inside the locker, so it can use the key.
// But outside world (global scope) cannot access the key once the locker is closed.
// ===============================================
