#63

📌 Dependency Injection in NestJS
🎯 Goal
Understand how dependency injection (DI) works in NestJS and why it is fundamental to the framework.

✅ Why is this important?
NestJS heavily relies on dependency injection to manage services efficiently. Focus Bear’s backend uses DI to keep the codebase modular, testable, and maintainable.

✅ Tasks

Research how dependency injection works in NestJS
NestJS uses a built-in dependency injection (DI) container that automatically creates and supplies class instances where needed. When a class lists its dependencies in the constructor, NestJS resolves them based on metadata and module configuration, ensuring each component receives the correct service instance.

Understand the role of providers and the @Injectable() decorator
Providers are classes that contain reusable logic, such as services or repositories. The @Injectable() decorator marks these classes as eligible for DI so NestJS can manage their lifecycle and inject them into other classes when requested.

Explore how services are injected into controllers
Services are injected into controllers through constructor injection. When a controller includes a service in its constructor, NestJS automatically provides an instance of that service as long as it is listed as a provider in the module.

For example: constructor(private readonly exampleService: ExampleService) {}

Investigate different provider scopes (SINGLETON, REQUEST, TRANSIENT)

Singleton: Default; one shared instance for the entire app.
Request: A new instance is created for each incoming HTTP request.
Transient: A new instance is created every time the provider is injected.



✅ Reflection (nestjs-dependency-injection.md)
How does dependency injection improve maintainability?
Dependency injection improves maintainability by reducing tight coupling between classes. Components don’t need to manually create or manage their dependencies, making code easier to update, test, and reuse. This leads to cleaner architecture and fewer side effects when changes are introduced.

What is the purpose of the @Injectable() decorator?
The @Injectable() decorator tells NestJS that a class is a provider and should be managed by the DI container. It enables NestJS to instantiate the class automatically and inject it wherever it is required within the application.

What are the different types of provider scopes, and when would you use each?
Singleton: Used for shared services that maintain global state or configuration.
Request: Useful for request-specific logic where each request needs an isolated instance.
Transient: Best for lightweight, stateless operations where a new instance is needed each time it's injected.

How does NestJS automatically resolve dependencies?
NestJS resolves dependencies using metadata collected from TypeScript and decorators. When a class requests a dependency through its constructor, the DI container searches the module for a matching provider and injects it automatically. This allows services to be wired together without manual instantiation.
