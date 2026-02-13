import { IUserRegister } from '@schema/user';
export declare const register: (body: IUserRegister) => Promise<{
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
            fileContent: import("@prisma/client/runtime/client").Bytes;
        } | null;
        role: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        } | null;
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
