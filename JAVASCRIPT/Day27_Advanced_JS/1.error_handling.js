// 🔥 Error Handling in JavaScript
// try...catch allows you to handle runtime errors gracefully
// throw lets you create custom errors

console.log("👉 Example 1: Basic try...catch");
try {
  let result = riskyOperation();
  console.log("Result:", result);
} catch (error) {
  console.log("❌ Caught Error:", error.message);
} finally {
  console.log("✅ Finally always runs (cleanup tasks)");
}

function riskyOperation() {
  // Simulating an error
  throw new Error("Something went wrong!");
}


// try: Code to test
// catch: Handles any thrown errors
// finally: Executes regardless of success/failure (close DB, stop loaders)
// throw: Manually generate errors for custom conditions

// ⚡ Real Life Analogy:
// Like wearing a seatbelt 🚗—you can’t stop an accident (error),
// but you can reduce damage (catch) and still exit the car safely (finally).
