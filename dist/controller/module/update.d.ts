import { IUpdateModule } from '@schema/role';
export declare const updateModule: (id: number, body: IUpdateModule) => Promise<{
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
        action: string[];
    })[];
} & {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
    Name: string;
}>;
