// ===============================
// Day 22 - Prototypes & Inheritance
// ===============================

// 👉 Every JS object has a prototype (hidden property: [[Prototype]])
// 👉 Prototypal Inheritance allows one object to access properties/methods of another

function Animal(name) {
  this.name = name;
}

// Add method in Animal's prototype
Animal.prototype.speak = function() {
  return `${this.name} makes a noise.`;
};

const dog = new Animal("Dog");
console.log(dog.speak()); // "Dog makes a noise."

// ===============================
// Inheritance Example
// ===============================
function Dog(name, breed) {
  Animal.call(this, name); // inherit properties
  this.breed = breed;
}

// Inherit Animal prototype methods
Dog.prototype = Object.create(Animal.prototype);  
Dog.prototype.constructor = Dog; // fix constructor ref

// Override speak
Dog.prototype.speak = function() {
  return `${this.name} barks.`;
};

const lab = new Dog("Max", "Labrador");
console.log(lab.speak()); // "Max barks."


// ===============================
// Prototype Chain Walkthrough
// ===============================

// Step 1: lab object created → { name: "Max", breed: "Labrador" }
// Hidden property: lab.[[Prototype]] → Dog.prototype

// Step 2: Dog.prototype has speak(), constructor, and [[Prototype]] → Animal.prototype

// Step 3: Animal.prototype has speak() and [[Prototype]] → Object.prototype

// Step 4: Object.prototype has common methods like toString(), hasOwnProperty()
// Its [[Prototype]] → null (end of chain)

console.log(lab.__proto__ === Dog.prototype);          // true
console.log(Dog.prototype.__proto__ === Animal.prototype); // true
console.log(Animal.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__);              // null


// ===============================
// Interview Practice
// ===============================

/**
 Q1: What is the prototype chain in JS?
 ✅ It is the chain of objects formed by the [[Prototype]] links. 
 When we access a property/method on an object:
    - JS first checks the object itself.
    - If not found, it looks at the object's prototype.
    - Keeps climbing up until Object.prototype → null.
    This chain of lookups is called the "Prototype Chain".

 Q2: Difference between prototypal inheritance and classical inheritance?
 ✅ Classical Inheritance (Java, C++):
    - Classes define blueprint, objects are instances.
    - Inheritance happens at class-level before objects are created.

 ✅ Prototypal Inheritance (JavaScript):
    - Objects inherit directly from other objects via [[Prototype]].
    - More flexible (you can link, change prototypes at runtime).
    - No strict "class" before ES6, but even ES6 classes use prototypes internally.

 Q3: How does Object.create() work internally?
 ✅ Object.create(proto) creates a new empty object with its [[Prototype]] set to proto.
    Example:
      const obj = Object.create(Animal.prototype);
    Internally, it’s like:
      function create(proto) {
        function F() {}
        F.prototype = proto;
        return new F();
      }
    So obj.__proto__ === proto.
*/
