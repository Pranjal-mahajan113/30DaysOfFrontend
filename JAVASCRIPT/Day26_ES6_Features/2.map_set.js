// 🔥 2. Map, Set, WeakMap, WeakSet

// 👉 Map: stores key-value pairs (keys can be any type)
let map = new Map();
map.set("name", "Pranjal");
map.set(1, "Number Key");
console.log("Map Example:", map.get("name")); // Pranjal

// 👉 Set: stores unique values only
let set = new Set([1, 2, 2, 3]);
console.log("Set Example:", set); // {1,2,3}

// 👉 WeakMap: keys must be objects, values can be anything
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "Object value");
console.log("WeakMap Example:", weakMap.has(obj)); // true

// 👉 WeakSet: stores only objects, no duplicates
let weakSet = new WeakSet();
let person = { name: "Alice" };
weakSet.add(person);
console.log("WeakSet Example:", weakSet.has(person)); // true


// Map vs Object → Map is better for frequent additions/removals.
// Set vs Array → Set is best when uniqueness matters.
// WeakMap/WeakSet → Used for memory-efficient storage (garbage-collected).

// Analogy: 
// Map = dictionary 📖
// Set = bag of unique items 🎒
// WeakMap/WeakSet = secret notes tied to objects 🔒

// Map → Key–value pairs, keys can be any type, maintains insertion order.

// Set → Collection of unique values (no duplicates).

// WeakMap → Like Map, but keys must be objects, and garbage-collected when object is gone.

// WeakSet → Like Set, but only stores objects, weakly held.

