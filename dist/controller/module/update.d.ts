import { IUpdateModule } from '@schema/role';
export declare const updateModule: (id: number, body: IUpdateModule) => Promise<{
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
