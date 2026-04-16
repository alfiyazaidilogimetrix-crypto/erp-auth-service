import { IUpdatePermission } from '@schema/role';
export declare const updatePermission: (id: number, body: IUpdatePermission) => Promise<{
    modules: {
        description: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        Name: string;
    }[];
    roles: {
        description: string | null;
        id: number;
        name: string;
    }[];
} & {
    description: string | null;
    title: string | null;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    action: string[];
}>;
