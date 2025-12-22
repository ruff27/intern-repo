📌 Handling Environment Variables & Configuration in NestJS
🎯 Goal
Learn how to securely manage environment variables and application configuration in NestJS.

✅ Why is this important?
Focus Bear’s backend relies on environment variables for secrets, API keys, and database credentials. Proper configuration management ensures security and flexibility across environments (local, staging, production).

✅ Tasks

Research how NestJS handles configuration using @nestjs/config
NestJS uses the @nestjs/config package to load environment variables from .env files and make them accessible throughout the application. It centralizes configuration and supports validation and environment-based settings.

Set up an .env file to manage environment variables securely
PORT=3000
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=secret
DATABASE_NAME=nest_tasks_db
API_KEY=example_api_key


Explore how to validate environment variables in NestJS
app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // makes ConfigService available everywhere
    }),
  ],
})
export class AppModule {}

Accessing variables:
constructor(private configService: ConfigService) {}

const dbHost = this.configService.get('DATABASE_HOST');


Understand the importance of not committing secrets to version control
NestJS commonly uses schema validation to ensure required environment variables exist before the app starts.
ConfigModule.forRoot({
  validationSchema: Joi.object({
    DATABASE_HOST: Joi.string().required(),
    DATABASE_PORT: Joi.number().required(),
    DATABASE_PASSWORD: Joi.string().required(),
  }),
});

add .env to .gitignore in root directory

✅ Reflection (nestjs-env-config.md)
## How does @nestjs/config help manage environment variables?
@nestjs/config loads environment variables from .env files and makes them available throughout the application using a centralized configuration service.

## Why should secrets (e.g., API keys, database passwords) never be stored in source code?
Storing secrets in source code can expose sensitive information if the repository is shared or leaked. Using environment variables helps keep secrets secure.

## How can you validate environment variables before the app starts?
Environment variables can be validated using a schema to ensure required values exist and are correctly formatted before the application starts.

## How can you separate configuration for different environments (e.g., local vs. production)?
Different environments can use separate .env files or environment-specific variables, allowing the application to run with different configurations without changing the source code.
