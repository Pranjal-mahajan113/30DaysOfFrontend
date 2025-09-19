//  4. Optional Chaining & Nullish Coalescing

// 👉 Optional Chaining (?.)
// Prevents errors when accessing deep properties
const user = { profile: { name: "Alice" } };
console.log("Optional Chaining:", user?.profile?.name); // Alice
console.log("Optional Chaining:", user?.address?.city); // undefined, no error

// 👉 Nullish Coalescing (??)
// Provides default only if value is null or undefined
let score = null;
console.log("Nullish Coalescing:", score ?? 100); // 100

// 👉 Difference between ?? and ||
// || treats falsy values (0, "", false) as fallback
console.log(0 || 10); // 10
console.log(0 ?? 10); // 0

// 
// Optional chaining avoids runtime errors → safer code.
// Nullish coalescing is better than || when you want to allow 0 or "".

// Analogy: 
// Optional Chaining = Checking mailbox only if the building exists 🏢📮
// Nullish Coalescing = Giving pocket money only if wallet is empty, 
// not if it has 0 coins 💰
