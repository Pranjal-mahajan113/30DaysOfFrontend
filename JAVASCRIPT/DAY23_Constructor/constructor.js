// ===============================
// Day 23 - Constructor Functions vs Classes
// ===============================

// --- Constructor Function ---
// ✅ A constructor function is a normal function
//    that is used with the 'new' keyword to create objects.
function Person(name, age) {
  this.name = name; // property
  this.age = age;
}

// Methods are added to the constructor’s prototype
Person.prototype.sayHi = function () {
  return `Hi, I am ${this.name}`;
};

const p1 = new Person("Alice", 22);
console.log(p1.sayHi()); // "Hi, I am Alice"


// --- ES6 Class ---
// ✅ Classes are a cleaner, modern syntax introduced in ES6.
//    Internally, they still use prototypes under the hood.
class Student {
  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
  }

  study() {
    return `${this.name} is studying in grade ${this.grade}`;
  }
}

const s1 = new Student("Bob", 10);
console.log(s1.study()); // "Bob is studying in grade 10"


// ===============================
// Interview Practice
// ===============================

/**
 Q1: Difference between constructor function and class in JS?

 ✅ Constructor Function:
    - Defined using a normal function.
    - Use 'new' keyword to create objects.
    - Methods are added manually to the function’s prototype.
    - Older way (before ES6).

 ✅ Class:
    - Introduced in ES6.
    - Provides cleaner, more readable syntax.
    - Methods are automatically added to the prototype.
    - Supports extra features like 'extends' for inheritance.

 -------------------------------------------------------

 Q2: Why are classes considered syntactic sugar over prototypes?

 ✅ Because under the hood, classes still use prototype-based inheritance.
    - When you define methods in a class, JS adds them to ClassName.prototype.
    - So, classes don’t add a *new feature*, they just provide a simpler,
      more structured syntax on top of prototypes.

 Example:
   class A {}
   is almost same as
   function A() {}
   A.prototype.method = function() {}

 -------------------------------------------------------

 Q3: Can you use 'extends' in classes? Show example.

 ✅ Yes, classes support inheritance with 'extends'.
    - A child class can inherit properties & methods from a parent class.

 Example:
   class Animal {
     constructor(name) {
       this.name = name;
     }
     speak() {
       return `${this.name} makes a sound.`;
     }
   }

   class Dog extends Animal {
     speak() {
       return `${this.name} barks.`;
     }
   }

   const d = new Dog("Max");
   console.log(d.speak()); // "Max barks."
*/
