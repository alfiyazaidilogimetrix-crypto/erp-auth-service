import { z } from '@hono/zod-openapi';
export declare const ownerDetailsSchema: z.ZodObject<{
    owner_name: z.ZodString;
    owner_father_name: z.ZodString;
    dob: z.ZodString;
    pincode: z.ZodString;
    state: z.ZodString;
    district: z.ZodString;
    address: z.ZodString;
    owner_phone_number: z.ZodString;
    owner_mail_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    district: string;
    state: string;
    pincode: string;
    address: string;
    owner_name: string;
    owner_father_name: string;
    dob: string;
    owner_phone_number: string;
    owner_mail_id: string;
}, {
    district: string;
    state: string;
    pincode: string;
    address: string;
    owner_name: string;
    owner_father_name: string;
    dob: string;
    owner_phone_number: string;
    owner_mail_id: string;
}>;
export declare const legalProofSchema: z.ZodArray<z.ZodObject<{
    file_ids: z.ZodArray<z.ZodNumber, "many">;
    file_type: z.ZodString;
}, "strip", z.ZodTypeAny, {
    file_ids: number[];
    file_type: string;
}, {
    file_ids: number[];
    file_type: string;
}>, "many">;
export declare const createCompanySchema: z.ZodObject<{
    company_name: z.ZodString;
    pincode: z.ZodString;
    state: z.ZodString;
    district: z.ZodString;
    address: z.ZodString;
    company_mail_id: z.ZodString;
    company_phone_number: z.ZodString;
    company_gst_number: z.ZodString;
    business_type: z.ZodString;
    user_id: z.ZodNumber;
    ownerDetails: z.ZodOptional<z.ZodObject<{
        owner_name: z.ZodString;
        owner_father_name: z.ZodString;
        dob: z.ZodString;
        pincode: z.ZodString;
        state: z.ZodString;
        district: z.ZodString;
        address: z.ZodString;
        owner_phone_number: z.ZodString;
        owner_mail_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        district: string;
        state: string;
        pincode: string;
        address: string;
        owner_name: string;
        owner_father_name: string;
        dob: string;
        owner_phone_number: string;
        owner_mail_id: string;
    }, {
        district: string;
        state: string;
        pincode: string;
        address: string;
        owner_name: string;
        owner_father_name: string;
        dob: string;
        owner_phone_number: string;
        owner_mail_id: string;
    }>>;
    legal_proof: z.ZodOptional<z.ZodArray<z.ZodObject<{
        file_ids: z.ZodArray<z.ZodNumber, "many">;
        file_type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        file_ids: number[];
        file_type: string;
    }, {
        file_ids: number[];
        file_type: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    district: string;
    state: string;
    pincode: string;
    user_id: number;
    address: string;
    company_name: string;
    company_mail_id: string;
    company_phone_number: string;
    company_gst_number: string;
    business_type: string;
    ownerDetails?: {
        district: string;
        state: string;
        pincode: string;
        address: string;
        owner_name: string;
        owner_father_name: string;
        dob: string;
        owner_phone_number: string;
        owner_mail_id: string;
    } | undefined;
    legal_proof?: {
        file_ids: number[];
        file_type: string;
    }[] | undefined;
}, {
    district: string;
    state: string;
    pincode: string;
    user_id: number;
    address: string;
    company_name: string;
    company_mail_id: string;
    company_phone_number: string;
    company_gst_number: string;
    business_type: string;
    ownerDetails?: {
        district: string;
        state: string;
        pincode: string;
        address: string;
        owner_name: string;
        owner_father_name: string;
        dob: string;
        owner_phone_number: string;
        owner_mail_id: string;
    } | undefined;
    legal_proof?: {
        file_ids: number[];
        file_type: string;
    }[] | undefined;
}>;
export declare const updateCompanySchema: z.ZodObject<{
    company_name: z.ZodOptional<z.ZodString>;
    pincode: z.ZodOptional<z.ZodString>;
    state: z.ZodOptional<z.ZodString>;
    district: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    company_mail_id: z.ZodOptional<z.ZodString>;
    company_phone_number: z.ZodOptional<z.ZodString>;
    company_gst_number: z.ZodOptional<z.ZodString>;
    business_type: z.ZodOptional<z.ZodString>;
    ownerDetails: z.ZodOptional<z.ZodObject<{
        owner_name: z.ZodOptional<z.ZodString>;
        owner_father_name: z.ZodOptional<z.ZodString>;
        dob: z.ZodOptional<z.ZodString>;
        pincode: z.ZodOptional<z.ZodString>;
        state: z.ZodOptional<z.ZodString>;
        district: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        owner_phone_number: z.ZodOptional<z.ZodString>;
        owner_mail_id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        district?: string | undefined;
        state?: string | undefined;
        pincode?: string | undefined;
        address?: string | undefined;
        owner_name?: string | undefined;
        owner_father_name?: string | undefined;
        dob?: string | undefined;
        owner_phone_number?: string | undefined;
        owner_mail_id?: string | undefined;
    }, {
        district?: string | undefined;
        state?: string | undefined;
        pincode?: string | undefined;
        address?: string | undefined;
        owner_name?: string | undefined;
        owner_father_name?: string | undefined;
        dob?: string | undefined;
        owner_phone_number?: string | undefined;
        owner_mail_id?: string | undefined;
    }>>;
    legal_proof: z.ZodOptional<z.ZodArray<z.ZodObject<{
        file_ids: z.ZodArray<z.ZodNumber, "many">;
        file_type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        file_ids: number[];
        file_type: string;
    }, {
        file_ids: number[];
        file_type: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    district?: string | undefined;
    state?: string | undefined;
    pincode?: string | undefined;
    address?: string | undefined;
    company_name?: string | undefined;
    company_mail_id?: string | undefined;
    company_phone_number?: string | undefined;
    company_gst_number?: string | undefined;
    business_type?: string | undefined;
    ownerDetails?: {
        district?: string | undefined;
        state?: string | undefined;
        pincode?: string | undefined;
        address?: string | undefined;
        owner_name?: string | undefined;
        owner_father_name?: string | undefined;
        dob?: string | undefined;
        owner_phone_number?: string | undefined;
        owner_mail_id?: string | undefined;
    } | undefined;
    legal_proof?: {
        file_ids: number[];
        file_type: string;
    }[] | undefined;
}, {
    district?: string | undefined;
    state?: string | undefined;
    pincode?: string | undefined;
    address?: string | undefined;
    company_name?: string | undefined;
    company_mail_id?: string | undefined;
    company_phone_number?: string | undefined;
    company_gst_number?: string | undefined;
    business_type?: string | undefined;
    ownerDetails?: {
        district?: string | undefined;
        state?: string | undefined;
        pincode?: string | undefined;
        address?: string | undefined;
        owner_name?: string | undefined;
        owner_father_name?: string | undefined;
        dob?: string | undefined;
        owner_phone_number?: string | undefined;
        owner_mail_id?: string | undefined;
    } | undefined;
    legal_proof?: {
        file_ids: number[];
        file_type: string;
    }[] | undefined;
}>;
export declare const companyResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    company_name: z.ZodString;
    pincode: z.ZodString;
    state: z.ZodString;
    district: z.ZodString;
    address: z.ZodString;
    company_mail_id: z.ZodString;
    company_phone_number: z.ZodString;
    company_gst_number: z.ZodString;
    business_type: z.ZodString;
    user_id: z.ZodNumber;
    owner_id: z.ZodNullable<z.ZodNumber>;
    ownerDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        owner_name: z.ZodString;
        owner_father_name: z.ZodString;
        dob: z.ZodString;
        pincode: z.ZodString;
        state: z.ZodString;
        district: z.ZodString;
        address: z.ZodString;
        owner_phone_number: z.ZodString;
        owner_mail_id: z.ZodString;
    } & {
        id: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        id: number;
        district: string;
        state: string;
        pincode: string;
        address: string;
        owner_name: string;
        owner_father_name: string;
        dob: string;
        owner_phone_number: string;
        owner_mail_id: string;
    }, {
        id: number;
        district: string;
        state: string;
        pincode: string;
        address: string;
        owner_name: string;
        owner_father_name: string;
        dob: string;
        owner_phone_number: string;
        owner_mail_id: string;
    }>>>;
    companyFiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        file_id: z.ZodNumber;
        file_type: z.ZodString;
        file: z.ZodOptional<z.ZodAny>;
    }, "strip", z.ZodTypeAny, {
        id: number;
        file_id: number;
        file_type: string;
        file?: any;
    }, {
        id: number;
        file_id: number;
        file_type: string;
        file?: any;
    }>, "many">>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    district: string;
    state: string;
    pincode: string;
    created_at: string;
    updated_at: string;
    user_id: number;
    address: string;
    company_name: string;
    company_mail_id: string;
    company_phone_number: string;
    company_gst_number: string;
    business_type: string;
    owner_id: number | null;
    companyFiles?: {
        id: number;
        file_id: number;
        file_type: string;
        file?: any;
    }[] | undefined;
    ownerDetails?: {
        id: number;
        district: string;
        state: string;
        pincode: string;
        address: string;
        owner_name: string;
        owner_father_name: string;
        dob: string;
        owner_phone_number: string;
        owner_mail_id: string;
    } | null | undefined;
}, {
    id: number;
    district: string;
    state: string;
    pincode: string;
    created_at: string;
    updated_at: string;
    user_id: number;
    address: string;
    company_name: string;
    company_mail_id: string;
    company_phone_number: string;
    company_gst_number: string;
    business_type: string;
    owner_id: number | null;
    companyFiles?: {
        id: number;
        file_id: number;
        file_type: string;
        file?: any;
    }[] | undefined;
    ownerDetails?: {
        id: number;
        district: string;
        state: string;
        pincode: string;
        address: string;
        owner_name: string;
        owner_father_name: string;
        dob: string;
        owner_phone_number: string;
        owner_mail_id: string;
    } | null | undefined;
}>;
export type ICreateCompany = z.infer<typeof createCompanySchema>;
export type IUpdateCompany = z.infer<typeof updateCompanySchema>;
export type ICompanyResponse = z.infer<typeof companyResponseSchema>;
export type IOwnerDetails = z.infer<typeof ownerDetailsSchema>;
export type ILegalProof = z.infer<typeof legalProofSchema>;
