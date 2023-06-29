import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateUserTable1688041702448 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
        `);

        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS "user"(
                id uuid DEFAULT uuid_generate_v4() NOT NULL,
                first_name VARCHAR(50),
                last_name VARCHAR(50),
                email VARCHAR(100) UNIQUE,
                mobile VARCHAR(12) UNIQUE,
                password VARCHAR(100),
                access_token TEXT DEFAULT NULL,
                user_type varchar default 'USER',
                is_verified BOOLEAN DEFAULT TRUE,
                last_login_at TIMESTAMP DEFAULT NULL,
                created_at TIMESTAMP NOT NULL DEFAULT NOW(),
                updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
                PRIMARY KEY(id)
            );
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP EXTENSION "uuid-ossp";
        `);
        await queryRunner.query(`
            DROP TABLE "user";
        `);
    }

}
