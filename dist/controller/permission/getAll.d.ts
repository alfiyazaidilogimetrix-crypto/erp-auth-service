export declare const getPermissions: (page?: number, limit?: number, moduleId?: number) => Promise<{
    permissions: any;
    pagination: {
        page: number;
        limit: number;
        total: any;
        pages: number;
    };
}>;
export declare const getPermissionById: (id: number) => Promise<any>;
