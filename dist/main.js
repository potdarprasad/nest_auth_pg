/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@nestjs/mapped-types/dist/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@nestjs/mapped-types/dist/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inheritValidationMetadata = exports.inheritTransformationMetadata = exports.inheritPropertyInitializers = exports.applyIsOptionalDecorator = void 0;
__exportStar(__webpack_require__(/*! ./intersection-type.helper */ "./node_modules/@nestjs/mapped-types/dist/intersection-type.helper.js"), exports);
__exportStar(__webpack_require__(/*! ./mapped-type.interface */ "./node_modules/@nestjs/mapped-types/dist/mapped-type.interface.js"), exports);
__exportStar(__webpack_require__(/*! ./omit-type.helper */ "./node_modules/@nestjs/mapped-types/dist/omit-type.helper.js"), exports);
__exportStar(__webpack_require__(/*! ./partial-type.helper */ "./node_modules/@nestjs/mapped-types/dist/partial-type.helper.js"), exports);
__exportStar(__webpack_require__(/*! ./pick-type.helper */ "./node_modules/@nestjs/mapped-types/dist/pick-type.helper.js"), exports);
var type_helpers_utils_1 = __webpack_require__(/*! ./type-helpers.utils */ "./node_modules/@nestjs/mapped-types/dist/type-helpers.utils.js");
Object.defineProperty(exports, "applyIsOptionalDecorator", ({ enumerable: true, get: function () { return type_helpers_utils_1.applyIsOptionalDecorator; } }));
Object.defineProperty(exports, "inheritPropertyInitializers", ({ enumerable: true, get: function () { return type_helpers_utils_1.inheritPropertyInitializers; } }));
Object.defineProperty(exports, "inheritTransformationMetadata", ({ enumerable: true, get: function () { return type_helpers_utils_1.inheritTransformationMetadata; } }));
Object.defineProperty(exports, "inheritValidationMetadata", ({ enumerable: true, get: function () { return type_helpers_utils_1.inheritValidationMetadata; } }));


/***/ }),

/***/ "./node_modules/@nestjs/mapped-types/dist/intersection-type.helper.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@nestjs/mapped-types/dist/intersection-type.helper.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntersectionType = void 0;
const type_helpers_utils_1 = __webpack_require__(/*! ./type-helpers.utils */ "./node_modules/@nestjs/mapped-types/dist/type-helpers.utils.js");
function IntersectionType(...classRefs) {
    class IntersectionClassType {
        constructor() {
            classRefs.forEach((classRef) => {
                (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef);
            });
        }
    }
    classRefs.forEach((classRef) => {
        (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, IntersectionClassType);
        (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, IntersectionClassType);
    });
    const intersectedNames = classRefs.reduce((prev, ref) => prev + ref.name, '');
    Object.defineProperty(IntersectionClassType, 'name', {
        value: `Intersection${intersectedNames}`,
    });
    return IntersectionClassType;
}
exports.IntersectionType = IntersectionType;


/***/ }),

/***/ "./node_modules/@nestjs/mapped-types/dist/mapped-type.interface.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@nestjs/mapped-types/dist/mapped-type.interface.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./node_modules/@nestjs/mapped-types/dist/omit-type.helper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nestjs/mapped-types/dist/omit-type.helper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OmitType = void 0;
const type_helpers_utils_1 = __webpack_require__(/*! ./type-helpers.utils */ "./node_modules/@nestjs/mapped-types/dist/type-helpers.utils.js");
function OmitType(classRef, keys) {
    const isInheritedPredicate = (propertyKey) => !keys.includes(propertyKey);
    class OmitClassType {
        constructor() {
            (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef, isInheritedPredicate);
        }
    }
    (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, OmitClassType, isInheritedPredicate);
    (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, OmitClassType, isInheritedPredicate);
    return OmitClassType;
}
exports.OmitType = OmitType;


/***/ }),

/***/ "./node_modules/@nestjs/mapped-types/dist/partial-type.helper.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@nestjs/mapped-types/dist/partial-type.helper.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PartialType = void 0;
const type_helpers_utils_1 = __webpack_require__(/*! ./type-helpers.utils */ "./node_modules/@nestjs/mapped-types/dist/type-helpers.utils.js");
function PartialType(classRef) {
    class PartialClassType {
        constructor() {
            (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef);
        }
    }
    const propertyKeys = (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, PartialClassType);
    (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, PartialClassType);
    if (propertyKeys) {
        propertyKeys.forEach((key) => {
            (0, type_helpers_utils_1.applyIsOptionalDecorator)(PartialClassType, key);
        });
    }
    Object.defineProperty(PartialClassType, 'name', {
        value: `Partial${classRef.name}`,
    });
    return PartialClassType;
}
exports.PartialType = PartialType;


/***/ }),

/***/ "./node_modules/@nestjs/mapped-types/dist/pick-type.helper.js":
/*!********************************************************************!*\
  !*** ./node_modules/@nestjs/mapped-types/dist/pick-type.helper.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PickType = void 0;
const type_helpers_utils_1 = __webpack_require__(/*! ./type-helpers.utils */ "./node_modules/@nestjs/mapped-types/dist/type-helpers.utils.js");
function PickType(classRef, keys) {
    const isInheritedPredicate = (propertyKey) => keys.includes(propertyKey);
    class PickClassType {
        constructor() {
            (0, type_helpers_utils_1.inheritPropertyInitializers)(this, classRef, isInheritedPredicate);
        }
    }
    (0, type_helpers_utils_1.inheritValidationMetadata)(classRef, PickClassType, isInheritedPredicate);
    (0, type_helpers_utils_1.inheritTransformationMetadata)(classRef, PickClassType, isInheritedPredicate);
    return PickClassType;
}
exports.PickType = PickType;


/***/ }),

/***/ "./node_modules/@nestjs/mapped-types/dist/type-helpers.utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@nestjs/mapped-types/dist/type-helpers.utils.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inheritPropertyInitializers = exports.inheritTransformationMetadata = exports.inheritValidationMetadata = exports.applyIsOptionalDecorator = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const logger = new common_1.Logger('MappedTypes');
function applyIsOptionalDecorator(targetClass, propertyKey) {
    if (!isClassValidatorAvailable()) {
        return;
    }
    const classValidator = __webpack_require__(/*! class-validator */ "class-validator");
    const decoratorFactory = classValidator.IsOptional();
    decoratorFactory(targetClass.prototype, propertyKey);
}
exports.applyIsOptionalDecorator = applyIsOptionalDecorator;
function inheritValidationMetadata(parentClass, targetClass, isPropertyInherited) {
    if (!isClassValidatorAvailable()) {
        return;
    }
    try {
        const classValidator = __webpack_require__(/*! class-validator */ "class-validator");
        const metadataStorage = classValidator.getMetadataStorage
            ? classValidator.getMetadataStorage()
            : classValidator.getFromContainer(classValidator.MetadataStorage);
        const getTargetValidationMetadatasArgs = [parentClass, null, false, false];
        const targetMetadata = metadataStorage.getTargetValidationMetadatas(...getTargetValidationMetadatasArgs);
        return targetMetadata
            .filter(({ propertyName }) => !isPropertyInherited || isPropertyInherited(propertyName))
            .map((value) => {
            const originalType = Reflect.getMetadata('design:type', parentClass.prototype, value.propertyName);
            if (originalType) {
                Reflect.defineMetadata('design:type', originalType, targetClass.prototype, value.propertyName);
            }
            metadataStorage.addValidationMetadata({
                ...value,
                target: targetClass,
            });
            return value.propertyName;
        });
    }
    catch (err) {
        logger.error(`Validation ("class-validator") metadata cannot be inherited for "${parentClass.name}" class.`);
        logger.error(err);
    }
}
exports.inheritValidationMetadata = inheritValidationMetadata;
function inheritTransformationMetadata(parentClass, targetClass, isPropertyInherited) {
    if (!isClassTransformerAvailable()) {
        return;
    }
    try {
        const transformMetadataKeys = [
            '_excludeMetadatas',
            '_exposeMetadatas',
            '_transformMetadatas',
            '_typeMetadatas',
        ];
        transformMetadataKeys.forEach((key) => inheritTransformerMetadata(key, parentClass, targetClass, isPropertyInherited));
    }
    catch (err) {
        logger.error(`Transformer ("class-transformer") metadata cannot be inherited for "${parentClass.name}" class.`);
        logger.error(err);
    }
}
exports.inheritTransformationMetadata = inheritTransformationMetadata;
function inheritTransformerMetadata(key, parentClass, targetClass, isPropertyInherited) {
    let classTransformer;
    try {
        classTransformer = __webpack_require__(/*! class-transformer/cjs/storage */ "class-transformer/cjs/storage");
    }
    catch {
        classTransformer = __webpack_require__(/*! class-transformer/storage */ "class-transformer/storage");
    }
    const metadataStorage = classTransformer.defaultMetadataStorage;
    while (parentClass && parentClass !== Object) {
        if (metadataStorage[key].has(parentClass)) {
            const metadataMap = metadataStorage[key];
            const parentMetadata = metadataMap.get(parentClass);
            const targetMetadataEntries = Array.from(parentMetadata.entries())
                .filter(([key]) => !isPropertyInherited || isPropertyInherited(key))
                .map(([key, metadata]) => {
                if (Array.isArray(metadata)) {
                    const targetMetadata = metadata.map((item) => ({
                        ...item,
                        target: targetClass,
                    }));
                    return [key, targetMetadata];
                }
                return [key, { ...metadata, target: targetClass }];
            });
            if (metadataMap.has(targetClass)) {
                const existingRules = metadataMap.get(targetClass).entries();
                metadataMap.set(targetClass, new Map([...existingRules, ...targetMetadataEntries]));
            }
            else {
                metadataMap.set(targetClass, new Map(targetMetadataEntries));
            }
        }
        parentClass = Object.getPrototypeOf(parentClass);
    }
}
function isClassValidatorAvailable() {
    try {
        __webpack_require__(/*! class-validator */ "class-validator");
        return true;
    }
    catch {
        return false;
    }
}
function isClassTransformerAvailable() {
    try {
        __webpack_require__(/*! class-transformer */ "class-transformer");
        return true;
    }
    catch {
        return false;
    }
}
function inheritPropertyInitializers(target, sourceClass, isPropertyInherited = (key) => true) {
    try {
        const tempInstance = new sourceClass();
        const propertyNames = Object.getOwnPropertyNames(tempInstance);
        propertyNames
            .filter((propertyName) => typeof tempInstance[propertyName] !== 'undefined' &&
            typeof target[propertyName] === 'undefined')
            .filter((propertyName) => isPropertyInherited(propertyName))
            .forEach((propertyName) => {
            target[propertyName] = tempInstance[propertyName];
        });
    }
    catch { }
}
exports.inheritPropertyInitializers = inheritPropertyInitializers;


/***/ }),

/***/ "./node_modules/@nestjs/mapped-types/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@nestjs/mapped-types/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
exports.__esModule = true;
__export(__webpack_require__(/*! ./dist */ "./node_modules/@nestjs/mapped-types/dist/index.js"));


/***/ }),

/***/ "./libs/database/src/database.module.ts":
/*!**********************************************!*\
  !*** ./libs/database/src/database.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const entities_1 = __webpack_require__(/*! ./entities */ "./libs/database/src/entities/index.ts");
const datasource_1 = __webpack_require__(/*! ./datasource */ "./libs/database/src/datasource.ts");
const repositories_1 = __webpack_require__(/*! ./repositories */ "./libs/database/src/repositories/index.ts");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(datasource_1.AppDataSource.options),
            typeorm_1.TypeOrmModule.forFeature([...entities_1.entities]),
        ],
        providers: [...entities_1.entities, ...repositories_1.repositories],
        exports: [...entities_1.entities, ...repositories_1.repositories],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;


/***/ }),

/***/ "./libs/database/src/datasource.ts":
/*!*****************************************!*\
  !*** ./libs/database/src/datasource.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppDataSource = void 0;
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __webpack_require__(/*! ./entities */ "./libs/database/src/entities/index.ts");
const migrations_1 = __webpack_require__(/*! ./migrations */ "./libs/database/src/migrations/index.ts");
config_1.ConfigModule.forRoot();
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    entities: [...entities_1.entities],
    migrations: [...migrations_1.migrations],
    migrationsTableName: 'migrations_table',
    logger: 'advanced-console',
    logging: true,
    synchronize: false,
});


/***/ }),

/***/ "./libs/database/src/entities/index.ts":
/*!*********************************************!*\
  !*** ./libs/database/src/entities/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.entities = void 0;
const user_entity_1 = __webpack_require__(/*! ./user.entity */ "./libs/database/src/entities/user.entity.ts");
exports.entities = [
    user_entity_1.UserEntity
];
__exportStar(__webpack_require__(/*! ./user.entity */ "./libs/database/src/entities/user.entity.ts"), exports);


/***/ }),

/***/ "./libs/database/src/entities/user.entity.ts":
/*!***************************************************!*\
  !*** ./libs/database/src/entities/user.entity.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserEntity = exports.UserType = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "ADMIN";
    UserType["USER"] = "USER";
})(UserType = exports.UserType || (exports.UserType = {}));
let UserEntity = class UserEntity extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)("uuid"),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar', name: 'first_name', nullable: false
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar', name: 'last_name', nullable: false
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar', name: 'email', nullable: false, unique: true
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar', name: 'mobile', nullable: false, unique: true
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar', name: 'password', nullable: false
    }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'text', name: 'access_token', nullable: true
    }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], UserEntity.prototype, "accessToken", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'boolean', name: 'is_verified', nullable: true
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "isVerified", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        nullable: false,
        name: 'user_type',
        default: UserType.USER
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "userType", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'last_login_at', type: 'timestamp', nullable: true, default: null }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UserEntity.prototype, "lastLoginAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp', name: 'created_at' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp', name: 'updated_at' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], UserEntity.prototype, "updatedAt", void 0);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('user')
], UserEntity);
exports.UserEntity = UserEntity;


/***/ }),

/***/ "./libs/database/src/index.ts":
/*!************************************!*\
  !*** ./libs/database/src/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./database.module */ "./libs/database/src/database.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./entities */ "./libs/database/src/entities/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./migrations */ "./libs/database/src/migrations/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./repositories */ "./libs/database/src/repositories/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./datasource */ "./libs/database/src/datasource.ts"), exports);


/***/ }),

/***/ "./libs/database/src/migrations/1688041702448-CreateUserTable.ts":
/*!***********************************************************************!*\
  !*** ./libs/database/src/migrations/1688041702448-CreateUserTable.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserTable1688041702448 = void 0;
class CreateUserTable1688041702448 {
    async up(queryRunner) {
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
    async down(queryRunner) {
        await queryRunner.query(`
            DROP EXTENSION "uuid-ossp";
        `);
        await queryRunner.query(`
            DROP TABLE "user";
        `);
    }
}
exports.CreateUserTable1688041702448 = CreateUserTable1688041702448;


/***/ }),

/***/ "./libs/database/src/migrations/index.ts":
/*!***********************************************!*\
  !*** ./libs/database/src/migrations/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.migrations = void 0;
const _1688041702448_CreateUserTable_1 = __webpack_require__(/*! ./1688041702448-CreateUserTable */ "./libs/database/src/migrations/1688041702448-CreateUserTable.ts");
exports.migrations = [
    _1688041702448_CreateUserTable_1.CreateUserTable1688041702448
];


/***/ }),

/***/ "./libs/database/src/repositories/index.ts":
/*!*************************************************!*\
  !*** ./libs/database/src/repositories/index.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.repositories = void 0;
const user_repository_1 = __webpack_require__(/*! ./user.repository */ "./libs/database/src/repositories/user.repository.ts");
exports.repositories = [
    user_repository_1.UserRepository
];
__exportStar(__webpack_require__(/*! ./user.repository */ "./libs/database/src/repositories/user.repository.ts"), exports);


/***/ }),

/***/ "./libs/database/src/repositories/user.repository.ts":
/*!***********************************************************!*\
  !*** ./libs/database/src/repositories/user.repository.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserRepository = void 0;
const typeorm_1 = __webpack_require__(/*! @nestjs/typeorm */ "@nestjs/typeorm");
const typeorm_2 = __webpack_require__(/*! typeorm */ "typeorm");
const entities_1 = __webpack_require__(/*! ../entities */ "./libs/database/src/entities/index.ts");
let UserRepository = class UserRepository extends typeorm_2.Repository {
    constructor(userRepository) {
        super(userRepository.target, userRepository.manager, userRepository.queryRunner);
        this.userRepository = userRepository;
    }
    async findByEmail(email) {
        return await this.userRepository.findOneBy({ email });
    }
    async findById(id) {
        return await this.userRepository.findOneBy({ id });
    }
};
UserRepository = __decorate([
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.UserEntity)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], UserRepository);
exports.UserRepository = UserRepository;


/***/ }),

/***/ "./src/app.controller.ts":
/*!*******************************!*\
  !*** ./src/app.controller.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getHello() {
        return this.appService.getHello();
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof app_service_1.AppService !== "undefined" && app_service_1.AppService) === "function" ? _a : Object])
], AppController);
exports.AppController = AppController;


/***/ }),

/***/ "./src/app.module.ts":
/*!***************************!*\
  !*** ./src/app.module.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./src/app.service.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const _database_1 = __webpack_require__(/*! @database */ "./libs/database/src/index.ts");
const user_controller_1 = __webpack_require__(/*! ./user/user.controller */ "./src/user/user.controller.ts");
const user_service_1 = __webpack_require__(/*! ./user/user.service */ "./src/user/user.service.ts");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            _database_1.DatabaseModule
        ],
        controllers: [app_controller_1.AppController, user_controller_1.UserController],
        providers: [app_service_1.AppService, user_service_1.UserService],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app.service.ts":
/*!****************************!*\
  !*** ./src/app.service.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let AppService = class AppService {
    getHello() {
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;


/***/ }),

/***/ "./src/user/dto/create-user.dto.ts":
/*!*****************************************!*\
  !*** ./src/user/dto/create-user.dto.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'First Name is required' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Last Name is required' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Email is required' }),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Mobile is required' }),
    (0, class_validator_1.IsPhoneNumber)('IN', { message: "Please enter valid phone number" }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "mobile", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Password is required' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./src/user/dto/update-user.dto.ts":
/*!*****************************************!*\
  !*** ./src/user/dto/update-user.dto.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserDto = void 0;
const mapped_types_1 = __webpack_require__(/*! @nestjs/mapped-types */ "./node_modules/@nestjs/mapped-types/index.js");
const create_user_dto_1 = __webpack_require__(/*! ./create-user.dto */ "./src/user/dto/create-user.dto.ts");
class UpdateUserDto extends (0, mapped_types_1.PartialType)(create_user_dto_1.CreateUserDto) {
}
exports.UpdateUserDto = UpdateUserDto;


/***/ }),

/***/ "./src/user/user.controller.ts":
/*!*************************************!*\
  !*** ./src/user/user.controller.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const create_user_dto_1 = __webpack_require__(/*! ./dto/create-user.dto */ "./src/user/dto/create-user.dto.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./src/user/user.service.ts");
const update_user_dto_1 = __webpack_require__(/*! ./dto/update-user.dto */ "./src/user/dto/update-user.dto.ts");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    findAll() {
        return this.userService.findAll();
    }
    findOne(id) {
        return this.userService.findOne(id);
    }
    update(id, updateUserDto) {
        return this.userService.update(id, updateUserDto);
    }
    remove(id) {
        return this.userService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_user_dto_1.CreateUserDto !== "undefined" && create_user_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, typeof (_c = typeof update_user_dto_1.UpdateUserDto !== "undefined" && update_user_dto_1.UpdateUserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./src/user/user.service.ts":
/*!**********************************!*\
  !*** ./src/user/user.service.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const _database_1 = __webpack_require__(/*! @database */ "./libs/database/src/index.ts");
let UserService = class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async create(createUserDto) {
        const { firstName, lastName, mobile, email, password } = createUserDto;
        const User = await this.userRepository.findOneBy({ email: createUserDto.email });
        if (User) {
            return 'User With This Email Already Exists';
        }
        const user = await this.userRepository.create({ firstName, lastName, email, password });
        await this.userRepository.save(user);
        return 'User Created Successfully';
    }
    async findAll() {
        return this.userRepository.findAndCount();
    }
    async findOne(id) {
        return this.userRepository.findOneBy({ id });
    }
    async update(id, updateUserDto) {
        await this.userRepository.update({ id }, updateUserDto);
        return 'User updated successfully';
    }
    async remove(id) {
        await this.userRepository.delete(id);
        return 'User Deleted Successfully';
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof _database_1.UserRepository !== "undefined" && _database_1.UserRepository) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/typeorm":
/*!**********************************!*\
  !*** external "@nestjs/typeorm" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-transformer/cjs/storage":
/*!************************************************!*\
  !*** external "class-transformer/cjs/storage" ***!
  \************************************************/
/***/ ((module) => {

module.exports = require("class-transformer/cjs/storage");

/***/ }),

/***/ "class-transformer/storage":
/*!********************************************!*\
  !*** external "class-transformer/storage" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("class-transformer/storage");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./src/app.module.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = app.get(config_1.ConfigService);
    const port = config.get('PORT');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        transform: true,
        forbidNonWhitelisted: true,
    }));
    await app.listen(port);
}
bootstrap();

})();

/******/ })()
;