import { createRoute, z } from '@hono/zod-openapi';
import {
  createHeadOfficeSchema,
  updateHeadOfficeSchema,
  headOfficeResponseSchema,
} from '@schema/headOffice';

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

// HeadOffice Routes
export const createHeadOfficeDoc = createRoute({
  tags: ['HeadOffice'],
  method: 'post',
  path: '/',
  summary: 'Create a new head office',
  description: 'Create a new head office for a company',
  request: {
    body: {
      content: {
        'application/json': {
          schema: createHeadOfficeSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Head office created successfully',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            headOffice: headOfficeResponseSchema,
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
  },
});

export const getHeadOfficesDoc = createRoute({
  tags: ['HeadOffice'],
  method: 'get',
  path: '/',
  summary: 'Get all head offices',
  description: 'Retrieve all head offices with pagination',
  request: {
    query: z.object({
      page: z.string().transform(Number).optional().default('1'),
      limit: z.string().transform(Number).optional().default('10'),
      company_id: z.string().optional(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved head offices',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            headOffices: z.array(headOfficeResponseSchema),
            total: z.number(),
            page: z.number(),
            limit: z.number(),
          }),
        },
      },
    },
  },
});

export const getHeadOfficeByIdDoc = createRoute({
  tags: ['HeadOffice'],
  method: 'get',
  path: '/{id}',
  summary: 'Get head office by ID',
  description: 'Retrieve a specific head office by ID',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved head office',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            headOffice: headOfficeResponseSchema,
          }),
        },
      },
    },
    404: {
      description: 'Head office not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateHeadOfficeDoc = createRoute({
  tags: ['HeadOffice'],
  method: 'patch',
  path: '/{id}',
  summary: 'Update head office',
  description: 'Update head office information',
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        'application/json': {
          schema: updateHeadOfficeSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Head office updated successfully',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            headOffice: headOfficeResponseSchema,
          }),
        },
      },
    },
    404: {
      description: 'Head office not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteHeadOfficeDoc = createRoute({
  tags: ['HeadOffice'],
  method: 'delete',
  path: '/{id}',
  summary: 'Delete head office',
  description: 'Delete a head office',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Head office deleted successfully',
      content: {
        'application/json': {
          schema: SuccessResponseSchema,
        },
      },
    },
    404: {
      description: 'Head office not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});
