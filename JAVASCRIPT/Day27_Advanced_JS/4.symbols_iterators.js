// =============================
// SYMBOL + ITERATOR 
// =============================
//
// -----------------------------
// 1. WHAT IS Symbol?
// -----------------------------
// - Symbol is a primitive data type in JS (ES6).
// - Creates a unique and immutable value.
// - JavaScript defines some well-known symbols
//   (like Symbol.iterator, Symbol.toStringTag, etc.)
//   to add special behaviors to objects.
//
// Example:
const mySym = Symbol("uniqueKey");
console.log(mySym); // Symbol(uniqueKey) - unique identifier

// -----------------------------
// 2. WHAT IS Symbol.iterator?
// -----------------------------
// - A well-known symbol that specifies the default
//   iteration behavior of an object.
// - If an object has a method keyed by Symbol.iterator,
//   JS knows it can be looped with for...of, spread (...),
//   Array.from(), etc.

// -----------------------------
// 3. ITERATOR PROTOCOL
// -----------------------------
// - An object is an "iterator" if it has a next() method
//   that returns an object with EXACTLY these two properties:
//
//      { value: <data>, done: <boolean> }
//
//   value → the actual data item
//   done  → true when iteration is finished
//
// - JS features like for...of, spread, and destructuring
//   rely on this protocol to know how to get values
//   and when to stop.
//
// =============================
// REAL LIFE ANALOGY
// =============================
// Imagine a BOX of chocolates.
// We want to give chocolates ONE by ONE to a friend.
//
// In JS terms:
// - The BOX is our object (Iterable).
// - The FRIEND is the for...of loop.
// - The SECRET DOOR to take chocolates out is Symbol.iterator.
// =============================

// 4. EXAMPLE – Making a Plain Object Iterable
const chocolateBox = {
    chocolates: ["Dark", "Milk", "White"],

    // Add the SECRET DOOR (Symbol.iterator) 👇
    [Symbol.iterator]() {
        let index = 0;                       // Start from first chocolate
        const items = this.chocolates;       // Array inside the box

        // Return an ITERATOR object with next() method
        return {
            next() {
                if (index < items.length) {
                    // Give the next chocolate
                    return { value: items[index++], done: false };
                } else {
                    // No more chocolates
                    return { value: undefined, done: true };
                }
            }
        };
    }
};

// 5. USING for...of (Friend taking chocolates automatically)
console.log("Friend is taking chocolates:");
for (const choco of chocolateBox) {
    console.log("🍫 Got:", choco);
}

// 6. MANUAL ITERATION (Taking chocolates one by one yourself)
const iterator = chocolateBox[Symbol.iterator]();
console.log("\nManual way of taking chocolates:");
console.log(iterator.next()); // { value: "Dark",  done: false }
console.log(iterator.next()); // { value: "Milk",  done: false }
console.log(iterator.next()); // { value: "White", done: false }
console.log(iterator.next()); // { value: undefined, done: true }

// -----------------------------
// KEY TAKEAWAYS
// -----------------------------
// ✅ Symbol.iterator is a special built-in symbol
//    that makes an object iterable.
//
// ✅ The iterator object returned by Symbol.iterator
//    must have a next() method returning
//    { value: <data>, done: <boolean> }.
//
// ✅ "value" and "done" are NOT keywords or functions.
//    They are just standard property names required
//    by the iterator protocol so JS knows:
//       - what value to read (value)
//       - when to stop (done)
//
// ✅ Without Symbol.iterator, a plain object
//    cannot be used in for...of or spread syntax.
//
// -----------------------------
// SUMMARY 
// -----------------------------
// "Symbol.iterator is a well-known symbol that tells
//  JavaScript how an object should be iterated.
//  Any object that implements a [Symbol.iterator] method
//  and returns an iterator object following the
//  { value, done } protocol becomes iterable and can be
//  used with for...of, spread operator, and many JS APIs."
