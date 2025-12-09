#65

📌 Using NestJS CLI for Scaffolding
🎯 Goal
Learn how to use the NestJS CLI to scaffold different parts of the application such as controllers, services, and modules.

✅ Why is this important?
Focus Bear uses the NestJS CLI for rapid development and to ensure consistency in the codebase. Mastering the CLI will help you work faster and maintain project structure.

✅ Tasks

Research how to use the NestJS CLI
Generate a new controller, service, and module using the CLI
Explore additional CLI commands like nest generate and nest build
Understand how the CLI helps with the modular architecture of NestJS

<img width="940" height="654" alt="image" src="https://github.com/user-attachments/assets/66d52286-5c54-4910-9924-e379fd512b6a" />

| Command        | What It Does                                | Why It's Useful                       |
|----------------|----------------------------------------------|----------------------------------------|
| `nest generate` | Scaffolds modules, controllers, services, etc. | Fast development, consistent structure |
| `nest build`    | Compiles TypeScript to JavaScript             | Required for running in production     |
| `nest info`     | Shows environment and version details         | Helps debug environment issues         |
| `nest add`      | Installs and configures official integrations | Easier setup, auto-configuration       |



✅ Reflection (nestjs-cli.md)
How does the NestJS CLI help streamline development?
The NestJS CLI speeds up development by automatically generating boilerplate code, creating files in the correct directories, and wiring components into their modules. This reduces repetitive setup work and lets developers focus on writing actual business logic instead of manually configuring the project structure.

What is the purpose of nest generate?
nest generate (or nest g) is used to scaffold new components such as modules, controllers, services, guards, interceptors, and pipes. It creates files with the correct decorator syntax and updates module files automatically, saving time and preventing errors.

How does using the CLI ensure consistency across the codebase?
The CLI enforces a uniform folder structure and standardized templates for every new component. This ensures all developers follow the same patterns, reduces stylistic differences in the code, and makes the project easier to navigate and maintain.

What types of files and templates does the CLI create by default?
Depending on the command, the CLI generates files such as module.ts, controller.ts, service.ts, and optional test files like .spec.ts. Each file includes decorators like @Module(), @Controller(), or @Injectable() and predefined class structures following NestJS best practices.
