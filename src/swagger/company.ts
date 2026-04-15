import { createRoute, z } from '@hono/zod-openapi';
import {
  createCompanySchema,
  updateCompanySchema,
  companyResponseSchema,
} from '@schema/company';

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

// Company Routes
export const createCompanyDoc = createRoute({
  tags: ['Company'],
  method: 'post',
  path: '/',
  summary: 'Create a new company',
  description: 'Create a new company with owner details',
  request: {
    body: {
      content: {
        'application/json': {
          schema: createCompanySchema,
        },
      },
    },
  },
  responses: {
    201: {
      description: 'Company created successfully',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            company: companyResponseSchema,
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

export const getCompaniesDoc = createRoute({
  tags: ['Company'],
  method: 'get',
  path: '/',
  summary: 'Get all companies',
  description: 'Retrieve all companies with pagination',
  request: {
    query: z.object({
      page: z.string().transform(Number).optional().default('1'),
      limit: z.string().transform(Number).optional().default('10'),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved companies',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            companies: z.array(companyResponseSchema),
            total: z.number(),
            page: z.number(),
            limit: z.number(),
          }),
        },
      },
    },
  },
});

export const getCompanyByIdDoc = createRoute({
  tags: ['Company'],
  method: 'get',
  path: '/{id}',
  summary: 'Get company by ID',
  description: 'Retrieve a specific company by ID',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved company',
      content: {
        'application/json': {
          schema: z.object({
            status: z.number(),
            message: z.string(),
            company: companyResponseSchema,
          }),
        },
      },
    },
    404: {
      description: 'Company not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});

export const updateCompanyDoc = createRoute({
  tags: ['Company'],
  method: 'patch',
  path: '/{id}',
  summary: 'Update company',
  description: 'Update company and owner details information',
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        'application/json': {
          schema: updateCompanySchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Company updated successfully',
      content: {
        'application/json': {
          schema: z.object({
          }),
        },
      },
    },
    404: {
      description: 'Company not found',
      content: {
        'application/json': {
          schema: z.object({
          }),
        },
      },
    },
  },
});

export const deleteCompanyDoc = createRoute({
  tags: ['Company'],
  method: 'delete',
  path: '/{id}',
  summary: 'Delete company',
  description: 'Delete a company and its owner details',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Company deleted successfully',
      content: {
        'application/json': {
          schema: SuccessResponseSchema,
        },
      },
    },
    404: {
      description: 'Company not found',
      content: {
        'application/json': {
          schema: ErrorResponseSchema,
        },
      },
    },
  },
});
