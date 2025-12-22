📌 Logging & Error Handling in NestJS
🎯 Goal
Learn how to log application events and handle errors effectively in NestJS.

✅ Why is this important?
Focus Bear’s backend relies on structured logging and error handling to monitor application health and diagnose issues. Proper logging improves debugging, while structured error handling ensures a better developer and user experience.

✅ Tasks

## Research how NestJS handles logging (nestjs-pino)
NestJS supports logging through built-in loggers and external libraries like nestjs-pino, which integrates the high-performance Pino logger. nestjs-pino enables structured, JSON-based logging that is efficient and suitable for production environments.

## Set up structured logging using nestjs-pino
nestjs-pino provides structured logs that include metadata such as timestamps, request IDs, log levels, and contextual information. These logs can be easily parsed, searched, and analyzed by log management tools, making debugging and monitoring more effective.

## Understand global exception handling in NestJS (@nestjs/common.HttpExceptionFilter)
NestJS uses exception filters to handle errors globally. The built-in HttpException system allows developers to throw meaningful HTTP errors, while global exception filters ensure consistent error responses across the application.

## Implement a custom exception filter to format API error responses
A custom exception filter can be used to intercept thrown exceptions and format API error responses in a consistent structure. This helps standardize error messages, status codes, and response formats for frontend and API consumers.

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    response.status(exception.getStatus()).json({
      statusCode: exception.getStatus(),
      path: request.url,
      message: exception.message,
      timestamp: new Date().toISOString(),
    });
  }
}

Apple globally:
app.useGlobalFilters(new HttpExceptionFilter());


✅ Reflection (nestjs-logging.md)
## What are the benefits of using nestjs-pino for logging?
nestjs-pino provides fast, structured, and JSON-based logging. It improves performance and makes logs easier to analyze using external monitoring and logging tools.

## How does global exception handling improve API consistency?
Global exception handling ensures that all errors follow a consistent response format. This improves developer experience, simplifies frontend error handling, and makes debugging easier.

## What is the difference between a logging interceptor and an exception filter?
A logging interceptor records information about requests and responses during normal execution, while an exception filter handles and formats errors when exceptions occur.

## How can logs be structured to provide useful debugging information?
Logs can include structured fields such as timestamps, log levels, request IDs, user context, and error details. Structured logs make it easier to trace issues and understand application behavior.
