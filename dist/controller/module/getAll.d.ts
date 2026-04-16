export declare const getModules: (page?: number, limit?: number) => Promise<{
    modules: ({
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
