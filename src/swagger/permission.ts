import { createRoute, z } from '@hono/zod-openapi';
import {
  createPermissionSchema,
  updatePermissionSchema,
  permissionResponseSchema,
} from '@schema/role';

// Common Response Schemas
const ErrorResponseSchema = z.object({
  status: z.number(),
  message: z.string(),
  error: z.string().optional(),
});

const SuccessResponseSchema = z.object({
  status: z.number(),
  message: z.string(),
});

// Permission Routes
export const createPermissionDoc = createRoute({
  tags: ['Permission'],
  method: 'post',
  path: '/',
  summary: 'Create a new permission',
  description: 'Create a new permission for a module',
  request: {
    body: {
      content: {
        'application/json': {
          schema: createPermissionSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Permission created successfully',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            permission: permissionResponseSchema,
          }),
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

export const getPermissionsDoc = createRoute({
  tags: ['Permission'],
  method: 'get',
  path: '/',
  summary: 'Get all permissions',
  description: 'Retrieve all permissions with pagination',
  request: {
    query: z.object({
      page: z.string().transform(Number).optional().default('1'),
      limit: z.string().transform(Number).optional().default('10'),
      moduleId: z.string().optional(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved permissions',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            permissions: z.array(permissionResponseSchema),
            pagination: z.object({
              page: z.number(),
              limit: z.number(),
              total: z.number(),
              pages: z.number(),
            }),
          }),
        },
      },
    },
  },
});

export const getPermissionByIdDoc = createRoute({
  tags: ['Permission'],
  method: 'get',
  path: '/{id}',
  summary: 'Get permission by ID',
  description: 'Retrieve a specific permission by ID',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved permission',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    404: {
      description: 'Permission not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const updatePermissionDoc = createRoute({
  tags: ['Permission'],
  method: 'patch',
  path: '/{id}',
  summary: 'Update permission',
  description: 'Update permission information',
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        'application/json': {
          schema: updatePermissionSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Permission updated successfully',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            permission: permissionResponseSchema,
          }),
        },
      },
    },
    404: {
      description: 'Permission not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});

export const deletePermissionDoc = createRoute({
  tags: ['Permission'],
  method: 'delete',
  path: '/{id}',
  summary: 'Delete permission',
  description: 'Delete a permission (only if no roles are assigned)',
  request: {
    params: z.object({
      id: z.string(),
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
          schema: ErrorResponseSchema,
        },
      },
    },
    404: {
      description: 'Permission not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});
