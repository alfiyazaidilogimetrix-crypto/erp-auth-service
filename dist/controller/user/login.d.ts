import { IUserLogin } from '@schema/user';
export declare const login: (body: IUserLogin) => Promise<{
    token: string;
    refreshToken: string;
    expireTime: number;
    user: {
        profileImage: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            filename: string;
            originalName: string;
            mimeType: string;
            size: number;
            filePath: string;
            fileContent: import("erp-shared-models/src/generated/client/runtime/client").Bytes;
        } | null;
        role: ({
            permissions: ({
                modules: {
                    description: string | null;
                    id: number;
                    createdAt: Date;
                    updatedAt: Date;
                    Name: string;
                }[];
            } & {
                description: string | null;
                title: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                action: string[];
            })[];
        } & {
            description: string | null;
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        }) | null;
        company: ({
            company_logo: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                filename: string;
                originalName: string;
                mimeType: string;
                size: number;
                filePath: string;
                fileContent: import("erp-shared-models/src/generated/client/runtime/client").Bytes;
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
        }) | null;
        id: number;
        name: string;
        email: string;
        emailVerified: boolean;
        fileId: number | null;
        original_password: string | null;
        mobileNumber: string | null;
        roleId: number | null;
        company_id: number | null;
        createdAt: Date;
        updatedAt: Date;
        provider: import("erp-shared-models/src/generated/client").$Enums.Provider;
    } | {
        role: {
            permissions: TransformedPermission[];
            description: string | null;
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        };
        profileImage: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            filename: string;
            originalName: string;
            mimeType: string;
            size: number;
            filePath: string;
            fileContent: import("erp-shared-models/src/generated/client/runtime/client").Bytes;
        } | null;
        company: ({
            company_logo: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                filename: string;
                originalName: string;
                mimeType: string;
                size: number;
                filePath: string;
                fileContent: import("erp-shared-models/src/generated/client/runtime/client").Bytes;
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
        }) | null;
        id: number;
        name: string;
        email: string;
        emailVerified: boolean;
        fileId: number | null;
        original_password: string | null;
        mobileNumber: string | null;
        roleId: number | null;
        company_id: number | null;
        createdAt: Date;
        updatedAt: Date;
        provider: import("erp-shared-models/src/generated/client").$Enums.Provider;
    };
}>;
interface TransformedPermission {
    module: string;
    action: string[];
}
export {};
