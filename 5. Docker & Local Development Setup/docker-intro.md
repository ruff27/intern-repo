#32

📌 What is Docker and Why Use It?
🎯 Goal
Understand what Docker is, how it differs from traditional development setups, and why Focus Bear uses it.

✅ Why is this important?
Focus Bear’s backend runs in Docker containers to ensure consistency across development and production. Understanding Docker is essential for local development and debugging.

✅ Tasks

Research what Docker is and how it differs from virtual machines

Understand the benefits of using Docker in a backend development environment

Explore how containers help maintain consistency across different environments

Review how Focus Bear uses Docker in backend services
✅ Reflection (docker-intro.md)
How does Docker differ from a virtual machine?
Docker is a platform that allows developers to package applications and all their dependencies into lightweight, isolated units called containers.
Docker shares the host OS kernel while VM runs a full OS. Docker is lightweight and has a fast startup in contrast to VM which is heavyweight and slow.
Docker uses fewer resources while VM has high memory + CPU usage.

Why is containerization useful for a backend like Focus Bear’s?
It ensures the backend behaves exactly the same for all developers. Allows services to run independently. For an organisation like Focus Bear, this means the backend behaves exactly same on devices, development server and production environment.

How do containers help with dependency management?
The developers don't have to install dependencies. Instead, the docker handles it. Each project uses what it needs without affecting others.

What are the potential downsides of using Docker?
It can use more system resources when many containers run at once. Debugging inside a container is sometimes complex. It also needs correct configuration (Dockerfile, docker-compose, networking).
Some tools may behave differently inside or outside the Docker.
