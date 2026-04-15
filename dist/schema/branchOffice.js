"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.branchOfficeResponseSchema = exports.updateBranchOfficeSchema = exports.createBranchOfficeSchema = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
exports.createBranchOfficeSchema = zod_openapi_1.z
    .object({
    company_id: zod_openapi_1.z.number().int().positive(),
    head_office_id: zod_openapi_1.z.number().int().positive(),
    office_name: zod_openapi_1.z.string().min(1, 'Office name is required'),
    office_id: zod_openapi_1.z.string().min(1, 'Office ID is required'),
    address: zod_openapi_1.z.string().min(1),
    pincode: zod_openapi_1.z.string().min(6).max(6),
    state: zod_openapi_1.z.string().min(1),
    city: zod_openapi_1.z.string().min(1),
    phone_number: zod_openapi_1.z.string().min(10),
    mail_id: zod_openapi_1.z.string().email(),
    office_incharge_name: zod_openapi_1.z.string().optional().nullable(),
    office_incharge_phone_number: zod_openapi_1.z.string().optional().nullable(),
    office_incharge_mail_id: zod_openapi_1.z.string().email().optional().nullable(),
})
    .openapi({
    required: [
        'company_id',
        'head_office_id',
        'office_name',
        'office_id',
        'address',
        'pincode',
        'state',
        'city',
        'phone_number',
        'mail_id',
    ],
    example: {
        company_id: 1,
        head_office_id: 1,
        office_name: 'Local Branch Office',
        office_id: 'BO-001',
        address: '456 Branch Road',
        pincode: '110002',
        state: 'Delhi',
        city: 'Delhi',
        phone_number: '0111234567',
        mail_id: 'branch@logimetrix.com',
        office_incharge_name: 'Bob Wilson',
        office_incharge_phone_number: '9777766666',
        office_incharge_mail_id: 'bob@logimetrix.com',
    },
});
exports.updateBranchOfficeSchema = zod_openapi_1.z
    .object({
    company_id: zod_openapi_1.z.number().int().positive().optional(),
    head_office_id: zod_openapi_1.z.number().int().positive().optional(),
    office_name: zod_openapi_1.z.string().min(1).optional(),
    office_id: zod_openapi_1.z.string().min(1).optional(),
    address: zod_openapi_1.z.string().min(1).optional(),
    pincode: zod_openapi_1.z.string().min(6).max(6).optional(),
    state: zod_openapi_1.z.string().min(1).optional(),
    city: zod_openapi_1.z.string().min(1).optional(),
    phone_number: zod_openapi_1.z.string().min(10).optional(),
    mail_id: zod_openapi_1.z.string().email().optional(),
    office_incharge_name: zod_openapi_1.z.string().optional().nullable(),
    office_incharge_phone_number: zod_openapi_1.z.string().optional().nullable(),
    office_incharge_mail_id: zod_openapi_1.z.string().email().optional().nullable(),
})
    .openapi({
    example: {
        office_name: 'Local Branch Office Updated',
        address: '789 New Branch Road',
    },
});
exports.branchOfficeResponseSchema = zod_openapi_1.z
    .object({
    id: zod_openapi_1.z.number(),
    company_id: zod_openapi_1.z.number(),
    head_office_id: zod_openapi_1.z.number(),
    office_name: zod_openapi_1.z.string(),
    office_id: zod_openapi_1.z.string(),
    address: zod_openapi_1.z.string(),
    pincode: zod_openapi_1.z.string(),
    state: zod_openapi_1.z.string(),
    city: zod_openapi_1.z.string(),
    phone_number: zod_openapi_1.z.string(),
    mail_id: zod_openapi_1.z.string(),
    office_incharge_name: zod_openapi_1.z.string().nullable(),
    office_incharge_phone_number: zod_openapi_1.z.string().nullable(),
    office_incharge_mail_id: zod_openapi_1.z.string().nullable(),
    created_at: zod_openapi_1.z.string().datetime(),
    updated_at: zod_openapi_1.z.string().datetime(),
})
    .openapi({
    example: {
        id: 1,
        company_id: 1,
        head_office_id: 1,
        office_name: 'Local Branch Office',
        office_id: 'BO-001',
        address: '456 Branch Road',
        pincode: '110002',
        state: 'Delhi',
        city: 'Delhi',
        phone_number: '0111234567',
        mail_id: 'branch@logimetrix.com',
        office_incharge_name: 'Bob Wilson',
        office_incharge_phone_number: '9777766666',
        office_incharge_mail_id: 'bob@logimetrix.com',
        created_at: '2024-01-15T10:30:00.000Z',
        updated_at: '2024-01-15T10:30:00.000Z',
    },
});
