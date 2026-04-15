import { ICreatePermission } from '@schema/role';
export declare const createPermission: (body: ICreatePermission) => Promise<{
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
