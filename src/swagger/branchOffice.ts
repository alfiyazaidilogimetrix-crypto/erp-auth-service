import { createRoute, z } from '@hono/zod-openapi';
import {
  createBranchOfficeSchema,
  updateBranchOfficeSchema,
  branchOfficeResponseSchema,
} from '@schema/branchOffice';

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

// BranchOffice Routes
export const createBranchOfficeDoc = createRoute({
  tags: ['BranchOffice'],
  method: 'post',
  path: '/',
  summary: 'Create a new branch office',
  description: 'Create a new branch office for a company and head office',
  request: {
    body: {
      content: {
        'application/json': {
          schema: createBranchOfficeSchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Branch office created successfully',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            branchOffice: branchOfficeResponseSchema,
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

export const getBranchOfficesDoc = createRoute({
  tags: ['BranchOffice'],
  method: 'get',
  path: '/',
  summary: 'Get all branch offices',
  description: 'Retrieve all branch offices with pagination',
  request: {
    query: z.object({
      page: z.string().transform(Number).optional().default('1'),
      limit: z.string().transform(Number).optional().default('10'),
      company_id: z.string().optional(),
      head_office_id: z.string().optional(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved branch offices',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            branchOffices: z.array(branchOfficeResponseSchema),
            total: z.number(),
            page: z.number(),
            limit: z.number(),
          }),
        },
      },
    },
  },
});

export const getBranchOfficeByIdDoc = createRoute({
  tags: ['BranchOffice'],
  method: 'get',
  path: '/{id}',
  summary: 'Get branch office by ID',
  description: 'Retrieve a specific branch office by ID',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved branch office',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            branchOffice: branchOfficeResponseSchema,
          }),
        },
      },
    },
    404: {
      description: 'Branch office not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateBranchOfficeDoc = createRoute({
  tags: ['BranchOffice'],
  method: 'patch',
  path: '/{id}',
  summary: 'Update branch office',
  description: 'Update branch office information',
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        'application/json': {
          schema: updateBranchOfficeSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Branch office updated successfully',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            branchOffice: branchOfficeResponseSchema,
          }),
        },
      },
    },
    404: {
      description: 'Branch office not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});

export const deleteBranchOfficeDoc = createRoute({
  tags: ['BranchOffice'],
  method: 'delete',
  path: '/{id}',
  summary: 'Delete branch office',
  description: 'Delete a branch office',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Branch office deleted successfully',
      content: {
        'application/json': {
          schema: SuccessResponseSchema,
        },
      },
    },
    404: {
      description: 'Branch office not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});
