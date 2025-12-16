#41

📌 Creating REST APIs with NestJS
🎯 Goal
Learn how to build RESTful APIs using NestJS controllers and services.

✅ Why is this important?
Focus Bear’s backend is built with RESTful APIs that interact with the frontend and mobile apps. Understanding how to create, structure, and expose endpoints is essential.

✅ Tasks

Research how REST APIs are structured in NestJS
Create a controller with basic CRUD routes (GET, POST, PUT, DELETE)
Use a service to handle business logic
Test the endpoints using a tool like Postman or cURL

I created a TasksModule with a controller and service
Implemented basic CRUD endpoints (GET, POST, PUT, DELETE)
Tested endpoints using browser and PowerShell (Invoke-RestMethod)
Verified routes were correctly mapped by NestJS

<img width="940" height="731" alt="image" src="https://github.com/user-attachments/assets/b1500372-4719-454d-b3fe-ea94076089e6" />
<img width="940" height="313" alt="image" src="https://github.com/user-attachments/assets/00bf0b7c-7ba4-4bf9-8917-819cb9b2744d" />
<img width="614" height="454" alt="image" src="https://github.com/user-attachments/assets/4936071c-0d5b-410d-8e70-1b9c8562b098" />


✅ Reflection (nestjs-rest-api.md)
What is the role of a controller in NestJS?
A controller is responsible for defining API routes and handling incoming HTTP requests. It receives request data (params, body, headers) and returns responses by calling the appropriate service methods.

How should business logic be separated from the controller?
Business logic should live inside services, not controllers. Controllers should remain thin and only delegate work to services. This keeps the code clean, reusable, and easier to test.

Why is it important to use services instead of handling logic inside controllers?
Using services improves maintainability and scalability. Services allow business logic to be reused across multiple controllers, simplify unit testing, and prevent controllers from becoming large and difficult to manage.

How does NestJS automatically map request methods (GET, POST, etc.) to handlers?
NestJS uses decorators such as @Get(), @Post(), @Put(), and @Delete() on controller methods. These decorators tell NestJS which HTTP method and route should trigger each handler.
