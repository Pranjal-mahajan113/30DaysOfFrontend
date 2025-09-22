// 🔥 Regular Expressions (Regex)
// Used to search, match, or replace text patterns.

const text = "Contact me at pranjal123@example.com or call 98765-43210";

// 👉 Test for an email pattern
const emailPattern = /\w+@\w+\.\w+/;
console.log("Email found?", emailPattern.test(text)); // true

// 👉 Extract phone number
const phonePattern = /\d{5}-\d{5}/;
console.log("Phone Match:", text.match(phonePattern)[0]); // 98765-43210

// 👉 Replace numbers
console.log("Hidden:", text.replace(/\d/g, "*")); // Masks all digits


// . → any character, * → 0+ times, + → 1+ times, \d → digits, \w → alphanumeric
// Useful for form validation, search features, parsing logs.

// ⚡ Real Life Analogy:
// Regex is like a powerful magnifying glass 🔍
// to quickly find or edit specific text patterns in huge data.
