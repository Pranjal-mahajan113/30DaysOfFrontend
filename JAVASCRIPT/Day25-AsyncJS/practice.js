console.log("👉 Example 1: Promise Basics");

let myPromise = new Promise((resolve, reject) => {
  // Executor runs IMMEDIATELY when Promise is created
  console.log("Promise executor started...");

  setTimeout(() => {
    let success = false; // try false to see reject path
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