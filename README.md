# NEST_AUTH_PG

NestJS PostgreSQL Auth application with migrations and entities support

---

## 1. To use .env config

### Steps:

#### 1.1: Install Nest Config

`yarn add @nestjs/config`

  <br>

### 1.2: Add Import to app.module.ts

`import { ConfigModule } from '@nestjs/config';`

#### 1.2: Add following code to app.module.ts imports array

`ConfigModule.forRoot({ isGlobal: true })`
<br>

#### 1.3: Create `.env` file in project root folder and add following config

```env
  # APP CONFIG
  PORT=4000
```

#### 1.4: Add following code to main.ts</h2>

```javascript
// import ConfigService
import { ConfigService } from '@nestjs/config';

// Add these line after app variable declarations in bootstrap method
const config: ConfigService = app.get(ConfigService);
const port: number = config.get < number > 'PORT';
```

---

## 2. Setting up class validators and transformers for requests

### Steps:

#### 2.1: Install Dependencies

`yarn add class-validator class-transformer`

  <br/>

#### Step 2.2: Add Following Code To main.ts

```javascript
// Add validation pipe import
import { ValidationPipe } from '@nestjs/common';

// Add these line after app variable declarations
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
    forbidNonWhitelisted: true,
  }),
);
```

---

## 3. Database Connection

### Steps

#### 3.1: Install Following Dependecies

`yarn add @nestjs/typeorm pg typeorm`
<br/>

#### 3.2: Add following config in `.env` file for Postgres

```env
  # DATABASE CONFIG
  DB_TYPE='postgres'
  DB_HOST='localhost'
  DB_PORT=5432
  DB_NAME='arogyaveda_app'
  DB_USERNAME='postgres'
  DB_PASSWORD='postgres'
```

#### 3.3: Add following code to `package.json` scripts

```json
  "typeorm": "node --require ts-node/register ./node_modules/typeorm/cli.js ",
  "migration": "yarn run build && yarn run typeorm -d libs/database/src/datasource.ts  migration:run",
  "migration:generate": "yarn run typeorm migration:generate ./libs/database/src/migrations -d ./libs/database/src/datasource.ts",
  "migration:create": "yarn run typeorm migration:create",
  "migration:revert": "yarn run typeorm -d libs/database/src/datasource.ts  migration:revert",
  "create-entity": "yarn run typeorm entity:create"
```

#### 3.4: Refer database library for database connection code and migrations

```js
  // nest cli command used to generate database library
  nest g lib database

  /* After creation of database module modify paths for
  database library to update import change @app/database to
  @database in tsconfig.json */
```

#### 3.5 To connect database add import DatabaseModule to app.module.ts

#### 3.6 To Add New Migration Run Following Command
```
  yarn migration:create .\libs\database\src\migrations\[ActionOnDBName]

  // where [ActionOnDBName] is operation that we want to perform on DB
  // this creates file with timestamp and [ActionOnDBName]
  // e.g. if you want to create UserTable run following command
  
  yarn migration:create .\libs\database\src\migrations\CreateUserTable
```