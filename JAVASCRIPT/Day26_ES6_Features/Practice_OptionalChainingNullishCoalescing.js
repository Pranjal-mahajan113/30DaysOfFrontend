// ==========================1. Optional Chaining (?.)======================================
// normal way
const user = { profile: { name: "Pranjal" } };

// If profile is missing → error
//console.log(user.profile.name); // "Pranjal"
// console.log(user.address.city); //  Error: Cannot read property 'city'

const user2 = {
  id: 101,
  profile: {
    name: "Pranjal",
    contact: {
      email: "pranjal@gmail.com"
    }
  }
};

// Accessing safely
console.log(user2?.profile?.contact?.email); // ✅ "pranjal@gmail.com"

// Suppose contact doesn’t exist
delete user2.profile.contact;
console.log(user2?.profile?.contact?.email); 
// ✅ undefined (no error, app doesn’t crash)





//=============== With optional chaining (?.):==================
console.log(user?.profile?.name);
console.log(user?.address?.city);

// ======================== Nullish Coalescing (??)================
let userName = null;
console.log(userName ?? "Guest"); // "Guest"

let age = 0;
console.log(age ?? 18); // 0 (✅ because 0 is not null/undefined)

// =============Real Example ======================================================

const apiResponse = {
  id: 1,
  name: null,
  age: 0
};

// Without nullish coalescing
console.log(apiResponse.name || "Guest"); // "Guest" ✅
console.log(apiResponse.age || 18);       // 18 ❌ (age=0 treated as false)

// With nullish coalescing
console.log(apiResponse.name ?? "Guest"); // "Guest" ✅
console.log(apiResponse.age ?? 18);       // 0 ✅ (keeps valid 0)

