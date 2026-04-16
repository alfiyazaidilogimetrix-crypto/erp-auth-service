import { ICreateModule } from '@schema/role';
export declare const createModule: (body: ICreateModule) => Promise<{
    permissions: ({
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
    })[];
} & {
    description: string | null;
    id: number;
    createdAt: Date;
    updatedAt: Date;
    Name: string;
}>;
