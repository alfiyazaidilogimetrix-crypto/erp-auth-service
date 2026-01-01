"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduleResponseSchema = exports.updateModuleSchema = exports.createModuleSchema = exports.permissionResponseSchema = exports.updatePermissionSchema = exports.createPermissionSchema = exports.roleResponseSchema = exports.updateRoleSchema = exports.createRoleSchema = exports.assignRoleToUserSchema = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
exports.assignRoleToUserSchema = zod_openapi_1.z
    .object({
    userId: zod_openapi_1.z.number(),
    roleId: zod_openapi_1.z.number(),
})
    .openapi({
    required: ['userId', 'roleId'],
    example: {
        userId: 1,
        roleId: 2,
    },
});
// Role Schemas
exports.createRoleSchema = zod_openapi_1.z
    .object({
    name: zod_openapi_1.z.string().min(1, 'Name is required').max(100),
    description: zod_openapi_1.z.string().max(500).optional().nullable(),
    permissionIds: zod_openapi_1.z.array(zod_openapi_1.z.number()).optional().default([]),
})
    .openapi({
    required: ['name'],
    example: {
        name: 'Admin',
        description: 'Administrator with full access',
        permissionIds: [1, 2, 3],
    },
});
exports.updateRoleSchema = zod_openapi_1.z
    .object({
    name: zod_openapi_1.z.string().min(1).max(100).optional(),
    description: zod_openapi_1.z.string().max(500).optional().nullable(),
    permissionIds: zod_openapi_1.z.array(zod_openapi_1.z.number()).optional(),
})
    .openapi({
    example: {
        name: 'Super Admin',
        description: 'Super Administrator with all permissions',
        permissionIds: [1, 2, 3, 4, 5],
    },
});
exports.roleResponseSchema = zod_openapi_1.z
    .object({
    id: zod_openapi_1.z.number(),
    name: zod_openapi_1.z.string(),
    description: zod_openapi_1.z.string().nullable(),
    permissions: zod_openapi_1.z
        .array(zod_openapi_1.z.object({
        id: zod_openapi_1.z.number(),
        action: zod_openapi_1.z.array(zod_openapi_1.z.string()),
        modules: zod_openapi_1.z.array(zod_openapi_1.z.object({
            id: zod_openapi_1.z.number(),
            Name: zod_openapi_1.z.string(),
            description: zod_openapi_1.z.string().nullable(),
        })),
    }))
        .optional(),
    users: zod_openapi_1.z
        .array(zod_openapi_1.z.object({
        id: zod_openapi_1.z.number(),
        name: zod_openapi_1.z.string(),
        email: zod_openapi_1.z.string().email(),
    }))
        .optional(),
    createdAt: zod_openapi_1.z.string().datetime(),
    updatedAt: zod_openapi_1.z.string().datetime(),
})
    .openapi({
    example: {
        id: 1,
        name: 'Admin',
        description: 'Administrator role',
        permissions: [
            {
                id: 1,
                action: ['create', 'read', 'update', 'delete'],
                modules: [
                    {
                        id: 1,
                        Name: 'users',
                        description: 'User management module',
                    },
                ],
            },
        ],
        users: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
            },
        ],
        createdAt: '2024-01-15T10:30:00.000Z',
        updatedAt: '2024-01-20T14:45:00.000Z',
    },
});
// Permission Schemas
exports.createPermissionSchema = zod_openapi_1.z
    .object({
    action: zod_openapi_1.z.array(zod_openapi_1.z.string().min(1, 'Action is required')),
    moduleIds: zod_openapi_1.z.array(zod_openapi_1.z.number()).optional().default([]),
})
    .openapi({
    required: ['action'],
    example: {
        action: ['create', 'read', 'update', 'delete'],
        moduleIds: [1, 2, 3],
    },
});
exports.updatePermissionSchema = zod_openapi_1.z
    .object({
    action: zod_openapi_1.z.array(zod_openapi_1.z.string().min(1)).optional(),
    moduleIds: zod_openapi_1.z.array(zod_openapi_1.z.number()).optional().default([]),
})
    .openapi({
    example: {
        action: ['create', 'read', 'update', 'delete', 'manage'],
        moduleIds: [1, 2, 3, 4],
    },
});
exports.permissionResponseSchema = zod_openapi_1.z
    .object({
    id: zod_openapi_1.z.number(),
    action: zod_openapi_1.z.array(zod_openapi_1.z.string()),
    modules: zod_openapi_1.z
        .array(zod_openapi_1.z.object({
        id: zod_openapi_1.z.number(),
        Name: zod_openapi_1.z.string(),
        description: zod_openapi_1.z.string().nullable(),
    }))
        .optional(),
    roles: zod_openapi_1.z
        .array(zod_openapi_1.z.object({
        id: zod_openapi_1.z.number(),
        name: zod_openapi_1.z.string(),
        description: zod_openapi_1.z.string().nullable(),
    }))
        .optional(),
    createdAt: zod_openapi_1.z.string().datetime(),
    updatedAt: zod_openapi_1.z.string().datetime(),
})
    .openapi({
    example: {
        id: 1,
        action: ['create', 'read', 'update', 'delete'],
        modules: [
            {
                id: 1,
                Name: 'users',
                description: 'User management module',
            },
            {
                id: 1,
                Name: 'roles',
                description: 'Role management module',
            },
        ],
        roles: [
            {
                id: 1,
                name: 'Admin',
                description: 'Administrator role',
            },
        ],
        createdAt: '2024-01-15T10:30:00.000Z',
        updatedAt: '2024-01-20T14:45:00.000Z',
    },
});
// Module Schemas
exports.createModuleSchema = zod_openapi_1.z
    .object({
    Name: zod_openapi_1.z.string().min(1, 'Name is required').max(100),
    description: zod_openapi_1.z.string().max(500).optional().nullable(),
})
    .openapi({
    required: ['Name'],
    example: {
        Name: 'users',
        description: 'User management module',
    },
});
exports.updateModuleSchema = zod_openapi_1.z
    .object({
    Name: zod_openapi_1.z.string().min(1).max(100).optional(),
    description: zod_openapi_1.z.string().max(500).optional().nullable(),
})
    .openapi({
    example: {
        Name: 'user_management',
        description: 'Complete user management system',
    },
});
exports.moduleResponseSchema = zod_openapi_1.z
    .object({
    id: zod_openapi_1.z.number(),
    Name: zod_openapi_1.z.string(),
    description: zod_openapi_1.z.string().nullable(),
    permissions: zod_openapi_1.z.array(exports.permissionResponseSchema).optional(),
    createdAt: zod_openapi_1.z.string().datetime(),
    updatedAt: zod_openapi_1.z.string().datetime(),
})
    .openapi({
    example: {
        id: 1,
        Name: 'users',
        description: 'User management module',
        permissions: [
            {
                id: 1,
                action: ['create', 'read', 'update', 'delete'],
                modules: [
                    {
                        id: 1,
                        Name: 'users',
                        description: 'User management module',
                    },
                ],
                createdAt: '2024-01-15T10:30:00.000Z',
                updatedAt: '2024-01-20T14:45:00.000Z',
            },
        ],
        createdAt: '2024-01-15T10:30:00.000Z',
        updatedAt: '2024-01-20T14:45:00.000Z',
    },
});
