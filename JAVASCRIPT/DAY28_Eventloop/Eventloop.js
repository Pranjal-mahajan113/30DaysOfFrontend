// 🔥 Event Loop & Call Stack — Deep Execution Flow of Async JavaScript
// JavaScript is single-threaded → it runs ONE task at a time using the Call Stack.
// Asynchronous tasks (setTimeout, fetch, etc.) are handled by Web APIs
// and scheduled for later execution via the Event Loop.

// ------------------------------------------------------
// STEP-BY-STEP EXECUTION FLOW WHEN THIS FILE RUNS
// ------------------------------------------------------
//
// 1️⃣ JS ENGINE STARTS → Creates a Call Stack & Memory Space
//     - Synchronous code goes directly to the Call Stack.
//     - Asynchronous functions are handed over to Browser/Web APIs.
//
// 2️⃣ console.log("Start")
//     → Pushed to Call Stack → executed immediately → prints "Start".
//
// 3️⃣ setTimeout(...)
//     → Pushed to Call Stack → JS sends the timer task to the BROWSER's Web API.
//     → Browser starts the 0 ms timer.
//     → After timer completes, its callback is moved to the **Task Queue (Macrotask Queue)**.
//
// 4️⃣ Promise.resolve().then(...)
//     → Pushed to Call Stack → Promise resolves instantly.
//     → Its .then() callback is moved to the **Microtask Queue**
//       (Microtasks always have higher priority than Macrotasks).
//
// 5️⃣ console.log("End")
//     → Pushed to Call Stack → executed immediately → prints "End".
//
// 6️⃣ Call Stack is now EMPTY → Event Loop starts checking queues:
//     a. **Microtask Queue first** → runs Promise callback → prints "Promise (Microtask)".
//     b. **Then Task Queue (Macrotask)** → runs setTimeout callback → prints "Timeout (Macrotask)".
//
// 👉 FINAL PRINT ORDER → Start → End → Promise (Microtask) → Timeout (Macrotask)

console.log("Start");

setTimeout(() => console.log("Timeout (Macrotask)"), 0);

Promise.resolve().then(() => console.log("Promise (Microtask)"));

console.log("End");

// ------------------------------------------------------
// INTERVIEW KEY POINTS
// ------------------------------------------------------
// • Execution Priority → Synchronous → Microtasks → Macrotasks.
// • Microtasks (Promises) always run BEFORE Macrotasks (setTimeout).
// • Web APIs live in the BROWSER environment, not inside the JS engine.
// • Event Loop repeatedly checks: "Is the Call Stack empty?
//   If yes, run all Microtasks first, then take the next Macrotask."
//
// ------------------------------------------------------
// EXTENDED REAL-LIFE ANALOGY
// ------------------------------------------------------
// Imagine a busy restaurant:
//
// 👨‍🍳 Call Stack → The Chef
// - The chef cooks ONE dish at a time. He never multitasks.
// - Every new order is added to his work counter (the stack).
//
// 🌐 Web APIs → Kitchen Assistants
// - Timers, waiters, and delivery staff work outside the chef’s stove area.
// - They handle tasks like timing, fetching ingredients, or checking the map
//   while the chef continues cooking.
//
// 🗂️ Microtask Queue → VIP Orders
// - These are urgent side dishes or priority items requested by the owner.
// - The waiter always serves these immediately after the current dish,
//   before moving to regular customer orders.
//
// 🗂️ Task Queue (Macrotask) → Normal Orders
// - Standard meal orders placed by customers.
// - They are served only after all VIP orders are cleared.
//
// 🔁 Event Loop → Restaurant Manager
// - Constantly watches the chef’s counter.
// - As soon as the counter is empty, the manager decides:
//     1. Serve any waiting VIP dishes (Microtasks).
//     2. Then serve the next regular meal (Macrotask).
//
// This is why a Promise callback (VIP order) is always served
// before a setTimeout callback (normal order), even if the timer is 0 ms.
