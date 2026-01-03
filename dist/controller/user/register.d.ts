import { IUserRegister } from '@schema/user';
export declare const register: (body: IUserRegister) => Promise<{
    user: {
        role: never;
        profileImage: never;
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
        provider: import("erp-shared-models/src/generated/client/enums").Provider;
        createdAt: Date;
        updatedAt: Date;
    };
}>;
