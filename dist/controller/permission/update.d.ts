import { IUpdatePermission } from '@schema/role';
export declare const updatePermission: (id: number, body: IUpdatePermission) => Promise<{
    modules: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        Name: string;
    }[];
    roles: {
        id: number;
        name: string;
        description: string | null;
    }[];
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    title: string | null;
    action: string[];
}>;
