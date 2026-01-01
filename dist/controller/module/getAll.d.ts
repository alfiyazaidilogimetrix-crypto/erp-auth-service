export declare const getModules: (page?: number, limit?: number) => Promise<{
    modules: any;
    pagination: {
        page: number;
        limit: number;
        total: any;
        pages: number;
    };
}>;
export declare const getModuleById: (id: number) => Promise<any>;
