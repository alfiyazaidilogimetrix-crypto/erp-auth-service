"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignRoleToUserDoc = exports.deleteRoleDoc = exports.updateRoleDoc = exports.getRoleByIdDoc = exports.getRolesDoc = exports.createRoleDoc = void 0;
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
// Role Routes
exports.createRoleDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Role'],
    method: 'post',
    path: '/',
    summary: 'Create a new role',
    description: 'Create a new role with associated permissions',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: role_1.createRoleSchema,
                },
            },
        },
    },
    responses: {
        201: {
            description: 'Role created successfully',
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
            description: 'Conflict - role name already exists',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
    },
});
exports.getRolesDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Role'],
    method: 'get',
    path: '/',
    summary: 'Get all roles',
    description: 'Retrieve all roles with pagination',
    request: {
        query: zod_openapi_1.z.object({
            page: zod_openapi_1.z.string().transform(Number).optional().default('1'),
            limit: zod_openapi_1.z.string().transform(Number).optional().default('10'),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved roles',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                    }),
                },
            },
        },
    },
});
exports.getRoleByIdDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Role'],
    method: 'get',
    path: '/{id}',
    summary: 'Get role by ID',
    description: 'Retrieve a specific role by ID',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved role',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'Role not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.updateRoleDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Role'],
    method: 'patch',
    path: '/{id}',
    summary: 'Update role',
    description: 'Update role information',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
        body: {
            content: {
                'application/json': {
                    schema: role_1.updateRoleSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Role updated successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'Role not found',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
    },
});
exports.deleteRoleDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Role'],
    method: 'delete',
    path: '/{id}',
    summary: 'Delete role',
    description: 'Delete a role (only if no users are assigned)',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
    },
    responses: {
        200: {
            description: 'Role deleted successfully',
            content: {
                'application/json': {
                    schema: SuccessResponseSchema,
                },
            },
        },
        400: {
            description: 'Bad request - role has users assigned',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
        404: {
            description: 'Role not found',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
    },
});
exports.assignRoleToUserDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Role', 'User'],
    method: 'post',
    path: '/roles/assign',
    summary: 'Assign role to user',
    description: "Assign a specific role to a user. This will update the user's roleId.",
    request: {
        body: {
            content: {
                'application/json': {
                    schema: role_1.assignRoleToUserSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Role assigned to user successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        400: {
            description: 'Bad request - validation error or invalid user/role',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
        404: {
            description: 'User or role not found',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
        500: {
            description: 'Internal server error',
            content: {
                'application/json': {
                    schema: ErrorResponseSchema,
                },
            },
        },
    },
});
