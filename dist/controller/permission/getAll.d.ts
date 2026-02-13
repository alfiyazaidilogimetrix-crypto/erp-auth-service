export declare const getPermissions: (page?: number, limit?: number, moduleId?: number) => Promise<{
    permissions: ({
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
    action: string[];
}>;
