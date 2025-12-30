import { createRoute, z } from '@hono/zod-openapi';
import {
  createRoleSchema,
  updateRoleSchema,
  assignRoleToUserSchema,
  roleResponseSchema,
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

// Role Routes
export const createRoleDoc = createRoute({
  tags: ['Role'],
  method: 'post',
  path: '/',
  summary: 'Create a new role',
  description: 'Create a new role with associated permissions',
  request: {
    body: {
      content: {
        'application/json': {
          schema: createRoleSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Role created successfully',
      content: {
        'application/json': {
          schema: z.object({}),
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

export const getRolesDoc = createRoute({
  tags: ['Role'],
  method: 'get',
  path: '/',
  summary: 'Get all roles',
  description: 'Retrieve all roles with pagination',
  request: {
    query: z.object({
      page: z.string().transform(Number).optional().default('1'),
      limit: z.string().transform(Number).optional().default('10'),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved roles',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
          }),
        },
      },
    },
  },
});

export const getRoleByIdDoc = createRoute({
  tags: ['Role'],
  method: 'get',
  path: '/{id}',
  summary: 'Get role by ID',
  description: 'Retrieve a specific role by ID',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved role',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    404: {
      description: 'Role not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const updateRoleDoc = createRoute({
  tags: ['Role'],
  method: 'patch',
  path: '/{id}',
  summary: 'Update role',
  description: 'Update role information',
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        'application/json': {
          schema: updateRoleSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Role updated successfully',
      content: {
        'application/json': {
          schema: z.object({}),
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

export const deleteRoleDoc = createRoute({
  tags: ['Role'],
  method: 'delete',
  path: '/{id}',
  summary: 'Delete role',
  description: 'Delete a role (only if no users are assigned)',
  request: {
    params: z.object({
      id: z.string(),
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

export const assignRoleToUserDoc = createRoute({
  tags: ['Role', 'User'],
  method: 'post',
  path: '/roles/assign',
  summary: 'Assign role to user',
  description:
    "Assign a specific role to a user. This will update the user's roleId.",
  request: {
    body: {
      content: {
        'application/json': {
          schema: assignRoleToUserSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Role assigned to user successfully',
      content: {
        'application/json': {
          schema: z.object({}),
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
