import { IUpdateUserProfile, IUpdateUserPassword } from '@schema/user';
export declare const updateUserProfile: (userId: number, body: IUpdateUserProfile) => Promise<{
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
        description: string | null;
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    } | null;
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
}>;
export declare const updateUserPassword: (userId: number, body: IUpdateUserPassword) => Promise<{
    message: string;
}>;
export declare const updateUserById: (userId: number, body: IUpdateUserProfile) => Promise<{
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
        description: string | null;
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    } | null;
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
}>;
export declare const uploadProfileImage: (userId: number, fileId: number) => Promise<{
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
            description: string | null;
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        } | null;
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
}>;
