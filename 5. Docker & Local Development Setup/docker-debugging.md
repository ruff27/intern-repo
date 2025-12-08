#34
📌 Debugging & Managing Docker Containers
🎯 Goal
Learn how to inspect, debug, and manage running Docker containers effectively.

✅ Why is this important?
When developing Focus Bear’s backend, you’ll need to inspect logs, restart services, and troubleshoot containers. Understanding Docker’s debugging tools will help you diagnose and fix issues quickly.

✅ Tasks

Research how to inspect running containers (docker ps, docker inspect)

Learn how to check logs for a running container (docker logs)

Explore how to enter a running container (docker exec -it)

Understand how to remove, restart, and rebuild containers (docker stop, docker rm, docker-compose down && up)

Here's some of the screenshots:

<img width="940" height="315" alt="image" src="https://github.com/user-attachments/assets/25a45410-b97f-4504-825e-abe1cf48319c" />
<img width="940" height="431" alt="image" src="https://github.com/user-attachments/assets/06e2975a-0a14-4137-95b6-7e0a08c23fdd" />
<img width="940" height="264" alt="image" src="https://github.com/user-attachments/assets/ddcc13e0-8629-4662-b1da-471155ec7624" />
<img width="940" height="315" alt="image" src="https://github.com/user-attachments/assets/92cc0b27-157f-46a7-8906-40330c7b2093" />
<img width="1318" height="366" alt="image" src="https://github.com/user-attachments/assets/1462a331-3b50-47fa-b183-4470e5ac2a3f" />


✅ Reflection (docker-debugging.md)
How can you check logs from a running container?

By running this command: docker logs some-postgres

What is the difference between docker exec and docker attach?

docker exec -it --> open a new session inside container

docker attach --> attach to main process

How do you restart a container without losing data?

docker restart some-postgres

This won't delete the database.

How can you troubleshoot database connection issues inside a containerized NestJS app?

Check logs: 
docker logs nest-api

Enter the API container: 
docker exec -it nest-api bash

Ping the DB: 
nc -zv postgres 5432

Verify environment variable inside the container: 
printenv | grep POSTGRES
