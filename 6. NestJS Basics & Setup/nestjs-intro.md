#77
📌 What is NestJS? (Framework Overview)
🎯 Goal
Understand the NestJS framework, how it differs from Express.js, and why it is used in backend development.

✅ Why is this important?
Focus Bear’s backend is built with NestJS, a framework that provides scalability, modularity, and maintainability. Understanding its core principles will help you contribute effectively.

✅ Tasks

Research what NestJS is and how it differs from Express.js

Explore NestJS’s modular architecture (Modules, Controllers, Services)

Understand why dependency injection is a key concept in NestJS

Find out how decorators (@Controller(), @Injectable()) work in NestJS
✅ Reflection (nestjs-intro.md)
What are the key differences between NestJS and Express.js?

NestJS is opinionated; Express is minimal
NestJS uses modules; Express does not enforce structure
NestJS has built-in TypeScript support; Express requires manual setup
NestJS uses dependency injection; Express does not
NestJS is more scalable for large teams

Why does NestJS use decorators extensively?

Decorators add metadata to classes and methods
They allow NestJS to understand routing, dependency injection, modules, etc.
Makes code cleaner and more readable
Similar to Angular patterns

How does NestJS handle dependency injection?

Services are marked with @Injectable()
NestJS creates one instance of the service automatically
NestJS injects it into controllers or other services via the constructor
Promotes modular and testable design

What benefits does modular architecture provide in a large-scale app?

Each feature stays isolated (AuthModule, UserModule, etc.)
Easier to test
Easier to scale and maintain
Teams can work in parallel
Code is more organized and less coupled
