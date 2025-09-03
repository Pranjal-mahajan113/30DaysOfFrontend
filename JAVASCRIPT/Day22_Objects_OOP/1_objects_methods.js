// ===============================
// Day 22 - Objects & Object Methods
// ===============================

// 👉 Objects are collections of key-value pairs
const person = {
  name: "Alice",
  age: 25,
  greet() {
    return `Hello, my name is ${this.name}`;
  }
};

console.log(person.greet()); // "Hello, my name is Alice"

// --- Object Methods ---
console.log(Object.keys(person));    // ["name", "age", "greet"]
console.log(Object.values(person));  // ["Alice", 25, ƒ]
console.log(Object.entries(person)); // [["name", "Alice"], ["age", 25], ["greet", ƒ]]

const updatedPerson = Object.assign({}, person, { age: 26 });
console.log(updatedPerson);

// --- Interview Practice ---

/**
 Q1: Difference between dot notation & bracket notation in objects?
 ✅ Dot notation → Used when property name is a valid identifier.
    Example: person.name
 ✅ Bracket notation → Used when property name is dynamic OR not a valid identifier (like with spaces, hyphens, numbers).
    Example: person["age"], person[key]

 Q2: How would you clone an object? (shallow vs deep copy)
 ✅ Shallow copy → Copies only 1st level (references stay same).
    Methods: Object.assign({}, obj), Spread {...obj}
 ✅ Deep copy → Copies everything including nested objects.
    Methods: JSON.parse(JSON.stringify(obj)), or libraries like lodash.cloneDeep()

 Q3: What’s the difference between Object.seal() and Object.freeze()?
 ✅ Object.seal() → Cannot add/remove properties, but can modify existing values.
 ✅ Object.freeze() → Cannot add, remove, or modify properties (completely immutable).
*/
