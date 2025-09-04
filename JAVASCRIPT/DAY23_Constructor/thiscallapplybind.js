// ===============================
// Day 23 — this, call, apply, bind
// ===============================
// // -------------------------------
// 0) What is `this`?
// -------------------------------
// `this` is a reference to the *current execution context*.
// Its value depends on HOW a function is called (call-site), not where it’s defined.
// Common cases:
//  - In a regular function call (non–strict): `this` = global object (window/global).
//  - In strict mode regular function: `this` = undefined.
//  - In a method call (obj.method()): `this` = the object before the dot.
//  - With `new`: `this` = the newly created instance.
//  - With `call/apply/bind`: `this` is explicitly set to what you pass.
//  - Arrow functions: `this` is *lexically captured* from surrounding scope (no own `this`).

// -------------------------------
// 1) Method call — `this` = object before the dot
// -------------------------------
const user = {
  name: "Alice",
  greet() {
    return `Hi, I am ${this.name}`; // `this` → user
  }
};
console.log("[1] method call:", user.greet()); // "Hi, I am Alice"


// -------------------------------
// 2) Regular function — losing `this`
// -------------------------------
// In strict mode, `this` is undefined; otherwise global.
// We'll *set* it using call/apply/bind in the next steps.
function sayAge() {
  console.log("[2] sayAge -> this.age:", this && this.age);
}
const person1 = { age: 25 };


// -------------------------------
// 3) call / apply — invoke NOW with chosen `this`
// -------------------------------
// Q1: Difference between call, apply and bind?
// ✅ call(thisArg, ...args)  -> calls the function immediately, args as a list
// ✅ apply(thisArg, argsArr) -> calls the function immediately, args as an array
// ✅ bind(thisArg, ...args)  -> returns a NEW function with `this` fixed (you call it later)

sayAge.call(person1);               // [3] 25  (immediate call, `this` = person1)
sayAge.apply(person1);              // [3] 25  (immediate call, `this` = person1)

// Step-by-step illustration with arguments:
function introduce(city, skill) {
  console.log(`[3] I am ${this.name}, from ${city}, skill: ${skill}`);
}
const dev = { name: "Pranjal" };

// Using call: args as list
introduce.call(dev, "Delhi", "JavaScript");

// Using apply: args as array
introduce.apply(dev, ["Mumbai", "React"]);


// -------------------------------
// 4) bind — create a NEW function (call LATER)
// -------------------------------
const boundIntroduce = introduce.bind(dev, "Pune"); // partial: city fixed to "Pune"
boundIntroduce("Node.js"); // call later -> `this` = dev, city="Pune", skill="Node.js"

// Another example with our sayAge:
const boundAge = sayAge.bind(person1); // returns function with `this` fixed
boundAge(); // [4] 25


// -------------------------------
// 5) Arrow vs Normal functions — `this` behavior
// -------------------------------
// Q2: How does `this` behave in arrow functions vs normal functions?
// ✅ Arrow functions do NOT have their own `this`.
//    They capture `this` from the surrounding (lexical) scope.
// ✅ `call/apply/bind` CANNOT change `this` inside an arrow function.
// ✅ Do NOT use arrows as object methods *if* you need dynamic `this`.
// ✅ Great for callbacks (e.g., Array.map, setTimeout) to keep outer `this`.

const team = {
  name: "Tigers",
  members: ["A", "B", "C"],
  // Normal method -> gets `this` = team
  start() {
    // Arrow inside -> captures `this` from start() (i.e., team)
    this.members.forEach(member => {
      console.log(`[5] ${this.name} member: ${member}`);
    });
  },

  // Bad idea: arrow as a method (no own `this`, captures from outer/global)
  bad: () => {
    console.log("[5] bad method this.name:", this && this.name); // likely undefined
  }
};

team.start(); // works as expected
team.bad();   // likely undefined


// -------------------------------
// 6) Real-world: Why do we need bind?
// -------------------------------
// Q3: Why do we need bind()? Give real-world example (e.g., event handlers).
// ✅ When passing object methods as callbacks, you often LOSE the original `this`.
//    `bind` fixes the method’s `this` so it still points to the object.
// ✅ Also useful for partial application (pre-filling some arguments).

const cart = {
  items: 0,
  addOne() {
    this.items++;
    console.log("[6] items:", this.items);
  }
};

function runLater(fn) {
  // simulates an async callback (timer, event, promise)
  setTimeout(fn, 0);
}

// If we pass the bare method, `this` is lost (becomes undefined/global)
runLater(cart.addOne);           // WRONG: `this` not cart -> NaN/undefined or error

// Fix with bind: `this` stays cart
runLater(cart.addOne.bind(cart)); // RIGHT: items: 1

// Alternative fix: wrap in arrow that calls the method on the object
runLater(() => cart.addOne());     // RIGHT: items: 2


// -------------------------------
// 7) Extra: `new` and `this`
// -------------------------------
// With `new`, `this` points to the newly created instance.
function Person(name) {
  this.name = name;
}
Person.prototype.say = function() {
  console.log(`[7] Hi, I'm ${this.name}`);
};
const p = new Person("Alice");
p.say(); // works

// Arrow functions cannot be used as constructors:
// const Bad = () => {}; new Bad(); // ❌ TypeError


// -------------------------------
// 8) Quick Interview Answers Recap
// -------------------------------

/**
Q1) Difference between call, apply, bind?
   - call(thisArg, ...args)  -> invoke immediately; args as list.
   - apply(thisArg, argsArr) -> invoke immediately; args as array.
   - bind(thisArg, ...args)  -> does NOT invoke; returns a new function with fixed `this`
                                (and optionally pre-filled args) to call later.

Q2) Arrow vs normal functions (`this`)?
   - Arrow: no own `this`; captures from enclosing scope; `bind/call/apply` can’t change it; not a constructor; no `arguments`.
   - Normal: `this` depends on call-site; can be changed with call/apply/bind; can be a constructor; has `arguments`.

Q3) Why do we need bind()? Real-world examples:
   - Passing object methods as callbacks (timers, event handlers, promises): without bind, `this` is lost.
   - Ensuring class methods keep `this` when passed around (e.g., React handlers).
   - Partial application: pre-fill arguments for cleaner APIs.
 */

// -------------------------------
// 9) Summary
// -------------------------------
// - `this` depends on HOW you call the function.
// - Use call/apply to run immediately with a chosen `this`.
// - Use bind to create a new, reusable function with `this` locked in.
// - Prefer normal methods when you need dynamic `this` on an object.
// - Prefer arrows for callbacks to inherit outer `this`.
