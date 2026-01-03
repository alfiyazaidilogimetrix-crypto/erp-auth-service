import { ICreateRole, IAssignRoleToUser } from '@schema/role';
export declare const createRole: (body: ICreateRole) => Promise<any>;
export declare const assignRoleToUser: (body: IAssignRoleToUser) => Promise<{
    id: number;
    name: string;
    email: string;
    roleId: number | null;
}>;
