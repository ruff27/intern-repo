#62
📌 Setting Up a NestJS Project
🎯 Goal
Set up a NestJS development environment, understand its project structure, and run a basic application.

✅ Why is this important?
Before contributing to Focus Bear’s backend, you need to be comfortable with NestJS’s project setup and know how to navigate its structure.

✅ Tasks

Research the steps to set up a new NestJS project

Install required dependencies and initialize a NestJS project

Explore the default project structure (modules, controllers, services, main.ts)

Run the development server and test a simple endpoint

I created a nestjs project on my local machine.

<img width="677" height="247" alt="image" src="https://github.com/user-attachments/assets/28a7de0c-6cf8-453f-bd1d-19d4795e6f30" />

<img width="940" height="667" alt="image" src="https://github.com/user-attachments/assets/3f90a46e-dfb0-44db-a663-8df3a59b37d8" />

<img width="578" height="284" alt="image" src="https://github.com/user-attachments/assets/6dbcb39f-8cc4-4af3-9add-2aa94900aea0" />

<img width="513" height="319" alt="image" src="https://github.com/user-attachments/assets/00240771-32f4-48c7-91ac-fad70158685d" />


✅ Reflection (nestjs-setup.md)
What files are included in a default NestJS project?
<img width="252" height="292" alt="image" src="https://github.com/user-attachments/assets/2ddcc8eb-7c8c-451e-8e22-7a657a936d77" />

How does main.ts bootstrap a NestJS application?

Calls NestFactory.create(AppModule)
Starts an HTTP server
Defines global settings (pipes, filters, etc.)

What is the role of AppModule in the project?

It is the root module of the application
Registers controllers and providers
Organizes the app into features
Can import other modules

How does NestJS structure help with scalability?

Modular design makes features isolated
DI makes components reusable
Teams can work on modules without conflict
Easy to split code into microservices later
Encourages clean architecture
