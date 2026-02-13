export declare const getModules: (page?: number, limit?: number) => Promise<{
    modules: ({
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
    })[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    };
}>;
export declare const getModuleById: (id: number) => Promise<{
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
