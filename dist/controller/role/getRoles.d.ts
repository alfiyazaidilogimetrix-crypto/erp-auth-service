export declare const getRoles: (page?: number, limit?: number) => Promise<{
    roles: any;
    pagination: {
        page: number;
        limit: number;
        total: any;
        pages: number;
    };
}>;
export declare const getRoleById: (id: number) => Promise<any>;
