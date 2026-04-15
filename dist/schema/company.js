"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyResponseSchema = exports.updateCompanySchema = exports.createCompanySchema = exports.legalProofSchema = exports.ownerDetailsSchema = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
exports.ownerDetailsSchema = zod_openapi_1.z
    .object({
    owner_name: zod_openapi_1.z.string().min(1, 'Owner name is required'),
    owner_father_name: zod_openapi_1.z.string().min(1, 'Owner father name is required'),
    dob: zod_openapi_1.z.string().datetime(),
    pincode: zod_openapi_1.z.string().min(6).max(6),
    state: zod_openapi_1.z.string().min(1),
    district: zod_openapi_1.z.string().min(1),
    address: zod_openapi_1.z.string().min(1),
    owner_phone_number: zod_openapi_1.z.string().min(10),
    owner_mail_id: zod_openapi_1.z.string().email(),
})
    .openapi({
    example: {
        owner_name: 'John Doe',
        owner_father_name: 'Richard Doe',
        dob: '1980-01-01T00:00:00.000Z',
        pincode: '110001',
        state: 'Delhi',
        district: 'Central Delhi',
        address: '123 Street Name',
        owner_phone_number: '9876543210',
        owner_mail_id: 'john.doe@example.com',
    },
});
exports.legalProofSchema = zod_openapi_1.z
    .array(zod_openapi_1.z.object({
    file_ids: zod_openapi_1.z.array(zod_openapi_1.z.coerce.number()),
    file_type: zod_openapi_1.z.string(),
}))
    .openapi({
    example: [
        {
            file_ids: [1, 2],
            file_type: 'PAN',
        },
    ],
});
exports.createCompanySchema = zod_openapi_1.z
    .object({
    company_name: zod_openapi_1.z.string().min(1, 'Company name is required'),
    pincode: zod_openapi_1.z.string().min(6).max(6),
    state: zod_openapi_1.z.string().min(1),
    district: zod_openapi_1.z.string().min(1),
    address: zod_openapi_1.z.string().min(1),
    company_mail_id: zod_openapi_1.z.string().email(),
    company_phone_number: zod_openapi_1.z.string().min(10),
    company_gst_number: zod_openapi_1.z.string().min(15).max(15),
    business_type: zod_openapi_1.z.string().min(1),
    user_id: zod_openapi_1.z.number().int().positive(),
    ownerDetails: exports.ownerDetailsSchema.optional(),
    legal_proof: exports.legalProofSchema.optional(),
})
    .openapi({
    required: [
        'company_name',
        'pincode',
        'state',
        'district',
        'address',
        'company_mail_id',
        'company_phone_number',
        'company_gst_number',
        'business_type',
        'user_id',
    ],
    example: {
        company_name: 'Logimetrix ERP Solutions',
        pincode: '110001',
        state: 'Delhi',
        district: 'Central Delhi',
        address: '456 Business Park',
        company_mail_id: 'contact@logimetrix.com',
        company_phone_number: '0112345678',
        company_gst_number: '07AAAAA0000A1Z5',
        business_type: 'Software Development',
        user_id: 1,
        ownerDetails: {
            owner_name: 'John Doe',
            owner_father_name: 'Richard Doe',
            dob: '1980-01-01T00:00:00.000Z',
            pincode: '110001',
            state: 'Delhi',
            district: 'Central Delhi',
            address: '123 Street Name',
            owner_phone_number: '9876543210',
            owner_mail_id: 'john.doe@example.com',
        },
        legal_proof: [
            {
                file_ids: [1, 2],
                file_type: 'PAN',
            },
        ],
    },
});
exports.updateCompanySchema = zod_openapi_1.z
    .object({
    company_name: zod_openapi_1.z.string().min(1).optional(),
    pincode: zod_openapi_1.z.string().min(6).max(6).optional(),
    state: zod_openapi_1.z.string().min(1).optional(),
    district: zod_openapi_1.z.string().min(1).optional(),
    address: zod_openapi_1.z.string().min(1).optional(),
    company_mail_id: zod_openapi_1.z.string().email().optional(),
    company_phone_number: zod_openapi_1.z.string().min(10).optional(),
    company_gst_number: zod_openapi_1.z.string().min(15).max(15).optional(),
    business_type: zod_openapi_1.z.string().min(1).optional(),
    ownerDetails: exports.ownerDetailsSchema.partial().optional(),
    legal_proof: exports.legalProofSchema.optional(),
})
    .openapi({
    example: {
        company_name: 'Logimetrix ERP Solutions Updated',
        address: '789 New Business Park',
        legal_proof: [
            {
                file_ids: [1, 3],
                file_type: 'GST',
            },
        ],
    },
});
exports.companyResponseSchema = zod_openapi_1.z
    .object({
    id: zod_openapi_1.z.number(),
    company_name: zod_openapi_1.z.string(),
    pincode: zod_openapi_1.z.string(),
    state: zod_openapi_1.z.string(),
    district: zod_openapi_1.z.string(),
    address: zod_openapi_1.z.string(),
    company_mail_id: zod_openapi_1.z.string(),
    company_phone_number: zod_openapi_1.z.string(),
    company_gst_number: zod_openapi_1.z.string(),
    business_type: zod_openapi_1.z.string(),
    user_id: zod_openapi_1.z.number(),
    owner_id: zod_openapi_1.z.number().nullable(),
    ownerDetails: exports.ownerDetailsSchema.extend({ id: zod_openapi_1.z.number() }).nullable().optional(),
    companyFiles: zod_openapi_1.z
        .array(zod_openapi_1.z.object({
        id: zod_openapi_1.z.number(),
        file_id: zod_openapi_1.z.number(),
        file_type: zod_openapi_1.z.string(),
        file: zod_openapi_1.z.any().optional(), // Or define a more specific schema if needed
    }))
        .optional(),
    created_at: zod_openapi_1.z.string().datetime(),
    updated_at: zod_openapi_1.z.string().datetime(),
})
    .openapi({
    example: {
        id: 1,
        company_name: 'Logimetrix ERP Solutions',
        pincode: '110001',
        state: 'Delhi',
        district: 'Central Delhi',
        address: '456 Business Park',
        company_mail_id: 'contact@logimetrix.com',
        company_phone_number: '0112345678',
        company_gst_number: '07AAAAA0000A1Z5',
        business_type: 'Software Development',
        user_id: 1,
        owner_id: 1,
        ownerDetails: {
            id: 1,
            owner_name: 'John Doe',
            owner_father_name: 'Richard Doe',
            dob: '1980-01-01T00:00:00.000Z',
            pincode: '110001',
            state: 'Delhi',
            district: 'Central Delhi',
            address: '123 Street Name',
            owner_phone_number: '9876543210',
            owner_mail_id: 'john.doe@example.com',
        },
        companyFiles: [
            {
                id: 1,
                file_id: 1,
                file_type: 'PAN',
            },
        ],
        created_at: '2024-01-15T10:30:00.000Z',
        updated_at: '2024-01-15T10:30:00.000Z',
    },
});
