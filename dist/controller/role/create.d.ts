import { ICreateRole, IAssignRoleToUser } from '@schema/role';
export declare const createRole: (body: ICreateRole) => Promise<{
    users: {
        id: number;
        name: string;
        email: string;
    }[];
    permissions: ({
        modules: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            Name: string;
        }[];
    } & {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        title: string | null;
        action: string[];
    })[];
} & {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
}>;
export declare const assignRoleToUser: (body: IAssignRoleToUser) => Promise<{
    id: number;
    name: string;
    email: string;
    roleId: number | null;
}>;
