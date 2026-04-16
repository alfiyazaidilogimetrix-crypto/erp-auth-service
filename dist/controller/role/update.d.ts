import { IUpdateRole } from '@schema/role';
export declare const updateRole: (id: number, body: IUpdateRole) => Promise<{
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
