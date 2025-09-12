// ------------------------------------
// 1. Function Statement (Declaration)
// ------------------------------------
// A normal function with a name
function sayHello() {
    console.log("Hello, this is a Function Statement!");
}
sayHello();


// ------------------------------------
// 2. Function Expression
// ------------------------------------
// Function stored in a variable
const sayHi = function () {
    console.log("Hi, this is a Function Expression!");
};
sayHi();


// ------------------------------------
// 3. Function Declaration
// ------------------------------------
//  Function Declaration = Function Statement
// They are SAME in JS
function add(a, b) {
    return a + b;
}
console.log("Declaration:", add(2, 3));


// ------------------------------------
// 4. Anonymous Function
// ------------------------------------
// Function without a name, usually used inside expressions
const greet = function (name) {
    return "Hello " + name;
};
console.log("Anonymous Function:", greet("Alice"));


// ------------------------------------
// 5. Nested Function Expression
// ------------------------------------
// Function inside another function
function outer() {
    console.log("Outer function running...");

    function inner() {
        console.log("Inner function running...");
    }

    inner(); // call inner function inside outer
}
outer();


// ------------------------------------
// 6. Parameters vs Arguments
// ------------------------------------
// Parameters = placeholders (a, b)
// Arguments = actual values (10, 20)
function multiply(a, b) {
    return a * b;
}
console.log("Multiply:", multiply(10, 20));
// Here a,b = parameters, 10,20 = arguments


// ------------------------------------
// 7. First-Class Functions
// ------------------------------------
// In JS, functions are treated as values
// - Can be assigned to variables
// - Can be passed as arguments
// - Can be returned from another function

function sayWelcome() {
    return "Welcome!";
}

// assigning to variable
const welcomeMsg = sayWelcome;
console.log("Assigned Function:", welcomeMsg());

// passing function as argument
function runFunction(fn) {
    console.log("Running passed function:", fn());
}
runFunction(sayWelcome);

// returning function
function getFunction() {
    return function () {
        return "Returned Function!";
    };
}
console.log(getFunction()());


// ------------------------------------
// 8. Arrow Functions
// ------------------------------------
// Shorter syntax for writing functions
const arrowHello = (name) => {
    return "Hello " + name;
};
console.log("Arrow Function:", arrowHello("Bob"));

// If only one line, can be shorter
const square = n => n * n;
console.log("Arrow One-Liner:", square(5));



var x = 1;
a();
b();
console.log(x);


function a() {
    var x = 10;
    console.log(x);
}
function b() {
    var x = 100;
    console.log(x);
}