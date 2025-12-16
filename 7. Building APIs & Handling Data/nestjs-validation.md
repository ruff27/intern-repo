#42

📌 Validating Requests with Pipes in NestJS
🎯 Goal
Understand how pipes work in NestJS and how to use them for data validation and transformation.

✅ Why is this important?
Focus Bear’s backend relies on request validation to ensure data consistency and security. NestJS pipes help validate and transform incoming requests before processing them.

✅ Tasks

Research what pipes are in NestJS and how they work
Explore built-in pipes like ValidationPipe and ParseIntPipe
Create a custom DTO (Data Transfer Object) and apply class-validator decorators
Use a global validation pipe to enforce DTO validation across the app

<img width="940" height="498" alt="image" src="https://github.com/user-attachments/assets/66ea5520-c25d-4151-8293-0f2ec3290ca2" />
<img width="940" height="561" alt="image" src="https://github.com/user-attachments/assets/c1000366-2c10-41c4-a869-73832efd0610" />
<img width="940" height="431" alt="image" src="https://github.com/user-attachments/assets/b7e69c5c-d42d-43cf-b576-590a789b6a8e" />


✅ Reflection (nestjs-validation.md)
What is the purpose of pipes in NestJS?
Pipes in NestJS are used to process incoming request data before it reaches the controller. They can transform data into the required format or validate it against defined rules, helping ensure only valid data is handled by the application.

How does ValidationPipe improve API security and data integrity?
ValidationPipe automatically validates incoming requests against DTO rules and rejects invalid data before it reaches the controller or service. This prevents malformed or unexpected data from entering the system, reducing bugs, protecting business logic, and improving overall API security.

What is the difference between built-in and custom pipes?
Built-in pipes provide common functionality such as validation and type transformation (e.g., ValidationPipe and ParseIntPipe). Custom pipes are created by developers to handle application-specific validation or transformation logic that is not covered by built-in pipes.

How do decorators like @IsString() and @IsNumber() work with DTOs?
Decorators like @IsString() and @IsNumber() define validation rules on DTO properties. When a request is received, ValidationPipe checks the incoming data against these decorators and throws an error if the data does not meet the specified constraints.
