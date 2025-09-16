// 🔥 Fetch API & JSON Handling in JavaScript
// ---------------------------------------------------
// ✅ Definition:
// Fetch API is a modern way to make HTTP requests (GET, POST, etc.) from the browser.
// It returns a Promise that resolves to a Response object.
// To get the actual data, we usually convert it into JSON using response.json().
//
// 📌 Analogy: Imagine sending a letter (request) to a library (server).
// The librarian responds with a sealed package (Response object).
// You must open the package (convert to JSON) to read the actual book (data).
//
// ---------------------------------------------------

console.log(" Fetch API");

// 🌐 Using a public API (JSONPlaceholder → Fake REST API for testing)
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => {
    // Response object → must be converted
    return response.json(); // returns another Promise
  })
  .then((data) => {
    console.log("✅ Data received:", data); // actual usable JSON data
  })
  .catch((error) => {
    console.log("❌ Error occurred:", error);
  });

// 👉 Interview Note:
// - fetch() always returns a Promise
// - Must use .then() or async/await to handle response
// - response.json() also returns a Promise
// - Used for APIs, getting JSON data, submitting forms, etc.
//
// 📌 Real Life Use Cases:
// - Fetching user data from server
// - Submitting login/signup info
// - Displaying weather/news/stock data on a webpage
// - Working with REST APIs
