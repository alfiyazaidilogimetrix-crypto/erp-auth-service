"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headOfficeResponseSchema = exports.updateHeadOfficeSchema = exports.createHeadOfficeSchema = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
exports.createHeadOfficeSchema = zod_openapi_1.z
    .object({
    company_id: zod_openapi_1.z.number().int().positive(),
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
        office_name: 'Main Head Office',
        office_id: 'HO-001',
        address: '123 Head Street',
        pincode: '110001',
        state: 'Delhi',
        city: 'Delhi',
        phone_number: '0119876543',
        mail_id: 'ho@logimetrix.com',
        office_incharge_name: 'Jane Smith',
        office_incharge_phone_number: '9888877777',
        office_incharge_mail_id: 'jane@logimetrix.com',
    },
});
exports.updateHeadOfficeSchema = zod_openapi_1.z
    .object({
    company_id: zod_openapi_1.z.number().int().positive().optional(),
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
        office_name: 'Main Head Office Updated',
        city: 'New Delhi',
    },
});
exports.headOfficeResponseSchema = zod_openapi_1.z
    .object({
    id: zod_openapi_1.z.number(),
    company_id: zod_openapi_1.z.number(),
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
        office_name: 'Main Head Office',
        office_id: 'HO-001',
        address: '123 Head Street',
        pincode: '110001',
        state: 'Delhi',
        city: 'Delhi',
        phone_number: '0119876543',
        mail_id: 'ho@logimetrix.com',
        office_incharge_name: 'Jane Smith',
        office_incharge_phone_number: '9888877777',
        office_incharge_mail_id: 'jane@logimetrix.com',
        created_at: '2024-01-15T10:30:00.000Z',
        updated_at: '2024-01-15T10:30:00.000Z',
    },
});
