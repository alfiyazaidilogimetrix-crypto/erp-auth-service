export declare const getUserProfile: (userId: number) => Promise<{
    role: never;
    profileImage: never;
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
        role: never;
        profileImage: never;
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
    role: never;
    profileImage: never;
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
