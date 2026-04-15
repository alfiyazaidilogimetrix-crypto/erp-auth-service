"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteHeadOfficeDoc = exports.updateHeadOfficeDoc = exports.getHeadOfficeByIdDoc = exports.getHeadOfficesDoc = exports.createHeadOfficeDoc = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
var headOffice_1 = require("@schema/headOffice");
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
// HeadOffice Routes
exports.createHeadOfficeDoc = (0, zod_openapi_1.createRoute)({
    tags: ['HeadOffice'],
    method: 'post',
    path: '/',
    summary: 'Create a new head office',
    description: 'Create a new head office for a company',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: headOffice_1.createHeadOfficeSchema,
                },
            },
        },
    },
    responses: {
        201: {
            description: 'Head office created successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        headOffice: headOffice_1.headOfficeResponseSchema,
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
exports.getHeadOfficesDoc = (0, zod_openapi_1.createRoute)({
    tags: ['HeadOffice'],
    method: 'get',
    path: '/',
    summary: 'Get all head offices',
    description: 'Retrieve all head offices with pagination',
    request: {
        query: zod_openapi_1.z.object({
            page: zod_openapi_1.z.string().transform(Number).optional().default('1'),
            limit: zod_openapi_1.z.string().transform(Number).optional().default('10'),
            company_id: zod_openapi_1.z.string().optional(),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved head offices',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        headOffices: zod_openapi_1.z.array(headOffice_1.headOfficeResponseSchema),
                        total: zod_openapi_1.z.number(),
                        page: zod_openapi_1.z.number(),
                        limit: zod_openapi_1.z.number(),
                    }),
                },
            },
        },
    },
});
exports.getHeadOfficeByIdDoc = (0, zod_openapi_1.createRoute)({
    tags: ['HeadOffice'],
    method: 'get',
    path: '/{id}',
    summary: 'Get head office by ID',
    description: 'Retrieve a specific head office by ID',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved head office',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        headOffice: headOffice_1.headOfficeResponseSchema,
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
exports.updateHeadOfficeDoc = (0, zod_openapi_1.createRoute)({
    tags: ['HeadOffice'],
    method: 'patch',
    path: '/{id}',
    summary: 'Update head office',
    description: 'Update head office information',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
        body: {
            content: {
                'application/json': {
                    schema: headOffice_1.updateHeadOfficeSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Head office updated successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                        headOffice: headOffice_1.headOfficeResponseSchema,
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
exports.deleteHeadOfficeDoc = (0, zod_openapi_1.createRoute)({
    tags: ['HeadOffice'],
    method: 'delete',
    path: '/{id}',
    summary: 'Delete head office',
    description: 'Delete a head office',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
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
