
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
