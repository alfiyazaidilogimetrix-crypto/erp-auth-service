import { z } from '@hono/zod-openapi';
export declare const userRegisterDoc: {
    tags: string[];
    method: "post";
    path: "/register";
    summary: string;
    description: string;
    request: {
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        name: z.ZodString;
                        email: z.ZodString;
                        password: z.ZodString;
                        fileId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                        mobileNumber: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                        roleId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                    }, "strip", z.ZodTypeAny, {
                        name: string;
                        email: string;
                        password: string;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
                    }, {
                        name: string;
                        email: string;
                        password: string;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
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
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        500: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/register";
};
export declare const userLoginDoc: {
    tags: string[];
    method: "post";
    path: "/login";
    summary: string;
    description: string;
    request: {
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        email: z.ZodString;
                        password: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        email: string;
                        password: string;
                    }, {
                        email: string;
                        password: string;
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
        401: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        403: {
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
    getRoutingPath(): "/login";
};
export declare const getUserProfileDoc: {
    tags: string[];
    method: "get";
    path: "/profile";
    summary: string;
    description: string;
    responses: {
        200: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        401: {
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
    getRoutingPath(): "/profile";
};
export declare const updateUserProfileDoc: {
    tags: string[];
    method: "patch";
    path: "/profile";
    summary: string;
    description: string;
    request: {
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        name: z.ZodOptional<z.ZodString>;
                        fileId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                        mobileNumber: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                        roleId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                    }, "strip", z.ZodTypeAny, {
                        name?: string | undefined;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
                    }, {
                        name?: string | undefined;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
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
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        401: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/profile";
};
export declare const updateUserPasswordDoc: {
    tags: string[];
    method: "patch";
    path: "/profile/password";
    summary: string;
    description: string;
    request: {
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        currentPassword: z.ZodString;
                        newPassword: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        currentPassword: string;
                        newPassword: string;
                    }, {
                        currentPassword: string;
                        newPassword: string;
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
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        401: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/profile/password";
};
export declare const removeProfileImageDoc: {
    tags: string[];
    method: "delete";
    path: "/profile/image";
    summary: string;
    description: string;
    responses: {
        200: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
        401: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/profile/image";
};
export declare const userVerifyDoc: {
    tags: string[];
    method: "post";
    path: "/verify";
    summary: string;
    description: string;
    request: {
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        email: z.ZodString;
                        otp: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        email: string;
                        otp: string;
                    }, {
                        email: string;
                        otp: string;
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
    getRoutingPath(): "/verify";
};
export declare const userResendOtpDoc: {
    tags: string[];
    method: "post";
    path: "/resend-otp";
    summary: string;
    description: string;
    request: {
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        email: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        email: string;
                    }, {
                        email: string;
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
    getRoutingPath(): "/resend-otp";
};
export declare const getAllUsersDoc: {
    tags: string[];
    method: "get";
    path: "/";
    summary: string;
    description: string;
    request: {
        query: z.ZodObject<{
            page: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>;
            limit: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>;
            roleId: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page: number;
            limit: number;
            roleId?: string | undefined;
        }, {
            roleId?: string | undefined;
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
        403: {
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
export declare const getUserByIdDoc: {
    tags: string[];
    method: "get";
    path: "/users/{id}";
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
        403: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/users/:id";
};
export declare const updateUserByIdDoc: {
    tags: string[];
    method: "patch";
    path: "/users/{id}";
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
                        fileId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                        mobileNumber: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                        roleId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                    }, "strip", z.ZodTypeAny, {
                        name?: string | undefined;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
                    }, {
                        name?: string | undefined;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
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
        403: {
            description: string;
            content: {
                'application/json': {
                    schema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/users/:id";
};
export declare const deleteUserDoc: {
    tags: string[];
    method: "delete";
    path: "/users/{id}";
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
        403: {
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
    };
} & {
    getRoutingPath(): "/users/:id";
};
