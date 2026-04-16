import { ICreatePermission } from '@schema/role';
export declare const createPermission: (body: ICreatePermission) => Promise<{
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
