"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompanyDoc = exports.updateCompanyDoc = exports.getCompanyByIdDoc = exports.getCompaniesDoc = exports.createCompanyDoc = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
var company_1 = require("@schema/company");
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
// Company Routes
exports.createCompanyDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Company'],
    method: 'post',
    path: '/',
    summary: 'Create a new company',
    description: 'Create a new company with owner details',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: company_1.createCompanySchema,
                },
            },
        },
    },
    responses: {
        201: {
            description: 'Company created successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        company: company_1.companyResponseSchema,
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
exports.getCompaniesDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Company'],
    method: 'get',
    path: '/',
    summary: 'Get all companies',
    description: 'Retrieve all companies with pagination',
    request: {
        query: zod_openapi_1.z.object({
            page: zod_openapi_1.z.string().transform(Number).optional().default('1'),
            limit: zod_openapi_1.z.string().transform(Number).optional().default('10'),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved companies',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        companies: zod_openapi_1.z.array(company_1.companyResponseSchema),
                        total: zod_openapi_1.z.number(),
                        page: zod_openapi_1.z.number(),
                        limit: zod_openapi_1.z.number(),
                    }),
                },
            },
        },
    },
});
exports.getCompanyByIdDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Company'],
    method: 'get',
    path: '/{id}',
    summary: 'Get company by ID',
    description: 'Retrieve a specific company by ID',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved company',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        company: company_1.companyResponseSchema,
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
exports.updateCompanyDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Company'],
    method: 'patch',
    path: '/{id}',
    summary: 'Update company',
    description: 'Update company and owner details information',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
        body: {
            content: {
                'application/json': {
                    schema: company_1.updateCompanySchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Company updated successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'Company not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.deleteCompanyDoc = (0, zod_openapi_1.createRoute)({
    tags: ['Company'],
    method: 'delete',
    path: '/{id}',
    summary: 'Delete company',
    description: 'Delete a company and its owner details',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
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
