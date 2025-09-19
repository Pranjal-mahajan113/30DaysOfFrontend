// =============Q1.===========================================================================

// Normal way
let numbers = [12, 3, 5];
console.log(numbers[0]);

// Destructuring way
let [x, y, z] = numbers;

console.log(x); // 12
console.log(y); // 3
console.log(z); // 5

// ===============Q2.====Object Destructuring=====================================================================

// Normal way
const student = {
  name: "Pranjal",
  age: 22,
};
let name1 = student.name;
let ag1 = student.age;
console.log("Normal Way :-  ", name1, ag1);
//  Destructuring way
let { name, age } = student;
console.log(" Destructuring way :- ", name);
console.log(" Destructuring way :- ", age);

// =====================can also rename variables:================================
let { name: fullname, age: years } = student;
console.log("Rename Variables : - ", fullname);
console.log("Rename Variables : - ", years);

//====================3. Nested Destructuring==========================================
const user = {
  id: 101,
  profile: {
    username: "Vaishanvi",
    email: "v@gmail.com",
  }
};
let {id,profile:{username,email}} = user;
console.log(id);
console.log(username);
console.log(email);

// ===================4.Swapping Variables===========================
let a = 1, b = 2;
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1


//  ======================WeakMap=============================
// Similar to Map, but keys must be objects only (not strings, numbers, etc.).

// Keys are held weakly → if the object is garbage collected, it’s automatically removed from the WeakMap.
let weakMap = new WeakMap();

let obj = { id: 1 };
weakMap.set(obj, "Data about object");

console.log(weakMap.get(obj)); // Data about object

obj = null; 
// Now obj is garbage collected → entry removed automatically
