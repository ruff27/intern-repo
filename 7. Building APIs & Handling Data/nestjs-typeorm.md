#44

📌 Connecting to PostgreSQL with TypeORM in NestJS
🎯 Goal
Learn how to connect a NestJS application to a PostgreSQL database using TypeORM.

✅ Why is this important?
Focus Bear’s backend uses PostgreSQL with TypeORM to manage relational data efficiently. Understanding how to interact with the database is essential for working with user data, habits, and app settings.

✅ Tasks

Research how TypeORM integrates with NestJS (@nestjs/typeorm)
Set up a database connection in NestJS
Create an entity and repository to interact with PostgreSQL
Perform basic database operations (CRUD) using TypeORM

<img width="940" height="444" alt="image" src="https://github.com/user-attachments/assets/4d89652b-d7c3-4ce9-aa01-c22af90ceca6" />
<img width="940" height="538" alt="image" src="https://github.com/user-attachments/assets/0f00486d-2a88-4a1f-96a7-8c2ef65f401c" />
<img width="940" height="576" alt="image" src="https://github.com/user-attachments/assets/acdefcec-d0d7-45d8-a0c3-dddae5226847" />
<img width="740" height="515" alt="image" src="https://github.com/user-attachments/assets/838e946a-4045-41ca-9dd7-ef880807ad64" />
<img width="1092" height="607" alt="image" src="https://github.com/user-attachments/assets/25467b73-abd9-4d94-83fb-0eb8cb3bd90c" />


✅ Reflection (nestjs-typeorm.md)
How does @nestjs/typeorm simplify database interactions?
@nestjs/typeorm integrates TypeORM with NestJS modules and dependency injection. It allows developers to configure the database once and easily inject repositories into services, reducing boilerplate code and making database operations more structured.

What is the difference between an entity and a repository in TypeORM?
An entity represents a database table and defines its structure using decorators. A repository provides methods to interact with that table, such as creating, reading, updating, and deleting records.

How does TypeORM handle migrations in a NestJS project?
TypeORM uses migrations to manage changes to the database schema over time. Migrations allow developers to apply schema updates in a controlled way without losing existing data.

What are the advantages of using PostgreSQL over other databases in a NestJS app?
PostgreSQL is reliable, scalable, and supports strong data integrity, relationships, and complex queries. These features make it well suited for backend applications built with NestJS.

