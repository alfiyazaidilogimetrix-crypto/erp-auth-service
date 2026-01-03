import { z } from '@hono/zod-openapi';
export declare const createPermissionDoc: {
    tags: string[];
    method: "post";
    path: "/";
    summary: string;
    description: string;
    request: {
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        action: z.ZodArray<z.ZodString, "many">;
                        moduleIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
                    }, "strip", z.ZodTypeAny, {
                        action: string[];
                        moduleIds: number[];
                    }, {
                        action: string[];
                        moduleIds?: number[] | undefined;
                    }>;
                };
            };
        };
    };
    responses: {
        201: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        400: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        404: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/";
};
export declare const getPermissionsDoc: {
    tags: string[];
    method: "get";
    path: "/";
    summary: string;
    description: string;
    request: {
        query: z.ZodObject<{
            page: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>;
            limit: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>;
            moduleId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page: number;
            limit: number;
            moduleId?: string | undefined;
        }, {
            page?: string | undefined;
            limit?: string | undefined;
            moduleId?: string | undefined;
        }>;
    };
    responses: {
        200: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/";
};
export declare const getPermissionByIdDoc: {
    tags: string[];
    method: "get";
    path: "/{id}";
    summary: string;
    description: string;
    request: {
        params: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
    };
    responses: {
        200: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        404: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/:id";
};
export declare const updatePermissionDoc: {
    tags: string[];
    method: "patch";
    path: "/{id}";
    summary: string;
    description: string;
    request: {
        params: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
    responses: {
        200: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        404: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/:id";
};
export declare const deletePermissionDoc: {
    tags: string[];
    method: "delete";
    path: "/{id}";
    summary: string;
    description: string;
    request: {
        params: z.ZodObject<{
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
        }, {
            id: string;
        }>;
    };
    responses: {
        200: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                        message: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                    }, {
                        message: string;
                        status: number;
                    }>;
                };
            };
        };
        400: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        404: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/:id";
};
