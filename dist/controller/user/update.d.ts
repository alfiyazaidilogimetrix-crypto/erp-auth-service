import { IUpdateUserProfile, IUpdateUserPassword } from '@schema/user';
export declare const updateUserProfile: (userId: number, body: IUpdateUserProfile) => Promise<{
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
export declare const updateUserPassword: (userId: number, body: IUpdateUserPassword) => Promise<{
    message: string;
}>;
export declare const updateUserById: (userId: number, body: IUpdateUserProfile) => Promise<{
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
export declare const uploadProfileImage: (userId: number, fileId: number) => Promise<{
    user: {
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
    };
    file: any;
}>;
