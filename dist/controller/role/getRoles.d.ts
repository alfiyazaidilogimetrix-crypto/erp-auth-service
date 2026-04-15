export declare const getRoles: (page?: number, limit?: number) => Promise<{
    roles: ({
        users: {
            id: number;
            name: string;
            email: string;
        }[];
        permissions: ({
            modules: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                description: string | null;
                Name: string;
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
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    })[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        pages: number;
    };
}>;
export declare const getRoleById: (id: number) => Promise<{
    users: {
        id: number;
        name: string;
        email: string;
    }[];
    permissions: ({
        modules: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
            Name: string;
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
    name: string;
    createdAt: Date;
    updatedAt: Date;
    description: string | null;
}>;
