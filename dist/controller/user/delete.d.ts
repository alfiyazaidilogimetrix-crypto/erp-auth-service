export declare const deleteUser: (userId: number, currentUserId: number) => Promise<{
    message: string;
}>;
export declare const removeProfileImage: (userId: number) => Promise<{
    profileImage: never;
    role: never;
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
