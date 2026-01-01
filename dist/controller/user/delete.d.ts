export declare const deleteUser: (userId: number, currentUserId: number) => Promise<{
    message: string;
}>;
export declare const removeProfileImage: (userId: number) => Promise<{
    role: never;
    profileImage: never;
    name: string;
    id: number;
    email: string;
    provider: import("erp-shared-models/src/generated/client/enums").Provider;
    emailVerified: boolean;
    fileId: number | null;
    original_password: string | null;
    mobileNumber: string | null;
    roleId: number | null;
    createdAt: Date;
    updatedAt: Date;
}>;
