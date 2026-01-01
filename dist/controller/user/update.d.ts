import { IUpdateUserProfile, IUpdateUserPassword } from '@schema/user';
export declare const updateUserProfile: (userId: number, body: IUpdateUserProfile) => Promise<{
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
export declare const updateUserPassword: (userId: number, body: IUpdateUserPassword) => Promise<{
    message: string;
}>;
export declare const updateUserById: (userId: number, body: IUpdateUserProfile) => Promise<{
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
export declare const uploadProfileImage: (userId: number, fileId: number) => Promise<{
    user: {
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
    };
    file: any;
}>;
