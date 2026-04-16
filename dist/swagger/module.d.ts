import { z } from '@hono/zod-openapi';
export declare const createModuleDoc: {
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
                        Name: z.ZodString;
                        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        Name: string;
                        description?: string | null | undefined;
                    }, {
                        Name: string;
                        description?: string | null | undefined;
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
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                        message: z.ZodString;
                        error: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        error?: string | undefined;
                    }, {
                        message: string;
                        status: number;
                        error?: string | undefined;
                    }>;
                };
            };
        };
        409: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                        message: z.ZodString;
                        error: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        error?: string | undefined;
                    }, {
                        message: string;
                        status: number;
                        error?: string | undefined;
                    }>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/";
};
export declare const getModulesDoc: {
    tags: string[];
    method: "get";
    path: "/";
    summary: string;
    description: string;
    request: {
        query: z.ZodObject<{
            page: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>;
            limit: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>;
        }, "strip", z.ZodTypeAny, {
            page: number;
            limit: number;
        }, {
            page?: string | undefined;
            limit?: string | undefined;
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
export declare const getModuleByIdDoc: {
    tags: string[];
    method: "get";
    path: "/{id}";
    summary: string;
    description: string;
    request: {
        params: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
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
export declare const updateModuleDoc: {
    tags: string[];
    method: "patch";
    path: "/{id}";
    summary: string;
    description: string;
    request: {
        params: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
        }, {
            id: string;
        }>;
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        Name: z.ZodOptional<z.ZodString>;
                        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        description?: string | null | undefined;
                        Name?: string | undefined;
                    }, {
                        description?: string | null | undefined;
                        Name?: string | undefined;
                    }>;
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
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                        message: z.ZodString;
                        error: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        error?: string | undefined;
                    }, {
                        message: string;
                        status: number;
                        error?: string | undefined;
                    }>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/:id";
};
export declare const deleteModuleDoc: {
    tags: string[];
    method: "delete";
    path: "/{id}";
    summary: string;
    description: string;
    request: {
        params: z.ZodObject<{
            id: z.ZodEffects<z.ZodString, number, string>;
        }, "strip", z.ZodTypeAny, {
            id: number;
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
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                        message: z.ZodString;
                        error: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        error?: string | undefined;
                    }, {
                        message: string;
                        status: number;
                        error?: string | undefined;
                    }>;
                };
            };
        };
        404: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                        message: z.ZodString;
                        error: z.ZodOptional<z.ZodString>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        error?: string | undefined;
                    }, {
                        message: string;
                        status: number;
                        error?: string | undefined;
                    }>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/:id";
};
