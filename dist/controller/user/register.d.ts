import { IUserRegister } from '@schema/user';
export declare const register: (body: IUserRegister) => Promise<{
    user: {
        role: never;
        profileImage: never;
    } & {
        name: string;
        id: number;
        email: string;
        password: string;
        provider: import("erp-shared-models/src/generated/client/enums").Provider;
        emailVerified: boolean;
        fileId: number | null;
        original_password: string | null;
        mobileNumber: string | null;
        roleId: number | null;
        createdAt: Date;
        updatedAt: Date;
    };
}>;
