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
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                        message: z.ZodString;
                        permission: z.ZodObject<{
                            id: z.ZodNumber;
                            action: z.ZodArray<z.ZodString, "many">;
                            modules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                id: z.ZodNumber;
                                Name: z.ZodString;
                                description: z.ZodNullable<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                id: number;
                                description: string | null;
                                Name: string;
                            }, {
                                id: number;
                                description: string | null;
                                Name: string;
                            }>, "many">>;
                            roles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                id: z.ZodNumber;
                                name: z.ZodString;
                                description: z.ZodNullable<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                name: string;
                                id: number;
                                description: string | null;
                            }, {
                                name: string;
                                id: number;
                                description: string | null;
                            }>, "many">>;
                            createdAt: z.ZodString;
                            updatedAt: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        }, {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        permission: {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        };
                    }, {
                        message: string;
                        status: number;
                        permission: {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        };
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
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                        permissions: z.ZodArray<z.ZodObject<{
                            id: z.ZodNumber;
                            action: z.ZodArray<z.ZodString, "many">;
                            modules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                id: z.ZodNumber;
                                Name: z.ZodString;
                                description: z.ZodNullable<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                id: number;
                                description: string | null;
                                Name: string;
                            }, {
                                id: number;
                                description: string | null;
                                Name: string;
                            }>, "many">>;
                            roles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                id: z.ZodNumber;
                                name: z.ZodString;
                                description: z.ZodNullable<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                name: string;
                                id: number;
                                description: string | null;
                            }, {
                                name: string;
                                id: number;
                                description: string | null;
                            }>, "many">>;
                            createdAt: z.ZodString;
                            updatedAt: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        }, {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        }>, "many">;
                        pagination: z.ZodObject<{
                            page: z.ZodNumber;
                            limit: z.ZodNumber;
                            total: z.ZodNumber;
                            pages: z.ZodNumber;
                        }, "strip", z.ZodTypeAny, {
                            total: number;
                            page: number;
                            limit: number;
                            pages: number;
                        }, {
                            total: number;
                            page: number;
                            limit: number;
                            pages: number;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        status: number;
                        permissions: {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        }[];
                        pagination: {
                            total: number;
                            page: number;
                            limit: number;
                            pages: number;
                        };
                    }, {
                        status: number;
                        permissions: {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        }[];
                        pagination: {
                            total: number;
                            page: number;
                            limit: number;
                            pages: number;
                        };
                    }>;
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
                    schema: z.ZodObject<{
                        action: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        moduleIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
                    }, "strip", z.ZodTypeAny, {
                        moduleIds: number[];
                        action?: string[] | undefined;
                    }, {
                        action?: string[] | undefined;
                        moduleIds?: number[] | undefined;
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
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                        message: z.ZodString;
                        permission: z.ZodObject<{
                            id: z.ZodNumber;
                            action: z.ZodArray<z.ZodString, "many">;
                            modules: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                id: z.ZodNumber;
                                Name: z.ZodString;
                                description: z.ZodNullable<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                id: number;
                                description: string | null;
                                Name: string;
                            }, {
                                id: number;
                                description: string | null;
                                Name: string;
                            }>, "many">>;
                            roles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                id: z.ZodNumber;
                                name: z.ZodString;
                                description: z.ZodNullable<z.ZodString>;
                            }, "strip", z.ZodTypeAny, {
                                name: string;
                                id: number;
                                description: string | null;
                            }, {
                                name: string;
                                id: number;
                                description: string | null;
                            }>, "many">>;
                            createdAt: z.ZodString;
                            updatedAt: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        }, {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        permission: {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        };
                    }, {
                        message: string;
                        status: number;
                        permission: {
                            id: number;
                            action: string[];
                            createdAt: string;
                            updatedAt: string;
                            modules?: {
                                id: number;
                                description: string | null;
                                Name: string;
                            }[] | undefined;
                            roles?: {
                                name: string;
                                id: number;
                                description: string | null;
                            }[] | undefined;
                        };
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
