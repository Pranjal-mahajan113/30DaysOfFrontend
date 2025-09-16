// 🔥 Promise.all
// Runs multiple promises in parallel and waits for all to finish.

console.log(" Promise.all");

let p1 = new Promise((resolve) => setTimeout(() => resolve("🍎 Apple"), 2000));
let p2 = new Promise((resolve) => setTimeout(() => resolve("🍌 Banana"), 1000));
let p3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("🍊 Orange"), 1500)
);

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("All results:", results);
  })
  .catch((error) => {
    console.log("Error:", error);
  });

// 👉 Interview Note:
// ✅ Promise.all → waits for ALL promises
// ❌ If one fails, entire Promise.all rejects
