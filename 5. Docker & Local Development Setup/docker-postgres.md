#40

📌 Running PostgreSQL in Docker
🎯 Goal
Set up and run a PostgreSQL database in Docker for local development.

✅ Why is this important?
Focus Bear’s backend uses PostgreSQL as its primary database. Running it in Docker ensures a consistent development environment without installing PostgreSQL directly on your machine.

✅ Tasks

Research how to run PostgreSQL in a Docker container
I ran command docker pull postgres.

Set up a docker-compose.yml file to run PostgreSQL

Connect to the running PostgreSQL instance using a database client (e.g., pgAdmin, psql)



Explore how volumes persist PostgreSQL data across container restarts

Here's all the steps completed. The yml file can be found here: https://github.com/ruff27/intern-repo/blob/main/5.%20Docker%20%26%20Local%20Development%20Setup/docker-postgres/docker-compose.yml 

<img width="940" height="451" alt="image" src="https://github.com/user-attachments/assets/d0a34248-c593-4e14-b919-2e67ba0aaac1" />

<img width="940" height="315" alt="image" src="https://github.com/user-attachments/assets/fc151ec4-e44a-48a0-a3f8-3be53f1e19cf" />


✅ Reflection (docker-postgres.md)
What are the benefits of running PostgreSQL in a Docker container?
No local installation
Consistent version across developers
Easy reset/rebuild
Isolated environment
Works the same on any machine

How do Docker volumes help persist PostgreSQL data?
Database files are stored outside the container
Data survives container restarts, rebuilds, removal
Ensures no accidental data loss

How can you connect to a running PostgreSQL cont
By running the command:
docker exec -it some-postgres psql -U postgres
