📌 Using typeorm-encrypted for Data Encryption
🎯 Goal
Learn how to encrypt sensitive data in PostgreSQL using typeorm-encrypted, adding an extra layer of security on top of database encryption at rest.

✅ Why is this important?
Focus Bear’s backend double encrypts sensitive data—the database is already encrypted at rest, and typeorm-encrypted adds field-level encryption to protect specific data even if the database is compromised.

✅ Tasks

Research how typeorm-encrypted works and why it’s needed
Implement typeorm-encrypted in a NestJS entity
Understand how encryption keys are managed and stored
Test encrypting and decrypting a database field

`typeorm-encrypted` encrypts and decrypts specific entity fields automatically:
- Data is encrypted **before being saved** to the database
- Data is decrypted **when loaded** into the application
- Encryption is transparent to the rest of the application
- Encryption keys are managed at the application level

npm install typeorm-encrypted

Sample Entity

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';

@Entity()
export class SecureData {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    type: 'varchar',
    transformer: new EncryptionTransformer({
      key: process.env.ENCRYPTION_KEY as string,
      algorithm: 'aes-256-cbc',
      ivLength: 16,
    }),
  })
  sensitiveValue: string;
}

In the .env secure the random key: ENCRYPTION_KEY=super_secure_random_key_here



✅ Reflection (typeorm-encrypted.md)
Why does Focus Bear double encrypt sensitive data instead of relying on database encryption alone?
Database encryption at rest protects data from physical disk access, but application-level encryption protects individual fields even if the database itself is accessed. Double encryption provides stronger defense-in-depth.

How does typeorm-encrypted integrate with TypeORM entities?
typeorm-encrypted integrates through a column transformer that automatically encrypts data before saving and decrypts it when loading entities.

What are the best practices for securely managing encryption keys?
Encryption keys should be stored in environment variables or secret managers, rotated regularly, restricted by access controls, and never committed to version control.

What are the trade-offs between encrypting at the database level vs. the application level?
Database-level encryption is easier to manage but less granular. Application-level encryption provides stronger security for specific fields but adds complexity and key management responsibilities.
