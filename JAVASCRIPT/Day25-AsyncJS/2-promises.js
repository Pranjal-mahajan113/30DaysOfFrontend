// 🔥 Async/Await in JavaScript
// async → makes a function return a Promise
// await → pauses execution until the Promise settles (resolve/reject)

// --------------------------------------------------------------------
// 👉 Example 1: Basic Async/Await
// --------------------------------------------------------------------
console.log("👉 Example 1: Basic Async/Await");

function fakeFetch(data, delay) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(`✅ Data: ${data}`), delay);
  });
}

async function getData() {
  console.log("Start fetching...");
  const result = await fakeFetch("User Info", 1000); // waits here
  console.log("Received:", result);
  console.log("Done fetching!\n");
}

getData();

// --------------------------------------------------------------------
// 👉 Example 2: Error Handling with try/catch
// --------------------------------------------------------------------
console.log("👉 Example 2: Error Handling");

function fetchWithError() {
  return new Promise((_, reject) =>
    setTimeout(() => reject("❌ Server down"), 800)
  );
}

async function loadData() {
  try {
    const data = await fetchWithError();
    console.log("Data:", data);
  } catch (error) {
    console.log("Caught error:", error);
  } finally {
    console.log("Cleanup after error\n");
  }
}

loadData();

// --------------------------------------------------------------------
// 👉 Example 3: Sequential vs Parallel
// --------------------------------------------------------------------
console.log("👉 Example 3: Sequential vs Parallel");

function fetchItem(name, delay) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(`📦 Item: ${name}`), delay)
  );
}

// Sequential (one after another → slower)
async function sequential() {
  console.time("Sequential");
  const item1 = await fetchItem("Shoes", 1000);
  console.log(item1);
  const item2 = await fetchItem("T-shirt", 1000);
  console.log(item2);
  console.timeEnd("Sequential");
}

// Parallel (faster using Promise.all)
async function parallel() {
  console.time("Parallel");
  const [item1, item2] = await Promise.all([
    fetchItem("Shoes", 1000),
    fetchItem("T-shirt", 1000),
  ]);
  console.log(item1, item2);
  console.timeEnd("Parallel");
}

sequential().then(parallel);

// --------------------------------------------------------------------
// 👉 Example 4: Real-Life Analogy (Interview Friendly)
// --------------------------------------------------------------------
// Think of async/await as ordering food at a restaurant 🍽️:
//
// - async function = waiter taking your order (it promises food later)
// - await = you WAIT until the chef prepares your food
// - try/catch = if kitchen burns food, waiter handles error gracefully
// - Promise.all = you order pizza + drink together (parallel serving)
//
// ✅ Interview Answer:
// Async/await makes asynchronous code look synchronous,
// easier to read than .then/.catch chains.
