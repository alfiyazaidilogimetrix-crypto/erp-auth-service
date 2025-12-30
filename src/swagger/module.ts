import { createRoute, z } from '@hono/zod-openapi';
import {
  createModuleSchema,
  updateModuleSchema,
  moduleResponseSchema,
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

// Module Routes
export const createModuleDoc = createRoute({
  tags: ['Module'],
  method: 'post',
  path: '/',
  summary: 'Create a new module',
  description: 'Create a new module for the system',
  request: {
    body: {
      content: {
        'application/json': {
          schema: createModuleSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Module created successfully',
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
      description: 'Conflict - module name already exists',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});

export const getModulesDoc = createRoute({
  tags: ['Module'],
  method: 'get',
  path: '/',
  summary: 'Get all modules',
  description: 'Retrieve all modules with pagination',
  request: {
    query: z.object({
      page: z.string().transform(Number).optional().default('1'),
      limit: z.string().transform(Number).optional().default('10'),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved modules',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const getModuleByIdDoc = createRoute({
  tags: ['Module'],
  method: 'get',
  path: '/{id}',
  summary: 'Get module by ID',
  description: 'Retrieve a specific module by ID',
  request: {
    params: z.object({
      id: z.string().transform(Number),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved module',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    404: {
      description: 'Module not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const updateModuleDoc = createRoute({
  tags: ['Module'],
  method: 'patch',
  path: '/{id}',
  summary: 'Update module',
  description: 'Update module information',
  request: {
    params: z.object({
      id: z.string().transform(Number),
    }),
    body: {
      content: {
        'application/json': {
          schema: updateModuleSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Module updated successfully',
      content: {
        'application/json': {
          schema: z.object({}),
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

export const deleteModuleDoc = createRoute({
  tags: ['Module'],
  method: 'delete',
  path: '/{id}',
  summary: 'Delete module',
  description: 'Delete a module (only if no permissions are assigned)',
  request: {
    params: z.object({
      id: z.string().transform(Number),
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
