import { ICreateRole, IAssignRoleToUser } from '@schema/role';
export declare const createRole: (body: ICreateRole) => Promise<{
    users: {
        id: number;
        name: string;
        email: string;
    }[];
    permissions: ({
        modules: {
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            Name: string;
        }[];
    } & {
        description: string | null;
        title: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        action: string[];
    })[];
} & {
    description: string | null;
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
export declare const assignRoleToUser: (body: IAssignRoleToUser) => Promise<{
    id: number;
    name: string;
    email: string;
    roleId: number | null;
}>;
