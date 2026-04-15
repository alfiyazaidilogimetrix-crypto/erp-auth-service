import { ICreateModule } from '@schema/role';
export declare const createModule: (body: ICreateModule) => Promise<{
    permissions: ({
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
    })[];
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    Name: string;
}>;
