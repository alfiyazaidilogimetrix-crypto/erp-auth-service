import { ICreateCompany } from '@schema/company';
export declare const createCompany: (body: ICreateCompany) => Promise<({
    companyFiles: ({
        file: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            filename: string;
            originalName: string;
            mimeType: string;
            size: number;
            filePath: string;
            fileContent: import("erp-shared-models/src/generated/client/runtime/client").Bytes;
        };
    } & {
        id: number;
        company_id: number;
        created_at: Date;
        updated_at: Date;
        file_id: number;
        file_type: string;
    })[];
    ownerDetails: {
        id: number;
        district: string;
        state: string;
        pincode: string;
        created_at: Date;
        updated_at: Date;
        address: string;
        owner_name: string;
        owner_father_name: string;
        dob: Date;
        owner_phone_number: string;
        owner_mail_id: string;
    } | null;
} & {
    id: number;
    district: string;
    state: string;
    pincode: string;
    created_at: Date;
    updated_at: Date;
    file_id: number | null;
    user_id: number;
    address: string;
    company_name: string;
    company_mail_id: string;
    company_phone_number: string;
    company_gst_number: string;
    business_type: string;
    owner_id: number | null;
}) | null>;
