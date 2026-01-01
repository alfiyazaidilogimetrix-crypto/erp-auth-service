"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bulkUpdateVendorStatusSchema = exports.deactivateVendorSchema = exports.suspendVendorSchema = exports.activateVendorSchema = exports.vendorStatsResponseSchema = exports.vendorPaginationResponseSchema = exports.vendorQueryParamsSchema = exports.vendorFilterSchema = exports.vendorListResponseSchema = exports.vendorResponseSchema = exports.updateVendorSchema = exports.createVendorSchema = exports.SupplyStatusSchema = exports.VendorTypeSchema = exports.VendorStatusSchema = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
// Enums
exports.VendorStatusSchema = zod_openapi_1.z.enum(['ACTIVE', 'INACTIVE', 'SUSPENDED']);
exports.VendorTypeSchema = zod_openapi_1.z.enum(['DIRECT', 'INVENTORY']);
exports.SupplyStatusSchema = zod_openapi_1.z.enum([
    'PENDING',
    'APPROVED',
    'IN_TRANSIT',
    'DELIVERED',
    'REJECTED',
]);
// Vendor Schemas
exports.createVendorSchema = zod_openapi_1.z
    .object({
    vendor_name: zod_openapi_1.z.string().min(1, 'Vendor name is required').max(200),
    category: zod_openapi_1.z.string().max(100).optional().nullable(),
    contact_number: zod_openapi_1.z
        .string()
        .max(20)
        .optional()
        .nullable()
        .refine(function (val) { return !val || /^[\d\s\-\+\(\)]+$/.test(val); }, {
        message: 'Invalid phone number format',
    }),
    email_address: zod_openapi_1.z
        .string()
        .email('Invalid email format')
        .max(100)
        .optional()
        .nullable(),
    address: zod_openapi_1.z.string().max(500).optional().nullable(),
    gst_number: zod_openapi_1.z
        .string()
        .max(50)
        .optional()
        .nullable()
        .refine(function (val) {
        return !val ||
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(val);
    }, { message: 'Invalid GST number format' }),
    pan_number: zod_openapi_1.z
        .string()
        .max(10)
        .optional()
        .nullable()
        .refine(function (val) { return !val || /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(val); }, {
        message: 'Invalid PAN number format',
    }),
    status: exports.VendorStatusSchema.optional().default('ACTIVE'),
})
    .openapi({
    required: ['vendor_name'],
    example: {
        vendor_name: 'ABC Suppliers Pvt. Ltd.',
        category: 'Construction Materials',
        contact_number: '+91-9876543210',
        email_address: 'contact@abcsuppliers.com',
        address: '123 Industrial Area, Mumbai, Maharashtra',
        gst_number: '27ABCDE1234F1Z5',
        pan_number: 'ABCDE1234F',
        status: 'ACTIVE',
    },
});
exports.updateVendorSchema = zod_openapi_1.z
    .object({
    vendor_name: zod_openapi_1.z.string().min(1).max(200).optional(),
    category: zod_openapi_1.z.string().max(100).optional().nullable(),
    contact_number: zod_openapi_1.z
        .string()
        .max(20)
        .optional()
        .nullable()
        .refine(function (val) {
        return val === null || val === undefined || /^[\d\s\-\+\(\)]+$/.test(val);
    }, { message: 'Invalid phone number format' }),
    email_address: zod_openapi_1.z
        .string()
        .email('Invalid email format')
        .max(100)
        .optional()
        .nullable(),
    address: zod_openapi_1.z.string().max(500).optional().nullable(),
    gst_number: zod_openapi_1.z
        .string()
        .max(50)
        .optional()
        .nullable()
        .refine(function (val) {
        return val === null ||
            val === undefined ||
            /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(val);
    }, { message: 'Invalid GST number format' }),
    pan_number: zod_openapi_1.z
        .string()
        .max(10)
        .optional()
        .nullable()
        .refine(function (val) {
        return val === null ||
            val === undefined ||
            /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(val);
    }, { message: 'Invalid PAN number format' }),
    status: exports.VendorStatusSchema.optional(),
})
    .openapi({
    example: {
        vendor_name: 'ABC Suppliers Private Limited',
        contact_number: '+91-9876543211',
        email_address: 'info@abcsuppliers.com',
        status: 'ACTIVE',
    },
});
exports.vendorResponseSchema = zod_openapi_1.z
    .object({
    id: zod_openapi_1.z.number().int().positive(),
    vendor_name: zod_openapi_1.z.string(),
    category: zod_openapi_1.z.string().nullable(),
    contact_number: zod_openapi_1.z.string().nullable(),
    email_address: zod_openapi_1.z.string().nullable(),
    address: zod_openapi_1.z.string().nullable(),
    gst_number: zod_openapi_1.z.string().nullable(),
    pan_number: zod_openapi_1.z.string().nullable(),
    status: exports.VendorStatusSchema,
    created_at: zod_openapi_1.z.string().datetime(),
    updated_at: zod_openapi_1.z.string().datetime(),
})
    .openapi({
    example: {
        id: 1,
        vendor_name: 'ABC Suppliers Pvt. Ltd.',
        category: 'Construction Materials',
        contact_number: '+91-9876543210',
        email_address: 'contact@abcsuppliers.com',
        address: '123 Industrial Area, Mumbai, Maharashtra',
        gst_number: '27ABCDE1234F1Z5',
        pan_number: 'ABCDE1234F',
        status: 'ACTIVE',
        created_at: '2024-01-15T10:30:00.000Z',
        updated_at: '2024-01-15T14:45:00.000Z',
    },
});
exports.vendorListResponseSchema = zod_openapi_1.z.array(exports.vendorResponseSchema).openapi({
    example: [
        {
            id: 1,
            vendor_name: 'ABC Suppliers Pvt. Ltd.',
            category: 'Construction Materials',
            contact_number: '+91-9876543210',
            email_address: 'contact@abcsuppliers.com',
            address: '123 Industrial Area, Mumbai, Maharashtra',
            gst_number: '27ABCDE1234F1Z5',
            pan_number: 'ABCDE1234F',
            status: 'ACTIVE',
            created_at: '2024-01-15T10:30:00.000Z',
            updated_at: '2024-01-15T14:45:00.000Z',
        },
        {
            id: 2,
            vendor_name: 'XYZ Steel Corporation',
            category: 'Steel Products',
            contact_number: '+91-9876543211',
            email_address: 'sales@xyzsteel.com',
            address: '456 Steel Market, Delhi',
            gst_number: '07XYZAB5678C2D9',
            pan_number: 'XYZAB5678C',
            status: 'ACTIVE',
            created_at: '2024-01-16T09:15:00.000Z',
            updated_at: '2024-01-16T09:15:00.000Z',
        },
    ],
});
// Filter Schemas
// Filter Schemas
exports.vendorFilterSchema = zod_openapi_1.z
    .object({
    status: exports.VendorStatusSchema.optional(),
    category: zod_openapi_1.z.string().optional(),
    search: zod_openapi_1.z.string().optional(),
    start_date: zod_openapi_1.z.string().datetime().optional(),
    end_date: zod_openapi_1.z.string().datetime().optional(),
    has_gst: zod_openapi_1.z.boolean().optional(),
})
    .openapi({
    example: {
        status: 'ACTIVE',
        category: 'Construction Materials',
        search: 'ABC',
        start_date: '2024-01-01T00:00:00.000Z',
        end_date: '2024-01-31T23:59:59.999Z',
    },
});
// Query Parameters Schema - FIXED VERSION
exports.vendorQueryParamsSchema = zod_openapi_1.z
    .object({
    page: zod_openapi_1.z
        .string()
        .optional()
        .transform(function (val) { return (val ? parseInt(val) : 1); }),
    limit: zod_openapi_1.z
        .string()
        .optional()
        .transform(function (val) { return (val ? parseInt(val) : 20); }),
    sort: zod_openapi_1.z
        .enum(['created_at', 'updated_at', 'vendor_name', 'status'])
        .optional()
        .default('created_at'),
    order: zod_openapi_1.z.enum(['asc', 'desc']).optional().default('desc'),
    include: zod_openapi_1.z.enum(['supplies', 'pos', 'stats', 'all']).optional(),
    status: exports.VendorStatusSchema.optional(),
    category: zod_openapi_1.z.string().optional(),
    search: zod_openapi_1.z.string().optional(),
    start_date: zod_openapi_1.z.string().datetime().optional(),
    end_date: zod_openapi_1.z.string().datetime().optional(),
    has_gst: zod_openapi_1.z.boolean().optional(),
})
    .openapi({
    example: {
        page: '1',
        limit: '20',
        sort: 'vendor_name',
        order: 'asc',
        status: 'ACTIVE',
        search: 'construction',
        include: 'stats',
    },
});
// Pagination Response Schema - FIXED VERSION
exports.vendorPaginationResponseSchema = zod_openapi_1.z
    .object({
    success: zod_openapi_1.z.boolean().default(true),
    data: exports.vendorListResponseSchema,
    pagination: zod_openapi_1.z.object({
        total: zod_openapi_1.z.number().int().nonnegative(),
        page: zod_openapi_1.z.number().int().positive(),
        limit: zod_openapi_1.z.number().int().positive(),
        pages: zod_openapi_1.z.number().int().nonnegative(),
        hasNext: zod_openapi_1.z.boolean(),
        hasPrev: zod_openapi_1.z.boolean(),
    }),
})
    .openapi({
    example: {
        success: true,
        data: [
            {
                id: 1,
                vendor_name: 'ABC Suppliers Pvt. Ltd.',
                category: 'Construction Materials',
                contact_number: '+91-9876543210',
                email_address: 'contact@abcsuppliers.com',
                address: '123 Industrial Area, Mumbai, Maharashtra',
                gst_number: '27ABCDE1234F1Z5',
                pan_number: 'ABCDE1234F',
                status: 'ACTIVE',
                created_at: '2024-01-15T10:30:00.000Z',
                updated_at: '2024-01-15T14:45:00.000Z',
            },
        ],
        pagination: {
            total: 25,
            page: 1,
            limit: 20,
            pages: 2,
            hasNext: true,
            hasPrev: false,
        },
    },
});
// Vendor Stats Schema - FIXED VERSION
exports.vendorStatsResponseSchema = zod_openapi_1.z
    .object({
    success: zod_openapi_1.z.boolean().default(true),
    total_vendors: zod_openapi_1.z.number().int().nonnegative(),
    active_vendors: zod_openapi_1.z.number().int().nonnegative(),
    inactive_vendors: zod_openapi_1.z.number().int().nonnegative(),
    suspended_vendors: zod_openapi_1.z.number().int().nonnegative(),
    by_category: zod_openapi_1.z.record(zod_openapi_1.z.string(), zod_openapi_1.z.number().int().nonnegative()),
    recent_vendors_count: zod_openapi_1.z.number().int().nonnegative(),
    vendors_without_gst: zod_openapi_1.z.number().int().nonnegative(),
    top_vendors_by_po: zod_openapi_1.z.array(zod_openapi_1.z.object({
        vendor_id: zod_openapi_1.z.number().int().positive(),
        vendor_name: zod_openapi_1.z.string(),
        po_count: zod_openapi_1.z.number().int().nonnegative(),
        total_amount: zod_openapi_1.z.string(),
    })),
})
    .openapi({
    example: {
        success: true,
        total_vendors: 50,
        active_vendors: 42,
        inactive_vendors: 5,
        suspended_vendors: 3,
        by_category: {
            'Construction Materials': 25,
            'Steel Products': 15,
            Electrical: 7,
            Plumbing: 3,
        },
        recent_vendors_count: 5,
        vendors_without_gst: 8,
        top_vendors_by_po: [
            {
                vendor_id: 1,
                vendor_name: 'ABC Suppliers Pvt. Ltd.',
                po_count: 15,
                total_amount: '1250000.00',
            },
            {
                vendor_id: 2,
                vendor_name: 'XYZ Steel Corporation',
                po_count: 12,
                total_amount: '980000.00',
            },
        ],
    },
});
// Status Change Schemas
exports.activateVendorSchema = zod_openapi_1.z
    .object({
    status: zod_openapi_1.z.literal('ACTIVE'),
    remarks: zod_openapi_1.z.string().max(500).optional().nullable(),
})
    .openapi({
    required: ['status'],
    example: {
        status: 'ACTIVE',
        remarks: 'Vendor reactivated after verification',
    },
});
exports.suspendVendorSchema = zod_openapi_1.z
    .object({
    status: zod_openapi_1.z.literal('SUSPENDED'),
    remarks: zod_openapi_1.z.string().min(1, 'Suspension reason is required').max(500),
})
    .openapi({
    required: ['status', 'remarks'],
    example: {
        status: 'SUSPENDED',
        remarks: 'Suspended due to payment issues',
    },
});
exports.deactivateVendorSchema = zod_openapi_1.z
    .object({
    status: zod_openapi_1.z.literal('INACTIVE'),
    remarks: zod_openapi_1.z.string().max(500).optional().nullable(),
})
    .openapi({
    required: ['status'],
    example: {
        status: 'INACTIVE',
        remarks: 'Vendor no longer supplying materials',
    },
});
// Bulk Operations
exports.bulkUpdateVendorStatusSchema = zod_openapi_1.z
    .object({
    vendor_ids: zod_openapi_1.z
        .array(zod_openapi_1.z.number().int().positive())
        .min(1, 'At least one vendor ID is required'),
    status: exports.VendorStatusSchema,
    remarks: zod_openapi_1.z.string().max(500).optional().nullable(),
})
    .openapi({
    required: ['vendor_ids', 'status'],
    example: {
        vendor_ids: [1, 2, 3],
        status: 'ACTIVE',
        remarks: 'Reactivated after system maintenance',
    },
});
