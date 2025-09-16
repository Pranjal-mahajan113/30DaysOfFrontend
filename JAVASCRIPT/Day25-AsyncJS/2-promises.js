// 🔥 Promises in JavaScript
// A Promise represents a value that will be available now, in the future, or never.
// States: Pending → Fulfilled (resolve) OR Rejected (reject).

// --------------------------------------------------------------------
// 👉 Example 1: Basic Promise (Success Path)
// --------------------------------------------------------------------
console.log("👉 Example 1: Promise Basics");

let myPromise = new Promise((resolve, reject) => {
  // Executor runs IMMEDIATELY when Promise is created
  console.log("Promise executor started...");

  setTimeout(() => {
    let success = true; // try false to see reject path
    if (success) resolve("✅ Task completed");
    else reject("❌ Task failed");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log("THEN:", result); // runs if resolved
  })
  .catch((error) => {
    console.log("CATCH:", error); // runs if rejected
  })
  .finally(() => {
    console.log("FINALLY: Always runs (cleanup)");
  });

// --------------------------------------------------------------------
// 👉 Example 2: Reject Path
// --------------------------------------------------------------------
console.log("\n👉 Example 2: Reject Path");

let failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("🚨 Network error"), 500);
});

failedPromise
  .then((res) => console.log("OK:", res)) // skipped
  .catch((err) => console.log("CATCH:", err)) // runs
  .finally(() => console.log("Cleanup done!"));

// --------------------------------------------------------------------
// 👉 Example 3: Promise Chaining
// --------------------------------------------------------------------
console.log("\n👉 Example 3: Chaining");

Promise.resolve(2)
  .then((x) => {
    console.log("First then:", x);
    return x * 3; // passes 6 to next then
  })
  .then((y) => {
    console.log("Second then:", y);
    return y + 4; // passes 10
  })
  .then((z) => console.log("Final result:", z)) // prints 10
  .catch((err) => console.log("Error:", err));

// --------------------------------------------------------------------
// 👉 Example 4: Error Propagation
// --------------------------------------------------------------------
console.log("\n👉 Example 4: Error Propagation");

new Promise((resolve) => resolve("Start"))
  .then((msg) => {
    console.log(msg);
    throw new Error("💥 Something went wrong"); // forces rejection
  })
  .then(() => console.log("This won't run"))
  .catch((e) => console.log("Caught:", e.message)) // error handled here
  .finally(() => console.log("Cleanup even after error"));

// --------------------------------------------------------------------
// 👉 Example 5: Life Analogy (Interview Friendly)
// --------------------------------------------------------------------
// Think of a Promise as an Online Order:
// - You place the order (Promise created → pending)
// - If delivery succeeds (resolve) → .then runs (you enjoy the item)
// - If delivery fails (reject) → .catch runs (refund / retry)
// - Regardless (success/fail) → .finally runs (close the app, cleanup)
