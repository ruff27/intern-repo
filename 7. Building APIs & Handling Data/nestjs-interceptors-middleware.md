#39

📌 Using Interceptors & Middleware in NestJS
🎯 Goal
Learn how to use interceptors and middleware in NestJS to modify requests, responses, and handle cross-cutting concerns.

✅ Why is this important?
Focus Bear’s backend uses interceptors and middleware for tasks like logging, response transformation, and request preprocessing. Understanding these concepts will help you write cleaner and more efficient backend logic.

✅ Tasks

Research the difference between interceptors and middleware in NestJS
Explore built-in interceptors like ClassSerializerInterceptor
Implement a simple logging interceptor to log request and response data
Create a middleware function and apply it globally or to specific routes

<img width="940" height="501" alt="image" src="https://github.com/user-attachments/assets/fc2d504a-70e9-476c-b10c-2c47bee2a400" />
<img width="940" height="694" alt="image" src="https://github.com/user-attachments/assets/503ac3db-d677-48a0-aeff-bca2faceb073" />
<img width="940" height="568" alt="image" src="https://github.com/user-attachments/assets/25f6d755-27bb-4695-919d-840de9cee720" />
<img width="940" height="460" alt="image" src="https://github.com/user-attachments/assets/ee91fc6b-e6a0-4398-8af4-c7b39d9637a3" />
<img width="940" height="381" alt="image" src="https://github.com/user-attachments/assets/7fded03f-44c8-47fc-9824-e00bac5a7b16" />


✅ Reflection (nestjs-interceptors-middleware.md)
What is the difference between an interceptor and middleware in NestJS?
Middleware runs before a request reaches the controller and is mainly used for handling incoming requests, such as logging or preprocessing request data. Interceptors run around the controller and service execution, allowing logic to be executed both before and after a request is handled, including modifying the response.

When would you use an interceptor instead of middleware?
An interceptor is used when you need access to the response or want to run logic after the controller has processed the request. Interceptors are useful for tasks like logging execution time, transforming responses, or handling errors.

How does LoggerErrorInterceptor help?
LoggerErrorInterceptor helps by catching and logging errors in a centralized way. This makes debugging easier and keeps error-handling logic separate from controllers and services.
