import { IUserRegister } from '@schema/user';
export declare const register: (body: IUserRegister) => Promise<{
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
        role: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        } | null;
    } & {
        id: number;
        name: string;
        email: string;
        emailVerified: boolean;
        password: string;
        fileId: number | null;
        original_password: string | null;
        mobileNumber: string | null;
        roleId: number | null;
        company_id: number | null;
        head_office_id: number | null;
        branch_office_id: number | null;
        provider: import("erp-shared-models/src/generated/client").$Enums.Provider;
        createdAt: Date;
        updatedAt: Date;
    };
}>;
