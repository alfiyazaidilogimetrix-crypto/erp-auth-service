import { z } from '@hono/zod-openapi';

export const assignRoleToUserSchema = z
  .object({
    userId: z.number(),
    roleId: z.number(),
  })
  .openapi({
    required: ['userId', 'roleId'],
    example: {
      userId: 1,
      roleId: 2,
    },
  });

// Role Schemas
export const createRoleSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(100),
    description: z.string().max(500).optional().nullable(),
    permissionIds: z.array(z.number()).optional().default([]),
  })
  .openapi({
    required: ['name'],
    example: {
      name: 'Admin',
      description: 'Administrator with full access',
      permissionIds: [1, 2, 3],
    },
  });

export const updateRoleSchema = z
  .object({
    name: z.string().min(1).max(100).optional(),
    description: z.string().max(500).optional().nullable(),
    permissionIds: z.array(z.number()).optional(),
  })
  .openapi({
    example: {
      name: 'Super Admin',
      description: 'Super Administrator with all permissions',
      permissionIds: [1, 2, 3, 4, 5],
    },
  });

export const roleResponseSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    description: z.string().nullable(),
    permissions: z
      .array(
        z.object({
          id: z.number(),
          action: z.array(z.string()),
          modules: z.array(
            z.object({
              id: z.number(),
              Name: z.string(),
              description: z.string().nullable(),
            }),
          ),
        }),
      )
      .optional(),
    users: z
      .array(
        z.object({
          id: z.number(),
          name: z.string(),
          email: z.string().email(),
        }),
      )
      .optional(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
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
export const createPermissionSchema = z
  .object({
    action: z.array(z.string().min(1, 'Action is required')),
    moduleIds: z.array(z.number()).optional().default([]),
  })
  .openapi({
    required: ['action'],
    example: {
      action: ['create', 'read', 'update', 'delete'],
      moduleIds: [1, 2, 3],
    },
  });

export const updatePermissionSchema = z
  .object({
    action: z.array(z.string().min(1)).optional(),
    moduleIds: z.array(z.number()).optional().default([]),
  })
  .openapi({
    example: {
      action: ['create', 'read', 'update', 'delete', 'manage'],
      moduleIds: [1, 2, 3, 4],
    },
  });

export const permissionResponseSchema = z
  .object({
    id: z.number(),
    action: z.array(z.string()),
    modules: z
      .array(
        z.object({
          id: z.number(),
          Name: z.string(),
          description: z.string().nullable(),
        }),
      )
      .optional(),
    roles: z
      .array(
        z.object({
          id: z.number(),
          name: z.string(),
          description: z.string().nullable(),
        }),
      )
      .optional(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
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
export const createModuleSchema = z
  .object({
    Name: z.string().min(1, 'Name is required').max(100),
    description: z.string().max(500).optional().nullable(),
  })
  .openapi({
    required: ['Name'],
    example: {
      Name: 'users',
      description: 'User management module',
    },
  });

export const updateModuleSchema = z
  .object({
    Name: z.string().min(1).max(100).optional(),
    description: z.string().max(500).optional().nullable(),
  })
  .openapi({
    example: {
      Name: 'user_management',
      description: 'Complete user management system',
    },
  });

export const moduleResponseSchema = z
  .object({
    id: z.number(),
    Name: z.string(),
    description: z.string().nullable(),
    permissions: z.array(permissionResponseSchema).optional(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
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

// Type exports
export type ICreateRole = z.infer<typeof createRoleSchema>;
export type IUpdateRole = z.infer<typeof updateRoleSchema>;
export type IRoleResponse = z.infer<typeof roleResponseSchema>;
export type ICreatePermission = z.infer<typeof createPermissionSchema>;
export type IUpdatePermission = z.infer<typeof updatePermissionSchema>;
export type IPermissionResponse = z.infer<typeof permissionResponseSchema>;
export type ICreateModule = z.infer<typeof createModuleSchema>;
export type IUpdateModule = z.infer<typeof updateModuleSchema>;
export type IModuleResponse = z.infer<typeof moduleResponseSchema>;
export type IAssignRoleToUser = z.infer<typeof assignRoleToUserSchema>;
