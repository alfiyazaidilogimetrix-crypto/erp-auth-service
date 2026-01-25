import { z } from '@hono/zod-openapi';
export declare const VendorStatusSchema: z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>;
export declare const VendorTypeSchema: z.ZodEnum<["DIRECT", "INVENTORY"]>;
export declare const SupplyStatusSchema: z.ZodEnum<["PENDING", "APPROVED", "IN_TRANSIT", "DELIVERED", "REJECTED"]>;
export declare const createVendorSchema: z.ZodObject<{
    vendor_name: z.ZodString;
    category: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    contact_number: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, string | null | undefined>;
    email_address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    gst_number: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, string | null | undefined>;
    pan_number: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, string | null | undefined>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>>>;
}, "strip", z.ZodTypeAny, {
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    vendor_name: string;
    address?: string | null | undefined;
    contact_number?: string | null | undefined;
    email_address?: string | null | undefined;
    pan_number?: string | null | undefined;
    gst_number?: string | null | undefined;
    category?: string | null | undefined;
}, {
    vendor_name: string;
    status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | undefined;
    address?: string | null | undefined;
    contact_number?: string | null | undefined;
    email_address?: string | null | undefined;
    pan_number?: string | null | undefined;
    gst_number?: string | null | undefined;
    category?: string | null | undefined;
}>;
export declare const updateVendorSchema: z.ZodObject<{
    vendor_name: z.ZodOptional<z.ZodString>;
    category: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    contact_number: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, string | null | undefined>;
    email_address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    address: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    gst_number: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, string | null | undefined>;
    pan_number: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | null | undefined, string | null | undefined>;
    status: z.ZodOptional<z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>>;
}, "strip", z.ZodTypeAny, {
    status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | undefined;
    address?: string | null | undefined;
    vendor_name?: string | undefined;
    contact_number?: string | null | undefined;
    email_address?: string | null | undefined;
    pan_number?: string | null | undefined;
    gst_number?: string | null | undefined;
    category?: string | null | undefined;
}, {
    status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | undefined;
    address?: string | null | undefined;
    vendor_name?: string | undefined;
    contact_number?: string | null | undefined;
    email_address?: string | null | undefined;
    pan_number?: string | null | undefined;
    gst_number?: string | null | undefined;
    category?: string | null | undefined;
}>;
export declare const vendorResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    vendor_name: z.ZodString;
    category: z.ZodNullable<z.ZodString>;
    contact_number: z.ZodNullable<z.ZodString>;
    email_address: z.ZodNullable<z.ZodString>;
    address: z.ZodNullable<z.ZodString>;
    gst_number: z.ZodNullable<z.ZodString>;
    pan_number: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    created_at: string;
    updated_at: string;
    address: string | null;
    vendor_name: string;
    contact_number: string | null;
    email_address: string | null;
    pan_number: string | null;
    gst_number: string | null;
    category: string | null;
}, {
    id: number;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    created_at: string;
    updated_at: string;
    address: string | null;
    vendor_name: string;
    contact_number: string | null;
    email_address: string | null;
    pan_number: string | null;
    gst_number: string | null;
    category: string | null;
}>;
export declare const vendorListResponseSchema: z.ZodArray<z.ZodObject<{
    id: z.ZodNumber;
    vendor_name: z.ZodString;
    category: z.ZodNullable<z.ZodString>;
    contact_number: z.ZodNullable<z.ZodString>;
    email_address: z.ZodNullable<z.ZodString>;
    address: z.ZodNullable<z.ZodString>;
    gst_number: z.ZodNullable<z.ZodString>;
    pan_number: z.ZodNullable<z.ZodString>;
    status: z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    created_at: string;
    updated_at: string;
    address: string | null;
    vendor_name: string;
    contact_number: string | null;
    email_address: string | null;
    pan_number: string | null;
    gst_number: string | null;
    category: string | null;
}, {
    id: number;
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    created_at: string;
    updated_at: string;
    address: string | null;
    vendor_name: string;
    contact_number: string | null;
    email_address: string | null;
    pan_number: string | null;
    gst_number: string | null;
    category: string | null;
}>, "many">;
export declare const vendorFilterSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>>;
    category: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
    start_date: z.ZodOptional<z.ZodString>;
    end_date: z.ZodOptional<z.ZodString>;
    has_gst: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    search?: string | undefined;
    category?: string | undefined;
    has_gst?: boolean | undefined;
}, {
    status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    search?: string | undefined;
    category?: string | undefined;
    has_gst?: boolean | undefined;
}>;
export declare const vendorQueryParamsSchema: z.ZodObject<{
    page: z.ZodEffects<z.ZodOptional<z.ZodString>, number, string | undefined>;
    limit: z.ZodEffects<z.ZodOptional<z.ZodString>, number, string | undefined>;
    sort: z.ZodDefault<z.ZodOptional<z.ZodEnum<["created_at", "updated_at", "vendor_name", "status"]>>>;
    order: z.ZodDefault<z.ZodOptional<z.ZodEnum<["asc", "desc"]>>>;
    include: z.ZodOptional<z.ZodEnum<["supplies", "pos", "stats", "all"]>>;
    status: z.ZodOptional<z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>>;
    category: z.ZodOptional<z.ZodString>;
    search: z.ZodOptional<z.ZodString>;
    start_date: z.ZodOptional<z.ZodString>;
    end_date: z.ZodOptional<z.ZodString>;
    has_gst: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    sort: "status" | "created_at" | "updated_at" | "vendor_name";
    page: number;
    limit: number;
    order: "asc" | "desc";
    status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    include?: "all" | "supplies" | "pos" | "stats" | undefined;
    search?: string | undefined;
    category?: string | undefined;
    has_gst?: boolean | undefined;
}, {
    sort?: "status" | "created_at" | "updated_at" | "vendor_name" | undefined;
    status?: "ACTIVE" | "INACTIVE" | "SUSPENDED" | undefined;
    start_date?: string | undefined;
    end_date?: string | undefined;
    include?: "all" | "supplies" | "pos" | "stats" | undefined;
    search?: string | undefined;
    page?: string | undefined;
    limit?: string | undefined;
    category?: string | undefined;
    has_gst?: boolean | undefined;
    order?: "asc" | "desc" | undefined;
}>;
export declare const vendorPaginationResponseSchema: z.ZodObject<{
    success: z.ZodDefault<z.ZodBoolean>;
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        vendor_name: z.ZodString;
        category: z.ZodNullable<z.ZodString>;
        contact_number: z.ZodNullable<z.ZodString>;
        email_address: z.ZodNullable<z.ZodString>;
        address: z.ZodNullable<z.ZodString>;
        gst_number: z.ZodNullable<z.ZodString>;
        pan_number: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>;
        created_at: z.ZodString;
        updated_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
        created_at: string;
        updated_at: string;
        address: string | null;
        vendor_name: string;
        contact_number: string | null;
        email_address: string | null;
        pan_number: string | null;
        gst_number: string | null;
        category: string | null;
    }, {
        id: number;
        status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
        created_at: string;
        updated_at: string;
        address: string | null;
        vendor_name: string;
        contact_number: string | null;
        email_address: string | null;
        pan_number: string | null;
        gst_number: string | null;
        category: string | null;
    }>, "many">;
    pagination: z.ZodObject<{
        total: z.ZodNumber;
        page: z.ZodNumber;
        limit: z.ZodNumber;
        pages: z.ZodNumber;
        hasNext: z.ZodBoolean;
        hasPrev: z.ZodBoolean;
    }, "strip", z.ZodTypeAny, {
        page: number;
        limit: number;
        total: number;
        pages: number;
        hasNext: boolean;
        hasPrev: boolean;
    }, {
        page: number;
        limit: number;
        total: number;
        pages: number;
        hasNext: boolean;
        hasPrev: boolean;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        id: number;
        status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
        created_at: string;
        updated_at: string;
        address: string | null;
        vendor_name: string;
        contact_number: string | null;
        email_address: string | null;
        pan_number: string | null;
        gst_number: string | null;
        category: string | null;
    }[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
    success: boolean;
}, {
    data: {
        id: number;
        status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
        created_at: string;
        updated_at: string;
        address: string | null;
        vendor_name: string;
        contact_number: string | null;
        email_address: string | null;
        pan_number: string | null;
        gst_number: string | null;
        category: string | null;
    }[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
        hasNext: boolean;
        hasPrev: boolean;
    };
    success?: boolean | undefined;
}>;
export declare const vendorStatsResponseSchema: z.ZodObject<{
    success: z.ZodDefault<z.ZodBoolean>;
    total_vendors: z.ZodNumber;
    active_vendors: z.ZodNumber;
    inactive_vendors: z.ZodNumber;
    suspended_vendors: z.ZodNumber;
    by_category: z.ZodRecord<z.ZodString, z.ZodNumber>;
    recent_vendors_count: z.ZodNumber;
    vendors_without_gst: z.ZodNumber;
    top_vendors_by_po: z.ZodArray<z.ZodObject<{
        vendor_id: z.ZodNumber;
        vendor_name: z.ZodString;
        po_count: z.ZodNumber;
        total_amount: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        vendor_id: number;
        total_amount: string;
        vendor_name: string;
        po_count: number;
    }, {
        vendor_id: number;
        total_amount: string;
        vendor_name: string;
        po_count: number;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    success: boolean;
    total_vendors: number;
    active_vendors: number;
    inactive_vendors: number;
    suspended_vendors: number;
    by_category: Record<string, number>;
    recent_vendors_count: number;
    vendors_without_gst: number;
    top_vendors_by_po: {
        vendor_id: number;
        total_amount: string;
        vendor_name: string;
        po_count: number;
    }[];
}, {
    total_vendors: number;
    active_vendors: number;
    inactive_vendors: number;
    suspended_vendors: number;
    by_category: Record<string, number>;
    recent_vendors_count: number;
    vendors_without_gst: number;
    top_vendors_by_po: {
        vendor_id: number;
        total_amount: string;
        vendor_name: string;
        po_count: number;
    }[];
    success?: boolean | undefined;
}>;
export declare const activateVendorSchema: z.ZodObject<{
    status: z.ZodLiteral<"ACTIVE">;
    remarks: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    status: "ACTIVE";
    remarks?: string | null | undefined;
}, {
    status: "ACTIVE";
    remarks?: string | null | undefined;
}>;
export declare const suspendVendorSchema: z.ZodObject<{
    status: z.ZodLiteral<"SUSPENDED">;
    remarks: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status: "SUSPENDED";
    remarks: string;
}, {
    status: "SUSPENDED";
    remarks: string;
}>;
export declare const deactivateVendorSchema: z.ZodObject<{
    status: z.ZodLiteral<"INACTIVE">;
    remarks: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    status: "INACTIVE";
    remarks?: string | null | undefined;
}, {
    status: "INACTIVE";
    remarks?: string | null | undefined;
}>;
export declare const bulkUpdateVendorStatusSchema: z.ZodObject<{
    vendor_ids: z.ZodArray<z.ZodNumber, "many">;
    status: z.ZodEnum<["ACTIVE", "INACTIVE", "SUSPENDED"]>;
    remarks: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    vendor_ids: number[];
    remarks?: string | null | undefined;
}, {
    status: "ACTIVE" | "INACTIVE" | "SUSPENDED";
    vendor_ids: number[];
    remarks?: string | null | undefined;
}>;
export type VendorStatus = z.infer<typeof VendorStatusSchema>;
export type VendorType = z.infer<typeof VendorTypeSchema>;
export type SupplyStatus = z.infer<typeof SupplyStatusSchema>;
export type ICreateVendor = z.infer<typeof createVendorSchema>;
export type IUpdateVendor = z.infer<typeof updateVendorSchema>;
export type IVendorResponse = z.infer<typeof vendorResponseSchema>;
export type IVendorListResponse = z.infer<typeof vendorListResponseSchema>;
export type IVendorFilter = z.infer<typeof vendorFilterSchema>;
export type IVendorQueryParams = z.infer<typeof vendorQueryParamsSchema>;
export type IVendorPaginationResponse = z.infer<typeof vendorPaginationResponseSchema>;
export type IVendorStatsResponse = z.infer<typeof vendorStatsResponseSchema>;
export type IActivateVendor = z.infer<typeof activateVendorSchema>;
export type ISuspendVendor = z.infer<typeof suspendVendorSchema>;
export type IDeactivateVendor = z.infer<typeof deactivateVendorSchema>;
export type IBulkUpdateVendorStatus = z.infer<typeof bulkUpdateVendorStatusSchema>;
export type VendorStatusChange = {
    type: 'ACTIVATE';
    data: IActivateVendor;
} | {
    type: 'SUSPEND';
    data: ISuspendVendor;
} | {
    type: 'DEACTIVATE';
    data: IDeactivateVendor;
};
