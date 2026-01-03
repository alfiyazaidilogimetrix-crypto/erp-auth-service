import { IUserLogin } from '@schema/user';
interface IModule {
    id: number;
    Name: string;
    description: string | null;
    createdAt: Date;
    updatedAt: Date;
}
interface IPermission {
    id: number;
    action: string[];
    modules: IModule[];
    createdAt: Date;
    updatedAt: Date;
}
interface IRole {
    id: number;
    name: string;
    description: string | null;
    permissions: IPermission[];
    createdAt: Date;
    updatedAt: Date;
}
export declare const login: (body: IUserLogin) => Promise<{
    token: string;
    refreshToken: string;
    expireTime: number;
    user: {
        id: number;
        name: string;
        email: string;
        emailVerified: boolean;
        fileId: number | null;
        original_password: string | null;
        mobileNumber: string | null;
        roleId: number | null;
        createdAt: Date;
        updatedAt: Date;
        provider: string;
        profileImage: any | null;
        role: IRole | null;
    } | {
        role: {
            permissions: TransformedPermission[];
            id: number;
            name: string;
            description: string | null;
            createdAt: Date;
            updatedAt: Date;
        };
        id: number;
        name: string;
        email: string;
        emailVerified: boolean;
        fileId: number | null;
        original_password: string | null;
        mobileNumber: string | null;
        roleId: number | null;
        createdAt: Date;
        updatedAt: Date;
        provider: string;
        profileImage: any | null;
    };
}>;
interface TransformedPermission {
    module: string;
    action: string[];
}
export {};
