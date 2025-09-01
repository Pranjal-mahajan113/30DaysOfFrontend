// ===============================
// Day 21 - Closures 
// ===============================

// Closure = Function that "remembers" variables from its outer scope
// even after outer function is finished.

// 🔹 1. Basic Closure
function outer() {
  let count = 0;

  function inner() {
    count++;
    return count;
  }
  return inner;
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3


// 🔹 2. Practical Use Case: Data privacy
function secretPassword() {
  let password = "12345"; // private

  return {
    getPass: function () {
      return password;
    },
    setPass: function (newPass) {
      password = newPass;
    },
  };
}

const user = secretPassword();
console.log(user.getPass()); // "12345"
user.setPass("abcde");
console.log(user.getPass()); // "abcde"


// 🔹 3. Closure with setTimeout
function delayedMsg(msg, delay) {
  setTimeout(() => {
    console.log("Message:", msg);
  }, delay);
}
delayedMsg("Hello Closures!", 2000);


// 🔹 Interview Q3: Why are closures useful?
// Answer: They provide data encapsulation, help in callbacks,
// event listeners, and functional programming.
