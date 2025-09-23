// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// ------------------Question 2 — Async/Await vs Promise========================
async function foo() {
  console.log("Inside foo start");
  await Promise.resolve();
  console.log("Inside foo end");
}

console.log("Before foo");
foo();
console.log("After foo");




// JS executes synchronous code first: prints "Before foo".

// Calling foo() runs the synchronous part of the async function: prints "Inside foo start".

// await Promise.resolve() pauses the async function, schedules the rest ("Inside foo end") as a microtask.

// JS continues with synchronous code: prints "After foo".

// Microtask runs after Call Stack is empty: prints "Inside foo end".

// Output:

// Before foo
// Inside foo start
// After foo
// Inside foo end


// Key Tip to Say:

// "await pauses the async function but doesn’t block the Call Stack; code after await runs as a microtask, which executes after all synchronous code."