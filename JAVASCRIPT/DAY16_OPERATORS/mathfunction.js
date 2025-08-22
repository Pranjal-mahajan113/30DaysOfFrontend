// ✅ Math Rounding Functions
console.log(Math.round(13.444)); // 13 → Rounds to nearest integer
console.log(Math.round(10.5));   // 11 → .5 and above goes up
console.log(Math.ceil(10.5));    // 11 → Always rounds UP
console.log(Math.floor(10.8));   // 10 → Always rounds DOWN
console.log(Math.trunc(18.98));  // 18 → Removes decimal part, no rounding

// ✅ Math Power & Roots
console.log(Math.pow(2, 5));     // 32 → 2 × 2 × 2 × 2 × 2
console.log(Math.sqrt(121));     // 11 → Square root of 121
console.log(Math.cbrt(27));      // 3 → Cube root of 27

// ✅ Absolute Value
console.log(Math.abs(-23.90));   // 23.9 → Removes minus sign

// ✅ Min & Max
console.log(Math.max(12, 13, 14)); // 14 → Largest number
console.log(Math.min(12, 13, 14)); // 12 → Smallest number

// ✅ Random Numbers
console.log(Math.random()); // Random decimal between 0 and 1
console.log(Math.trunc((Math.random() * 9000) + 1000));
// Random 4-digit number (1000–9999)

// ✅ Number Formatting
let a = 89.09835;
console.log(a.toFixed(2)); // "89.10" → Rounded to 2 decimal places (string)

// ✅ Area / Perimeter Example
let length = 20;
let breadth = 30;
console.log(2 * (length + breadth)); // 100 → Perimeter of rectangle
