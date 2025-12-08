#74
Research the importance of unit testing in software development.

Choose a testing framework (e.g., Jest for JavaScript, PyTest for Python).
For this task, I used Jest as my testing framework. Jest is widely used in JavaScript projects because it is simple to set up and supports fast test execution.

I used "npm test" command to run the test

Write a few unit tests for a function in your test repo.

<img width="668" height="291" alt="image" src="https://github.com/user-attachments/assets/65ca6043-2acf-4556-a61e-771fff6672de" />


<img width="940" height="476" alt="image" src="https://github.com/user-attachments/assets/020fa465-a194-48e5-81df-d34d6c2912bb" />

I placed the test under-- "4. Clean code/tests/sum.test.js" and the code sum.js is under "4. Clean code/sum.js"

Write reflections in clean_code.md:
How do unit tests help keep code clean?
Unit tests help keep the code clean by directing developer to code that are predictable, modular and easy to understand. While running a test, it is crucial to clearly define what each function is supposed to do.
It also acts as a safety net helping developers identify mistakes when a test is failed. This encourages cleaner architecture.

What issues did you find while testing?
While testing, I discovered a data type issue.
The test: "expect(sum("a", 3)).toBeNaN();" initially failed because JavaScript attempted to perform a string + number operation, resulting in unexpected behaviour.

This highlighted why writing tests is useful as it exposes hidden issues early.


#72


Research strategies for handling errors and edge cases in code (include Guard Clauses).

Find an existing function that doesn’t properly handle errors or invalid inputs.
The original function in sum.js:

"function sum(a, b) {
  return a + b;
}

module.exports = sum;"

It doesn’t check if the inputs are numbers
"a" + 3 results in "a3" — not an error, just wrong behaviour
undefined + 5 results in NaN
Negative or missing values are not handled
The function silently accepts invalid input

Refactor the function to improve error handling.
function sum(a, b) {
  // Guard clauses for invalid inputs
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Both inputs must be valid numbers.");
  }

  return a + b;
}

module.exports = sum;

Write reflections in clean_code.md:
What was the issue with the original code?

The original sum() function did not validate input types.

"a" + 3 → "a3"
undefined + 5 → NaN
true + 1 → 2 (unexpected)

Because no guard clauses existed, any invalid input produced silent failures, which can lead to debugging issues later.

How does handling errors improve reliability?
Ensures the function behaves consistently
Prevents silent failures such as "a3" or NaN
Makes debugging easier thanks to clear error messages
Protects other parts of the system from unexpected results
Encourages writing safe, predictable, and clean code

#52

📌 Commenting & Documentation
🎯 Goal
Learn when and how to write helpful comments and documentation.

✅ Tasks

Research best practices for writing comments and documentation.

Find an example of poorly commented code and rewrite the comments to be more useful.
Poorly commented code:
// get first
function g(a) {
  // check if array exists
  if (a.length > 0) {
    // return first
    return a[0]; // return first item
  } else {
    // return null
    return null; // nothing
  }
}


Rewritten comments
/**
 * Safely returns the first item of an array.
 * Used when input data might be empty or missing.
 *
 * @param {Array} items - The array to read from
 * @returns {*} The first element, or null if the array is empty
 */
function getFirstItem(items) {
  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  return items[0];
}

module.exports = getFirstItem;


Write reflections in clean_code.md:
When should you add comments?
Add comments when:
The code involves non-obvious logic
You want to explain why something is done
A business rule needs explanation
It’s a utility function used across the project
You want to document parameters using JSDoc

When should you avoid comments and instead improve the code?
Avoid comments when:
The comment explains something obvious
(e.g., // return true)
The issue is actually poor variable names
The function is too long or confusing. Refactor instead
Code can be made readable with: better naming, smaller functions, removing nested conditions

#53

📌 Refactoring Code for Simplicity
🎯 Goal
Learn how to simplify complex or overly engineered code without losing functionality.

✅ Tasks

Research common refactoring techniques.
Some basic refactoring techniques include:
Renaming variables/functions to make meaning clear
Removing unnecessary code
Simplifying conditionals
Using guard clauses
Breaking long code into smaller pieces
Replacing manual logic with built-in methods

Find an example of overly complicated code in an existing project (or write your own).
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}


Refactor it to make it simpler and more readable.
/**
 * Checks if a number is even.
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
  return num % 2 === 0; // simplified logic
}

module.exports = isEven;


Write reflections in clean_code.md:
What made the original code complex?
The original code was more complicated than needed because:
It used an entire if/else block just to return a boolean
It repeated the same logic twice
It made a very simple idea look long and heavy

How did refactoring improve it?
Refactoring improved the function by:
Reducing it to one clean expression
Making the code shorter and easier to understand
Removing unnecessary branching
Clarifying intention with a simple one-line return

#64

📌 Avoiding Code Duplication
🎯 Goal
Understand how to identify and eliminate unnecessary duplication in code.

✅ Tasks

Research the "Don't Repeat Yourself" (DRY) principle.

Find a section of code in your test repo with unnecessary repetition.
From 
"4. Clean code/calculatePrice.js"
function finalPriceForStudent(price) {
  const discount = price * 0.1;
  return price - discount;
}

function finalPriceForMember(price) {
  const discount = price * 0.1;
  return price - discount;
}


Refactor the code to eliminate duplication.
Refactored code:
function applyDiscount(price) {
  return price - price * 0.1;
}

function finalPriceForStudent(price) {
  return applyDiscount(price);
}

function finalPriceForMember(price) {
  return applyDiscount(price);
}

module.exports = { finalPriceForStudent, finalPriceForMember };


Write reflections in clean_code.md:
What were the issues with duplicated code?
The discount calculation was repeated in multiple functions
If the discount percentage changed, each function needed updating
Easy to accidentally update one function and forget the other
Duplicated code made the file longer and harder to maintain

How did refactoring improve maintainability?
All discount logic is now in one reusable function
Only one place to update when rules change
Fewer lines of code
Clearer structure and less chance of bugs
Functions now clearly show intention instead of repeating logic

Commit and push your changes to GitHub.
🚀 Next Steps
Move on to Refactoring Code for Simplicity.

#66

📌 Writing Small, Focused Functions
🎯 Goal
Learn how to break down large functions into smaller, more maintainable units.

✅ Tasks

Research best practices for writing small, single-purpose functions.

Find an example of a long, complex function in an existing codebase (or write your own).
Check "4. Clean code/processUser.js" file or click the commit made using the issue number

Refactor it into multiple smaller functions with clear responsibilities.
function validateName(name) {
  if (!name || typeof name !== "string") {
    throw new Error("Invalid name");
  }
}

function validateAge(age) {
  if (typeof age !== "number" || age < 0) {
    throw new Error("Invalid age");
  }
}

function formatName(name) {
  return name.trim().toUpperCase();
}

function getBirthYear(age) {
  return new Date().getFullYear() - age;
}

function createMessage(name, birthYear) {
  return "User ${name} was born in ${birthYear}.";
}

function processUser(name, age) {
  validateName(name);
  validateAge(age);

  const formattedName = formatName(name);
  const birthYear = getBirthYear(age);

  return createMessage(formattedName, birthYear);
}

module.exports = processUser;


Write reflections in clean_code.md:
Why is breaking down functions beneficial?
Each function becomes easier to understand
Bugs are easier to isolate
Code can be reused elsewhere
Functions become easier to test individually
The intention of each piece becomes clearer
Makes future updates safer and less risky

How did refactoring improve the structure of the code?
Separating validation, formatting, calculations, and output into their own functions
Making the main logic (processUser) shorter and cleaner
Making the code more modular and organised
Reducing complexity and noise
Allowing each function to be tested individually
Making the code easier for another developer to understand


#55


📌 Naming Variables & Functions
🎯 Goal
Learn how to choose clear and meaningful names for variables and functions.

✅ Tasks

Research best practices for naming variables and functions.

Find examples of unclear variable names in an existing codebase (or write your own).
function calc(a, b) {
  let x = a * 0.15;
  let y = b - x;
  return y;
}

let z = calc(200, 500);
console.log(z);


Refactor the code by renaming variables/functions for better clarity.
function calculateDiscountedTotal(price, baseAmount) {
  const discount = price * 0.15;
  const finalAmount = baseAmount - discount;
  return finalAmount;
}

const customerTotal = calculateDiscountedTotal(200, 500);
console.log(customerTotal);


Write reflections in clean_code.md:
What makes a good variable or function name?
Clearly describes its purpose.
Follows consistent naming conventions.
Uses meaningful terminology related to the domain.
Is concise but specific.
Uses verbs for functions and nouns for variables.

What issues can arise from poorly named variables?
Misunderstanding of the code's intention.
Increased time spent debugging or onboarding.
Higher likelihood of bugs due to incorrect assumptions.
Difficulty extending or maintaining the codebase.
Frustration among teammates and reviewers.

How did refactoring improve code readability?
Made the function’s purpose immediately obvious.
Allowed future developers (including myself) to understand the logic faster.
Reduced cognitive load since the names explain the values.
Enabled easier debugging because each step now has a meaningful label.

#56

📌 Understanding Clean Code Principles
🎯 Goal
Understand the core principles of clean code and why they matter in real-world development.

✅ Tasks

Research and summarize the following clean code principles in clean_code.md:
Simplicity – Keep code as simple as possible.
Write the simplest code that solves the problem. Avoid unnecessary complexity, extra layers, or over-engineering.

Readability – Code should be easy to understand.
Code should be easy to understand at a glance. Use clear names, simple logic, and a clean structure so anyone can follow it.

Maintainability – Future developers (including you!) should be able to work with the code easily.
Future developers (including you) should be able to update or fix the code without confusion. Keep functions small, avoid duplication, and separate responsibilities.

Consistency – Follow style guides and project conventions.
Use the same coding style, naming conventions, formatting, and project rules everywhere. Consistency reduces mental load and makes the codebase predictable.

Efficiency – Write performant, optimized code without premature over-engineering.
Write code that performs well, but don’t optimize too early. Focus on clarity first, then improve performance only when necessary.

Find an example of messy code online (or write one yourself) and describe why it's difficult to read.
function x(a,b){
  let t=a*0.1;
  if(b>100){
    t=t+5;
  }
  return b-t;
}

let z=x(20,150);
console.log(z);


In this code, function name x means nothing. Variables a, b, t, z are unclear. No explanation of what the calculation represents. Logic is hidden and confusing

Rewrite the code in a cleaner, more structured way.

function calculateFinalPrice(discountRate, originalPrice) {
  let discount = originalPrice * discountRate;

  if (originalPrice > 100) {
    discount += 5; // extra discount
  }

  return originalPrice - discount;
}

const finalPrice = calculateFinalPrice(0.1, 150);
console.log(finalPrice);

This block of code has:
Clear function name (calculateFinalPrice)

Descriptive variables (discountRate, originalPrice, discount)

Logic is easy to understand

Code follows consistent style and structure



