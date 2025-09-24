/****************************************************
 🟢 Day 29 – JavaScript Closure (Deep Dive)
*****************************************************
 A closure is created when an inner function
 **remembers** variables from its outer function
 **even after the outer function has finished running**.
*****************************************************/

/* ---------------------------------------------------
 🔵 1. Lexical Scope (Foundation of Closures)
------------------------------------------------------
➡  Lexical scope means: **Scope is determined by where
   functions are defined in the code**, not where they
   are called.
*/
function lexicalExample() {
    const outerVar = "Hello";

    function inner() {
        // inner can "see" outerVar because of lexical scope
        console.log("Lexical Scope →", outerVar);
    }
    inner();
}
lexicalExample(); // 👉 Lexical Scope → Hello


/* ---------------------------------------------------
 🟢 2. Scope Chain
------------------------------------------------------
➡  When you access a variable, JavaScript searches for it
   in a "chain" of scopes:
      1️⃣ Local scope (current function)
      2️⃣ Parent / outer function scopes
      3️⃣ Global scope
➡  If the variable is not found, the search continues
   upward until global scope is reached.
*/
const globalVar = "🌍 Global";

function outerScope() {
    const outerVar = "🌐 Outer";

    function innerScope() {
        const innerVar = "🔵 Inner";

        console.log("Scope Chain Demo:");
        console.log("1. Inner:", innerVar);   // ✅ Found in innerScope
        console.log("2. Outer:", outerVar);   // ✅ Found in outerScope
        console.log("3. Global:", globalVar); // ✅ Found in global
    }

    innerScope();
}
outerScope();


/* ---------------------------------------------------
 🟠 3. Closure Basics
------------------------------------------------------
➡  A closure happens when a function retains access
   to variables from its outer (lexical) environment.
*/
function outer() {
    let count = 0; // belongs to outer()

    function inner() {
        // Scope Chain Lookup:
        // 1️⃣ inner() → no 'count'
        // 2️⃣ outer() → ✅ found 'count'
        count++;
        console.log("Current Count:", count);
    }

    return inner; // returning inner creates a closure
}

const counter = outer(); // outer() runs once, returns inner
counter(); // 👉 remembers count → 1
counter(); // 👉 remembers count → 2
counter(); // 👉 remembers count → 3


/* ---------------------------------------------------
 🟡 4. Practical Uses of Closures
------------------------------------------------------
✅ Data Privacy – hide variables from global scope
✅ Maintain State – keep values alive across calls
✅ Function Factory – create customized functions
*/
function multiplier(factor) {
    return function (number) {
        // Scope Chain Lookup:
        // 1️⃣ inner → no 'factor'
        // 2️⃣ multiplier → ✅ found 'factor'
        return number * factor;
    };
}

const double = multiplier(2);
console.log("Double 10 →", double(10)); // 20

const triple = multiplier(3);
console.log("Triple 10 →", triple(10)); // 30


/* ---------------------------------------------------
 🔴 5. Classic Interview Question
------------------------------------------------------
➡  Why do these loops behave differently?
*/
for (var i = 1; i <= 3; i++) {
    setTimeout(function () {
        console.log("var i:", i);
    }, 1000);
}
// 👉 Output after 1 sec: 4, 4, 4
// Reason: var is function-scoped → one shared 'i' in the scope chain

for (let j = 1; j <= 3; j++) {
    setTimeout(function () {
        console.log("let j:", j);
    }, 1000);
}
// 👉 Output after 1 sec: 1, 2, 3
// Reason: let is block-scoped → new 'j' for each iteration


/* ---------------------------------------------------
 ✅ Key Takeaways
------------------------------------------------------
1️⃣ **Lexical Scope** decides where a variable *can* be found.
2️⃣ **Scope Chain** is the runtime search path to find variables.
3️⃣ **Closures** allow a function to keep using variables
    from the scope chain even after the parent function ends.
4️⃣ Common Uses:
    - Encapsulation (private variables)
    - State management
    - Function factories & callbacks
*****************************************************/
