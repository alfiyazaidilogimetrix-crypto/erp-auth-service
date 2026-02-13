import { IUpdateRole } from '@schema/role';
export declare const updateRole: (id: number, body: IUpdateRole) => Promise<{
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
        action: string[];
    })[];
    users: {
        id: number;
        name: string;
        email: string;
    }[];
} & {
    id: number;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
}>;
