import { z } from '@hono/zod-openapi';

// Enums
export const VendorStatusSchema = z.enum(['ACTIVE', 'INACTIVE', 'SUSPENDED']);

export const VendorTypeSchema = z.enum(['DIRECT', 'INVENTORY']);

export const SupplyStatusSchema = z.enum([
  'PENDING',
  'APPROVED',
  'IN_TRANSIT',
  'DELIVERED',
  'REJECTED',
]);

// Vendor Schemas
export const createVendorSchema = z
  .object({
    vendor_name: z.string().min(1, 'Vendor name is required').max(200),
    category: z.string().max(100).optional().nullable(),
    contact_number: z
      .string()
      .max(20)
      .optional()
      .nullable()
      .refine((val) => !val || /^[\d\s\-\+\(\)]+$/.test(val), {
        message: 'Invalid phone number format',
      }),
    email_address: z
      .string()
      .email('Invalid email format')
      .max(100)
      .optional()
      .nullable(),
    address: z.string().max(500).optional().nullable(),
    gst_number: z
      .string()
      .max(50)
      .optional()
      .nullable()
      .refine(
        (val) =>
          !val ||
          /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(val),
        { message: 'Invalid GST number format' },
      ),
    pan_number: z
      .string()
      .max(10)
      .optional()
      .nullable()
      .refine((val) => !val || /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(val), {
        message: 'Invalid PAN number format',
      }),
    status: VendorStatusSchema.optional().default('ACTIVE'),
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

export const updateVendorSchema = z
  .object({
    vendor_name: z.string().min(1).max(200).optional(),
    category: z.string().max(100).optional().nullable(),
    contact_number: z
      .string()
      .max(20)
      .optional()
      .nullable()
      .refine(
        (val) =>
          val === null || val === undefined || /^[\d\s\-\+\(\)]+$/.test(val),
        { message: 'Invalid phone number format' },
      ),
    email_address: z
      .string()
      .email('Invalid email format')
      .max(100)
      .optional()
      .nullable(),
    address: z.string().max(500).optional().nullable(),
    gst_number: z
      .string()
      .max(50)
      .optional()
      .nullable()
      .refine(
        (val) =>
          val === null ||
          val === undefined ||
          /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(val),
        { message: 'Invalid GST number format' },
      ),
    pan_number: z
      .string()
      .max(10)
      .optional()
      .nullable()
      .refine(
        (val) =>
          val === null ||
          val === undefined ||
          /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(val),
        { message: 'Invalid PAN number format' },
      ),
    status: VendorStatusSchema.optional(),
  })
  .openapi({
    example: {
      vendor_name: 'ABC Suppliers Private Limited',
      contact_number: '+91-9876543211',
      email_address: 'info@abcsuppliers.com',
      status: 'ACTIVE',
    },
  });

export const vendorResponseSchema = z
  .object({
    id: z.number().int().positive(),
    vendor_name: z.string(),
    category: z.string().nullable(),
    contact_number: z.string().nullable(),
    email_address: z.string().nullable(),
    address: z.string().nullable(),
    gst_number: z.string().nullable(),
    pan_number: z.string().nullable(),
    status: VendorStatusSchema,
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
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

export const vendorListResponseSchema = z.array(vendorResponseSchema).openapi({
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
export const vendorFilterSchema = z
  .object({
    status: VendorStatusSchema.optional(),
    category: z.string().optional(),
    search: z.string().optional(),
    start_date: z.string().datetime().optional(),
    end_date: z.string().datetime().optional(),
    has_gst: z.boolean().optional(),
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
export const vendorQueryParamsSchema = z
  .object({
    page: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : 1)),
    limit: z
      .string()
      .optional()
      .transform((val) => (val ? parseInt(val) : 20)),
    sort: z
      .enum(['created_at', 'updated_at', 'vendor_name', 'status'])
      .optional()
      .default('created_at'),
    order: z.enum(['asc', 'desc']).optional().default('desc'),
    include: z.enum(['supplies', 'pos', 'stats', 'all']).optional(),
    status: VendorStatusSchema.optional(),
    category: z.string().optional(),
    search: z.string().optional(),
    start_date: z.string().datetime().optional(),
    end_date: z.string().datetime().optional(),
    has_gst: z.boolean().optional(),
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
export const vendorPaginationResponseSchema = z
  .object({
    success: z.boolean().default(true),
    data: vendorListResponseSchema,
    pagination: z.object({
      total: z.number().int().nonnegative(),
      page: z.number().int().positive(),
      limit: z.number().int().positive(),
      pages: z.number().int().nonnegative(),
      hasNext: z.boolean(),
      hasPrev: z.boolean(),
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
export const vendorStatsResponseSchema = z
  .object({
    success: z.boolean().default(true),
    total_vendors: z.number().int().nonnegative(),
    active_vendors: z.number().int().nonnegative(),
    inactive_vendors: z.number().int().nonnegative(),
    suspended_vendors: z.number().int().nonnegative(),
    by_category: z.record(z.string(), z.number().int().nonnegative()),
    recent_vendors_count: z.number().int().nonnegative(),
    vendors_without_gst: z.number().int().nonnegative(),
    top_vendors_by_po: z.array(
      z.object({
        vendor_id: z.number().int().positive(),
        vendor_name: z.string(),
        po_count: z.number().int().nonnegative(),
        total_amount: z.string(),
      }),
    ),
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
export const activateVendorSchema = z
  .object({
    status: z.literal('ACTIVE'),
    remarks: z.string().max(500).optional().nullable(),
  })
  .openapi({
    required: ['status'],
    example: {
      status: 'ACTIVE',
      remarks: 'Vendor reactivated after verification',
    },
  });

export const suspendVendorSchema = z
  .object({
    status: z.literal('SUSPENDED'),
    remarks: z.string().min(1, 'Suspension reason is required').max(500),
  })
  .openapi({
    required: ['status', 'remarks'],
    example: {
      status: 'SUSPENDED',
      remarks: 'Suspended due to payment issues',
    },
  });

export const deactivateVendorSchema = z
  .object({
    status: z.literal('INACTIVE'),
    remarks: z.string().max(500).optional().nullable(),
  })
  .openapi({
    required: ['status'],
    example: {
      status: 'INACTIVE',
      remarks: 'Vendor no longer supplying materials',
    },
  });

// Bulk Operations
export const bulkUpdateVendorStatusSchema = z
  .object({
    vendor_ids: z
      .array(z.number().int().positive())
      .min(1, 'At least one vendor ID is required'),
    status: VendorStatusSchema,
    remarks: z.string().max(500).optional().nullable(),
  })
  .openapi({
    required: ['vendor_ids', 'status'],
    example: {
      vendor_ids: [1, 2, 3],
      status: 'ACTIVE',
      remarks: 'Reactivated after system maintenance',
    },
  });

// TypeScript Types
export type VendorStatus = z.infer<typeof VendorStatusSchema>;
export type VendorType = z.infer<typeof VendorTypeSchema>;
export type SupplyStatus = z.infer<typeof SupplyStatusSchema>;
export type ICreateVendor = z.infer<typeof createVendorSchema>;
export type IUpdateVendor = z.infer<typeof updateVendorSchema>;
export type IVendorResponse = z.infer<typeof vendorResponseSchema>;

export type IVendorListResponse = z.infer<typeof vendorListResponseSchema>;
export type IVendorFilter = z.infer<typeof vendorFilterSchema>;
export type IVendorQueryParams = z.infer<typeof vendorQueryParamsSchema>;
export type IVendorPaginationResponse = z.infer<
  typeof vendorPaginationResponseSchema
>;
export type IVendorStatsResponse = z.infer<typeof vendorStatsResponseSchema>;
export type IActivateVendor = z.infer<typeof activateVendorSchema>;
export type ISuspendVendor = z.infer<typeof suspendVendorSchema>;
export type IDeactivateVendor = z.infer<typeof deactivateVendorSchema>;
export type IBulkUpdateVendorStatus = z.infer<
  typeof bulkUpdateVendorStatusSchema
>;

// Status Change Type
export type VendorStatusChange =
  | { type: 'ACTIVATE'; data: IActivateVendor }
  | { type: 'SUSPEND'; data: ISuspendVendor }
  | { type: 'DEACTIVATE'; data: IDeactivateVendor };
