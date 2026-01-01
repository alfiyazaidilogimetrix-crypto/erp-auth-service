"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteModuleDoc = exports.updateModuleDoc = exports.getModuleByIdDoc = exports.getModulesDoc = exports.createModuleDoc = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
var role_1 = require("@schema/role");
// Common Response Schemas
var ErrorResponseSchema = zod_openapi_1.z.object({
    status: zod_openapi_1.z.number(),
    message: zod_openapi_1.z.string(),
    error: zod_openapi_1.z.string().optional(),
});
var SuccessResponseSchema = zod_openapi_1.z.object({
    status: zod_openapi_1.z.number(),
    message: zod_openapi_1.z.string(),
});
// Module Routes
exports.createModuleDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Module'],
    method: 'post',
    path: '/',
    summary: 'Create a new module',
    description: 'Create a new module for the system',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: role_1.createModuleSchema,
                },
            },
        },
    },
    responses: {
        201: {
            description: 'Module created successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        400: {
            description: 'Bad request - validation error',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
        409: {
            description: 'Conflict - module name already exists',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
    },
});
exports.getModulesDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Module'],
    method: 'get',
    path: '/',
    summary: 'Get all modules',
    description: 'Retrieve all modules with pagination',
    request: {
        query: zod_openapi_1.z.object({
            page: zod_openapi_1.z.string().transform(Number).optional().default('1'),
            limit: zod_openapi_1.z.string().transform(Number).optional().default('10'),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved modules',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.getModuleByIdDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Module'],
    method: 'get',
    path: '/{id}',
    summary: 'Get module by ID',
    description: 'Retrieve a specific module by ID',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string().transform(Number),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved module',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'Module not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.updateModuleDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Module'],
    method: 'patch',
    path: '/{id}',
    summary: 'Update module',
    description: 'Update module information',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string().transform(Number),
        }),
        body: {
            content: {
                'application/json': {
                    schema: role_1.updateModuleSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Module updated successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'Module not found',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
    },
});
exports.deleteModuleDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Module'],
    method: 'delete',
    path: '/{id}',
    summary: 'Delete module',
    description: 'Delete a module (only if no permissions are assigned)',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string().transform(Number),
        }),
    },
    responses: {
        200: {
            description: 'Module deleted successfully',
            content: {
                'application/json': {
                    schema: SuccessResponseSchema,
                },
            },
        },
        400: {
            description: 'Bad request - module has permissions assigned',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
        404: {
            description: 'Module not found',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
    },
});
