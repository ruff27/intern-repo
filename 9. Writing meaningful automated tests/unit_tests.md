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

