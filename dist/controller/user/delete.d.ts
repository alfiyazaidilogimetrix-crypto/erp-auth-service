export declare const deleteUser: (userId: number, currentUserId: number) => Promise<{
    message: string;
}>;
export declare const removeProfileImage: (userId: number) => Promise<{
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
    id: number;
    name: string;
    email: string;
    emailVerified: boolean;
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
}>;
