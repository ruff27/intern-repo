#40

📌 Running PostgreSQL in Docker
🎯 Goal
Set up and run a PostgreSQL database in Docker for local development.

✅ Why is this important?
Focus Bear’s backend uses PostgreSQL as its primary database. Running it in Docker ensures a consistent development environment without installing PostgreSQL directly on your machine.

✅ Tasks

Research how to run PostgreSQL in a Docker container
I ran command docker pull postgres:latest

<img width="940" height="475" alt="image" src="https://github.com/user-attachments/assets/987e289f-611f-45aa-802f-586ece357814" />


Set up a docker-compose.yml file to run PostgreSQL

Connect to the running PostgreSQL instance using a database client (e.g., pgAdmin, psql)
<img width="940" height="556" alt="image" src="https://github.com/user-attachments/assets/4a70eac9-1886-4803-b4a1-16d4760055fd" />


Explore how volumes persist PostgreSQL data across container restarts

✅ Reflection (docker-postgres.md)
What are the benefits of running PostgreSQL in a Docker container?
How do Docker volumes help persist PostgreSQL data?
How can you connect to a running PostgreSQL cont
