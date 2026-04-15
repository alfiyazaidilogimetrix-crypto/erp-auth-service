"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBranchOfficeDoc = exports.updateBranchOfficeDoc = exports.getBranchOfficeByIdDoc = exports.getBranchOfficesDoc = exports.createBranchOfficeDoc = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
var branchOffice_1 = require("@schema/branchOffice");
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
// BranchOffice Routes
exports.createBranchOfficeDoc = (0, zod_openapi_1.createRoute)({
    tags: ['BranchOffice'],
    method: 'post',
    path: '/',
    summary: 'Create a new branch office',
    description: 'Create a new branch office for a company and head office',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: branchOffice_1.createBranchOfficeSchema,
                },
            },
        },
    },
    responses: {
        201: {
            description: 'Branch office created successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        branchOffice: branchOffice_1.branchOfficeResponseSchema,
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
exports.getBranchOfficesDoc = (0, zod_openapi_1.createRoute)({
    tags: ['BranchOffice'],
    method: 'get',
    path: '/',
    summary: 'Get all branch offices',
    description: 'Retrieve all branch offices with pagination',
    request: {
        query: zod_openapi_1.z.object({
            page: zod_openapi_1.z.string().transform(Number).optional().default('1'),
            limit: zod_openapi_1.z.string().transform(Number).optional().default('10'),
            company_id: zod_openapi_1.z.string().optional(),
            head_office_id: zod_openapi_1.z.string().optional(),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved branch offices',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        branchOffices: zod_openapi_1.z.array(branchOffice_1.branchOfficeResponseSchema),
                        total: zod_openapi_1.z.number(),
                        page: zod_openapi_1.z.number(),
                        limit: zod_openapi_1.z.number(),
                    }),
                },
            },
        },
    },
});
exports.getBranchOfficeByIdDoc = (0, zod_openapi_1.createRoute)({
    tags: ['BranchOffice'],
    method: 'get',
    path: '/{id}',
    summary: 'Get branch office by ID',
    description: 'Retrieve a specific branch office by ID',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved branch office',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        branchOffice: branchOffice_1.branchOfficeResponseSchema,
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
exports.updateBranchOfficeDoc = (0, zod_openapi_1.createRoute)({
    tags: ['BranchOffice'],
    method: 'patch',
    path: '/{id}',
    summary: 'Update branch office',
    description: 'Update branch office information',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
        body: {
            content: {
                'application/json': {
                    schema: branchOffice_1.updateBranchOfficeSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Branch office updated successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        branchOffice: branchOffice_1.branchOfficeResponseSchema,
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
exports.deleteBranchOfficeDoc = (0, zod_openapi_1.createRoute)({
    tags: ['BranchOffice'],
    method: 'delete',
    path: '/{id}',
    summary: 'Delete branch office',
    description: 'Delete a branch office',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
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
