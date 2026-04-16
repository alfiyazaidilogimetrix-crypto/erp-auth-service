export declare const getPermissions: (page?: number, limit?: number, moduleId?: number) => Promise<{
    permissions: ({
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
    })[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    };
}>;
export declare const getPermissionById: (id: number) => Promise<{
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
