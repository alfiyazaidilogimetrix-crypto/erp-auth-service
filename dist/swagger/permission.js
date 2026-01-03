"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePermissionDoc = exports.updatePermissionDoc = exports.getPermissionByIdDoc = exports.getPermissionsDoc = exports.createPermissionDoc = void 0;
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
// Permission Routes
exports.createPermissionDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Permission'],
    method: 'post',
    path: '/',
    summary: 'Create a new permission',
    description: 'Create a new permission for a module',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: role_1.createPermissionSchema,
                },
            },
        },
    },
    responses: {
        201: {
            description: 'Permission created successfully',
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
exports.getPermissionsDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Permission'],
    method: 'get',
    path: '/',
    summary: 'Get all permissions',
    description: 'Retrieve all permissions with pagination',
    request: {
        query: zod_openapi_1.z.object({
            page: zod_openapi_1.z.string().transform(Number).optional().default('1'),
            limit: zod_openapi_1.z.string().transform(Number).optional().default('10'),
            moduleId: zod_openapi_1.z.string().optional(),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved permissions',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.getPermissionByIdDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Permission'],
    method: 'get',
    path: '/{id}',
    summary: 'Get permission by ID',
    description: 'Retrieve a specific permission by ID',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved permission',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'Permission not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.updatePermissionDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Permission'],
    method: 'patch',
    path: '/{id}',
    summary: 'Update permission',
    description: 'Update permission information',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
        body: {
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Permission updated successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'Permission not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.deletePermissionDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Permission'],
    method: 'delete',
    path: '/{id}',
    summary: 'Delete permission',
    description: 'Delete a permission (only if no roles are assigned)',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
    },
    responses: {
        200: {
            description: 'Permission deleted successfully',
            content: {
                'application/json': {
                    schema: SuccessResponseSchema,
                },
            },
        },
        400: {
            description: 'Bad request - permission has roles assigned',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'Permission not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
