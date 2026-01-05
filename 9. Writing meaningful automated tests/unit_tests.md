#76
📌 Testing Redux with Jest
🎯 Goal
Learn how to test Redux slices and actions using Jest.

✅ Why is this important?
State management is central to Focus Bear’s functionality. Writing tests for Redux ensures that reducers and actions work as expected.

✅ Tasks

Research how to test Redux reducers and actions in Jest.

Create a simple Redux slice (if not already created).

Write a test that checks if a reducer updates state correctly.

Write a test for an asynchronous Redux action (if applicable).

Run the tests and check that they pass.

Push your test to GitHub.

<img width="940" height="573" alt="image" src="https://github.com/user-attachments/assets/cbe0c80a-dfe6-42ac-abbd-62aca9673508" />
<img width="940" height="607" alt="image" src="https://github.com/user-attachments/assets/75cea2bc-bfe0-47e6-8c16-ea91b228e7b6" />
<img width="940" height="457" alt="image" src="https://github.com/user-attachments/assets/55ded32e-2173-489f-b861-85ae87317be1" />
<img width="940" height="631" alt="image" src="https://github.com/user-attachments/assets/710565c3-8812-4de6-823a-915862e9b7ca" />
<img width="281" height="328" alt="image" src="https://github.com/user-attachments/assets/45cce79a-e097-431e-a676-089301e854bc" />


Reflection (in unit_tests.md):
What was the most challenging part of testing Redux?
The most challenging part of testing Redux is typically handling asynchronous actions (thunks) and correctly mocking external dependencies like API calls. 
- **Mocking**: You need to ensure `axios` or other fetch libraries are mocked so tests don't make real network requests.
- **Async Timing**: Ensuring expectations run only after the async thunk has fully resolved (pending -> fulfilled/rejected) requires understanding JavaScript promises and Jest's `async/await` support.

How do Redux tests differ from React component tests?
There are key differences between testing Redux logic and React components:
1.  **Scope**: 
    - **Redux Tests**: Focus on pure logic and state changes. They are unit tests for functions (reducers) and action creators.
    - **Component Tests**: Focus on UI rendering, user interactions (clicks, typing), and integration with the store.
2.  **Speed**:
    - **Redux Tests**: Very fast because they don't require DOM simulation (JSDOM).
    - **Component Tests**: Slower as they need to mount components and simulate the browser environment.
3.  **Setup**:
    - **Redux Tests**: Simple setup; often just importing the reducer and passing a state object.
    - **Component Tests**: Complex setup; often requires wrapping components in `<Provider store={store}>` and mocking context.


#73

📌 Mocking API Calls in Jest
🎯 Goal
Learn how to mock API calls in Jest to test asynchronous code.

✅ Why is this important?
Focus Bear interacts with APIs for authentication, analytics, and more. Mocking API calls in tests ensures that components behave correctly without making real network requests.

✅ Tasks

Research how to mock API calls in Jest using jest.fn() and jest.mock().

Create a React component that fetches and displays data from an API.

Write a Jest test that mocks the API call and verifies the component’s behavior.

Run the test and check that it passes.

Push your test to GitHub.

<img width="303" height="98" alt="image" src="https://github.com/user-attachments/assets/301a196b-16de-40ea-aea0-0d7e8447d3b3" />

<img width="940" height="648" alt="image" src="https://github.com/user-attachments/assets/23eca32c-b3ed-42f4-a9f2-967d977e630e" />


Reflection (in unit_tests.md):
## Why is it important to mock API calls?
1.  **Speed**: Real network requests are slow. Mocking makes tests run instantly.
2.  **Reliability**: Real APIs can be down, have rate limits, or return data that changes. Mocking ensures consistent test data every time.
3.  **Cost**: Avoids unnecessary usage of paid APIs.
4.  **Safety**: Prevents tests from accidentally modifying real data (e.g., executing a DELETE request).

## Common Pitfalls in Async Testing
1.  **Not waiting for updates**: Asserting on the DOM before the async state update has happened (fix: use `waitFor` or `findBy` queries).
2.  **Unresolved Promises**: Forgetting to `await` the mock resolution or the test assertions, leading to false positives (test passes before assertion runs).
3.  **Mock Leaking**: Not clearing mocks between tests (`jest.clearAllMocks()`), causing tests to interfere with each other.

#57

📌 Introduction to Unit Testing with Jest
🎯 Goal
Learn the basics of unit testing in React using Jest.

✅ Why is this important?
Focus Bear relies on automated testing to ensure the stability of features across updates. Writing unit tests prevents regressions and improves code reliability.

✅ Tasks

Research what Jest is and why unit tests are important.

Set up Jest in your React project (if not already included).

Write a simple test for a utility function (e.g., a function that adds two numbers).

Run the test and check that it passes.

Push your test to GitHub.

<img width="629" height="244" alt="image" src="https://github.com/user-attachments/assets/d7072f89-b789-4c45-a6fb-faeea97725b8" />
<img width="709" height="384" alt="image" src="https://github.com/user-attachments/assets/e62a2d11-0a05-486a-90ee-88c94bd0f7ed" />
<img width="644" height="128" alt="image" src="https://github.com/user-attachments/assets/fa420d9f-bf68-4740-8230-45142c64e7fa" />


# Reflection: Introduction to Unit Testing with Jest

## Why is automated testing important in software development?
Automated testing is crucial for maintaining code quality and ensuring stability as the application grows. It allows developers to:
-   **Catch bugs early**: Identify issues before they reach production.
-   **Refactor with confidence**: Change code knowing that existing functionality is protected by tests.
-   **Document code**: Tests serve as live documentation of how the code is expected to behave.
-   **Save time**: Automated tests run much faster than manual regression testing.

## What did you find challenging when writing your first Jest test?
-   **Setting up the environment**: Ensuring Jest and its dependencies are correctly installed and configured in `package.json`.
-   **Understanding assertions**: Learning the different matchers (like `toBe`, `toEqual`) and when to use them.
-   **File structure**: Deciding where to place test files (co-located vs. `__tests__` folder).


#69

📌 Testing React Components with Jest & React Testing Library
🎯 Goal
Learn how to write unit tests for React components using Jest and React Testing Library.

✅ Why is this important?
Focus Bear has many interactive UI elements, and testing them ensures that components render correctly and behave as expected.

✅ Tasks

Research how React Testing Library works with Jest.

Create a simple React component that displays a message.

Write a test that checks if the component renders correctly.

Write a test that simulates user interaction (e.g., clicking a button).

Run the tests and check that they pass.

Push your test to GitHub.

<img width="940" height="586" alt="image" src="https://github.com/user-attachments/assets/d3a677a8-24c2-4e45-95c4-d826ef72c1e5" />
<img width="940" height="601" alt="image" src="https://github.com/user-attachments/assets/7e1b26f7-746d-4970-b7b1-ad04512b3a74" />
<img width="316" height="384" alt="image" src="https://github.com/user-attachments/assets/8d40bb15-5ef0-4e7b-863e-27eb8cd38db7" />


Reflection (in unit_tests.md):
What are the benefits of using React Testing Library instead of testing implementation details?
## Benefits of React Testing Library (RTL)
-   **User-Centric**: RTL encourages testing how the user interacts with the app (e.g., clicking buttons, reading text) rather than implementation details (e.g., checking internal state).
-   **Refactoring Safety**: Since tests rely on what the user sees, you can change the underlying implementation (like switching from `useState` to `useReducer`) without breaking the tests.
-   **Accessibility**: RTL's queries (like `getByRole`, `getByLabelText`) promote writing accessible code.

## Challenges with User Interaction
-   **Async Updates**: Sometimes user interactions trigger async updates (like API calls). Remembering to use `waitFor` or `findBy` is crucial.
-   **Event Handling**: Simulating complex events (like drag-and-drop or typing) can sometimes require `user-event` library for more realistic behavior than `fireEvent`.


