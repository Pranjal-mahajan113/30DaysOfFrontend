// 🔥 Promises
// A Promise represents a value that may be available now, in the future, or never.

console.log("👉 Example 2: Promise Basics");

let myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let success = true;
    if (success) resolve("✅ Task completed");
    else reject("❌ Task failed");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log("THEN:", result);
  })
  .catch((error) => {
    console.log("CATCH:", error);
  })
  .finally(() => {
    console.log("FINALLY: Always runs");
  });

// 👉 Interview Note:
// then() → success path
// catch() → error path
// finally() → always runs (cleanup)
