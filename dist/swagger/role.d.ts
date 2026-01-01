import { z } from '@hono/zod-openapi';
export declare const createRoleDoc: {
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
                        name: z.ZodString;
                        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                        permissionIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        permissionIds: number[];
                        description?: string | null | undefined;
                    }, {
                        name: string;
                        description?: string | null | undefined;
                        permissionIds?: number[] | undefined;
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
export declare const getRolesDoc: {
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
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        status: number;
                    }, {
                        status: number;
                    }>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/";
};
export declare const getRoleByIdDoc: {
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
export declare const updateRoleDoc: {
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
                    schema: z.ZodObject<{
                        name: z.ZodOptional<z.ZodString>;
                        description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                        permissionIds: z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        name?: string | undefined;
                        description?: string | null | undefined;
                        permissionIds?: number[] | undefined;
                    }, {
                        name?: string | undefined;
                        description?: string | null | undefined;
                        permissionIds?: number[] | undefined;
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
export declare const deleteRoleDoc: {
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
export declare const assignRoleToUserDoc: {
    tags: string[];
    method: "post";
    path: "/roles/assign";
    summary: string;
    description: string;
    request: {
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        userId: z.ZodNumber;
                        roleId: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        roleId: number;
                        userId: number;
                    }, {
                        roleId: number;
                        userId: number;
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
        500: {
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
    getRoutingPath(): "/roles/assign";
};
