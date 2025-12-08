#36
📌 Setting Up Docker and Docker Compose
🎯 Goal
Install Docker and Docker Compose and learn basic commands to manage containers.

✅ Why is this important?
Focus Bear’s backend relies on Docker Compose to manage services like PostgreSQL, Redis, and the NestJS API. Understanding how to install and use Docker is essential for running the backend locally.

✅ Tasks

Research how to install Docker and Docker Compose (if not installed)

Verify Docker installation and check running services
<img width="1342" height="702" alt="image" src="https://github.com/user-attachments/assets/68e1bf52-be67-4f4a-b90a-5cdc4d70c037" />
<img width="573" height="228" alt="image" src="https://github.com/user-attachments/assets/470257de-aebe-4d3f-86ba-34fb56db2319" />


Learn key Docker commands (docker ps, docker stop, docker logs, etc.)

Explore how Docker Compose simplifies multi-container setups
✅ Reflection (docker-setup.md)
What is the difference between docker run and docker-compose up?
docker run starts one container from a single image. It is useful for single standalone apps. Requires long commands to specify ports, env variables, volumes, etc.
docker compose up starts multiple containers using docker-compose.yml file. It automatically handles networking between services, volumes, env variables, and dependencies.

How does Docker Compose help when working with multiple services?
Docker Compose acts as an orchestrator for the local environment.
You define all services (PostgreSQL, Redis, NestJS API) in one file.
One command (docker-compose up) launches the entire backend.
All containers automatically get a shared network so they can communicate.
Easy to start, stop, rebuild, or reset the whole stack.
Ensures all developers use exact same versions & configuration.

What commands can you use to check logs from a running container?
Most common command is: docker logs <container_name> to check log history
To follow logs in real-time: docker logs -f <container_name>

When debugging NestJS, Redis issues,  or database start-up errors you can use docker compose.
For example: docker-compose logs -f <service> to follow logs in real-time.

What happens when you restart a container? Does data persist?
The container stops and starts again with the same file system if a volume is attached. Hence the code or configuration persists. If no volume is attached to the docker, then the data is lost.
