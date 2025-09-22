// 🔥 LocalStorage & SessionStorage
// Both store key–value pairs inside the browser.
// Key & value MUST be strings. For objects/arrays → use JSON.stringify & JSON.parse.

// ====================================================================
// 1️⃣ LOCAL STORAGE – DATA PERSISTS EVEN AFTER CLOSING THE BROWSER
// ====================================================================

// 👉 Store a simple string
localStorage.setItem("username", "Pranjal");        // Save
console.log(localStorage.getItem("username"));      // Retrieve → "Pranjal"

// 👉 Update (just set again with same key)
localStorage.setItem("username", "Pranjal Mahajan");

// 👉 Delete a single item
localStorage.removeItem("username");

// 👉 Store an object (use JSON.stringify)
const user = { name: "Pranjal", age: 22, skills: ["JS", "SQL"] };
localStorage.setItem("userData", JSON.stringify(user));

// 👉 Retrieve object (use JSON.parse to convert back)
const storedUser = JSON.parse(localStorage.getItem("userData"));
console.log("User Object:", storedUser);

// 👉 Clear everything
// localStorage.clear();


// ====================================================================
// 2️⃣ SESSION STORAGE – DATA CLEARED WHEN TAB/WINDOW CLOSES
// ====================================================================

// 👉 Store a string
sessionStorage.setItem("token", "ABC123");
console.log(sessionStorage.getItem("token")); // "ABC123"

// 👉 Store an array
const cart = ["Shoes", "T-shirt", "Watch"];
sessionStorage.setItem("cartItems", JSON.stringify(cart));

// 👉 Retrieve the array
const storedCart = JSON.parse(sessionStorage.getItem("cartItems"));
console.log("Cart Items:", storedCart);

// 👉 Remove specific item
sessionStorage.removeItem("token");

// 👉 Clear everything
// sessionStorage.clear();


// ====================================================================
// NOTES
// ====================================================================
// • localStorage → Persists until manually cleared (best for preferences, theme, auth tokens).
// • sessionStorage → Clears when the tab or window closes (best for temporary data like a one-time form).
// • Only strings are stored → ALWAYS wrap objects/arrays with JSON.stringify when saving,
//   and JSON.parse when retrieving.
// • Storage is synchronous → avoid storing very large data to prevent blocking the main thread.


// ⚡ REAL LIFE ANALOGY
// • localStorage = a notebook kept at home 🏠 (stays until you erase it).
// • sessionStorage = a sticky note on your desk 🗒️ (gone once you leave the room).
