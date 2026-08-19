// =============================================================================
// JavaScript Practice Sandbox
// Open index.html in your browser, press F12 (or Cmd+Option+I), and view Console
// =============================================================================

// 1. Variables & Data Types
const appName = "JS Practice Hub";
let clickCount = 0;
const isLive = true;
const techStack = ["HTML", "CSS", "JavaScript"];
const userProfile = {
  name: "Alex",
  level: "Beginner",
  score: 100,
};

console.log(`Welcome to ${appName}!`);
console.log("Current user:", userProfile.name);

// 2. Functions & Logic
function calculateDiscount(price, discountPercent = 10) {
  if (price <= 0) {
    return "Invalid price";
  }
  const discountAmount = (price * discountPercent) / 100;
  return price - discountAmount;
}

const discountedTotal = calculateDiscount(250, 20);
console.log("Discounted Total ($250 with 20% off):", discountedTotal);

// 3. Array Operations (Modern ES6 methods)
console.log("\n--- Array Iteration & Methods ---");

// .map() - transform each item
const upperStack = techStack.map((tech) => tech.toUpperCase());
console.log("Uppercased Technologies:", upperStack);

// .filter() - select specific items
const numbers = [12, 45, 67, 89, 23, 90, 4, 18];
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// .reduce() - calculate single value
const totalSum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", totalSum);

// 4. DOM Manipulation & Event Handling
// Runs once the HTML structure is fully parsed
document.addEventListener("DOMContentLoaded", () => {
  console.log("\nDOM fully loaded and parsed.");

  const testButton = document.getElementById("action-btn");
  const displayElement = document.getElementById("status-display");

  if (testButton && displayElement) {
    testButton.addEventListener("click", () => {
      clickCount += 1;
      displayElement.textContent = `Button clicked ${clickCount} time(s)!`;
      displayElement.style.color = clickCount % 2 === 0 ? "#2563eb" : "#16a34a";
    });
  }
});

// 5. Asynchronous JavaScript (Async / Await)
async function fetchMockData() {
  console.log("\nFetching demo data from JSONPlaceholder...");
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched Data:", data);
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

// Trigger the async call
fetchMockData();
