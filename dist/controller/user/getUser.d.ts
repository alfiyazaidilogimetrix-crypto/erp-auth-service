export declare const getUserProfile: (userId: number) => Promise<{
    profileImage: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        filePath: string;
        fileContent: import("@prisma/client/runtime/client").Bytes;
    } | null;
    role: ({
        permissions: ({
            modules: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                Name: string;
            }[];
        } & {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            action: string[];
        })[];
    } & {
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }) | null;
    id: number;
    name: string;
    email: string;
    emailVerified: boolean;
    fileId: number | null;
    original_password: string | null;
    mobileNumber: string | null;
    roleId: number | null;
    provider: import("erp-shared-models/src/generated/client/enums").Provider;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const getAllUsers: (page?: number, limit?: number, roleId?: number) => Promise<{
    users: {
        profileImage: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            filename: string;
            originalName: string;
            mimeType: string;
            size: number;
            filePath: string;
            fileContent: import("@prisma/client/runtime/client").Bytes;
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
        provider: import("erp-shared-models/src/generated/client/enums").Provider;
        createdAt: Date;
        updatedAt: Date;
    }[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
export declare const getUserById: (userId: number) => Promise<{
    profileImage: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        filePath: string;
        fileContent: import("@prisma/client/runtime/client").Bytes;
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
    provider: import("erp-shared-models/src/generated/client/enums").Provider;
    createdAt: Date;
    updatedAt: Date;
}>;
