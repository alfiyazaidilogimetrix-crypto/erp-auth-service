import { IUpdateRole } from '@schema/role';
export declare const updateRole: (id: number, body: IUpdateRole) => Promise<{
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
