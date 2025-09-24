/****************************************************
 🟢 Day 29 – JavaScript Shadowing
 Shadowing occurs when a variable in a **local scope**
 has the same name as one in an **outer scope**.
 The inner declaration "shadows" (hides) the outer one.
****************************************************/

// ✅ Example 1: Simple Shadowing
let name = "Pranjal";

function greet() {
    let name = "Mahajan"; // shadows the outer 'name'
    console.log("Hello", name);
}

greet();        // 👉 Hello Mahajan
console.log(name); // 👉 Pranjal (outer unaffected)

/*
🔑 Key Points:
- Inner variable takes priority inside its scope.
- The outer variable is still accessible outside.
*/

// ✅ Example 2: Function Scope vs Block Scope
var city = "Mumbai";

function showCity() {
    var city = "Delhi"; // shadows global 'city'
    console.log(city);  // Delhi
}
showCity();
console.log(city); // Mumbai

// ✅ Example 3: Illegal Shadowing
let a = 10;
{
    // var a = 20; ❌ Error in strict mode
    // 'var' cannot shadow a 'let' in the same scope chain
    let a = 20; // ✅ allowed (block scope)
    console.log(a);
}

/*
🛑 Illegal shadowing happens when:
- A 'var' declaration attempts to shadow a 'let' or 'const'
  in the same or overlapping scope.
*/

// ✅ Takeaway
/*
Shadowing is natural in nested scopes,
but always use **let/const** to avoid accidental bugs
and illegal shadowing issues.
*/
