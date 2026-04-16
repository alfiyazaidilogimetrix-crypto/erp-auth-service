export declare const getRoles: (page?: number, limit?: number) => Promise<{
    roles: ({
        users: {
            id: number;
            name: string;
            email: string;
        }[];
        permissions: ({
            modules: {
                description: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                Name: string;
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
        name: string;
        createdAt: Date;
        updatedAt: Date;
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
            description: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            Name: string;
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
    name: string;
    createdAt: Date;
    updatedAt: Date;
}>;
