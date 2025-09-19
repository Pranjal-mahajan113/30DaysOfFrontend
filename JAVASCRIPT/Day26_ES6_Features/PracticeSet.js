let map = new Map();

//set values 
map.set("name" , "Pranjal");
map.set(1,"One");
 
console.log(map.get("name"));
console.log(map.get(1));

// ==================2.=========================
let mymap = new Map();

// set values
mymap.set("name", "Siya");
mymap.set(2, "two");
mymap.set(true, "yes");

// get values
console.log(mymap.get("name")); //
console.log(mymap.get(2));      // 

// check existence
console.log(mymap.has(true));   // true

// size
console.log(mymap.size);        // 3

// loop
for (let [key, value] of mymap) {
  console.log(key, value);
}


// =====================WeakSet===========================================
// Similar to Set, but values must be objects only.

// Objects are held weakly (garbage collected when not used).

// No size property, no iteration

let weakSet = new WeakSet();

let user = { name: "Pranjal" };
weakSet.add(user);

console.log(weakSet.has(user)); // true

user = null;
// object removed automatically
