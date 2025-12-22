#38

📌 Seeding & Migrations in TypeORM
🎯 Goal
Learn how to manage database schema changes and seed initial data using TypeORM migrations.

✅ Why is this important?
Focus Bear’s backend evolves over time, requiring schema updates and initial test data. TypeORM migrations help ensure safe, version-controlled changes, and seeding is useful for setting up test environments.

✅ Tasks

Research how migrations work in TypeORM (typeorm migration:generate)
Create a new migration and apply it to the database
Seed sample data into PostgreSQL using TypeORM repositories
Explore how migrations can be used to roll back database changes


✅ Reflection (typeorm-migrations.md)
What is the purpose of database migrations in TypeORM?
Database migrations are used to manage and track changes to the database schema over time. They ensure that updates to tables or columns are applied in a controlled and consistent way across different environments.


How do migrations differ from seeding?
Migrations change the structure of the database, such as creating or modifying tables, while seeding inserts initial or test data into the database without altering the schema.


Why is it important to version-control database schema changes?
Version-controlling schema changes allows teams to keep database structures consistent, track changes over time, and safely apply updates across development, testing, and production environments.


How can you roll back a migration if an issue occurs?
TypeORM allows migrations to be rolled back using the migration revert command, which undoes the most recently applied migration and restores the database to its previous state.
