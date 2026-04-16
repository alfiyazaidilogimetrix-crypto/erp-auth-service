import { z } from '@hono/zod-openapi';
export declare const bulkCreateUserDoc: {
    tags: string[];
    method: "post";
    path: "/bulk-excel";
    summary: string;
    description: string;
    request: {
        headers: z.ZodObject<{
            Authorization: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            Authorization: string;
        }, {
            Authorization: string;
        }>;
        body: {
            content: {
                'application/json': {
                    schema: z.ZodObject<{
                        users: z.ZodArray<z.ZodObject<{
                            username: z.ZodString;
                            email: z.ZodString;
                            password: z.ZodString;
                            'Mobile Number': z.ZodNullable<z.ZodOptional<z.ZodString>>;
                            Role: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                        }, "strip", z.ZodTypeAny, {
                            password: string;
                            email: string;
                            username: string;
                            'Mobile Number'?: string | null | undefined;
                            Role?: string | null | undefined;
                        }, {
                            password: string;
                            email: string;
                            username: string;
                            'Mobile Number'?: string | null | undefined;
                            Role?: string | null | undefined;
                        }>, "many">;
                    }, "strip", z.ZodTypeAny, {
                        users: {
                            password: string;
                            email: string;
                            username: string;
                            'Mobile Number'?: string | null | undefined;
                            Role?: string | null | undefined;
                        }[];
                    }, {
                        users: {
                            password: string;
                            email: string;
                            username: string;
                            'Mobile Number'?: string | null | undefined;
                            Role?: string | null | undefined;
                        }[];
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
                        data: z.ZodObject<{
                            success: z.ZodNumber;
                            failed: z.ZodNumber;
                            data: z.ZodArray<z.ZodAny, "many">;
                            errors: z.ZodArray<z.ZodObject<{
                                row: z.ZodNumber;
                                message: z.ZodString;
                            }, "strip", z.ZodTypeAny, {
                                message: string;
                                row: number;
                            }, {
                                message: string;
                                row: number;
                            }>, "many">;
                        }, "strip", z.ZodTypeAny, {
                            data: any[];
                            success: number;
                            failed: number;
                            errors: {
                                message: string;
                                row: number;
                            }[];
                        }, {
                            data: any[];
                            success: number;
                            failed: number;
                            errors: {
                                message: string;
                                row: number;
                            }[];
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        data: {
                            data: any[];
                            success: number;
                            failed: number;
                            errors: {
                                message: string;
                                row: number;
                            }[];
                        };
                    }, {
                        message: string;
                        status: number;
                        data: {
                            data: any[];
                            success: number;
                            failed: number;
                            errors: {
                                message: string;
                                row: number;
                            }[];
                        };
                    }>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/bulk-excel";
};
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
                        company_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                        office: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            head_office: z.ZodNumber;
                            branch_offices: z.ZodArray<z.ZodNumber, "many">;
                        }, "strip", z.ZodTypeAny, {
                            head_office: number;
                            branch_offices: number[];
                        }, {
                            head_office: number;
                            branch_offices: number[];
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        password: string;
                        name: string;
                        email: string;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
                        company_id?: number | null | undefined;
                        office?: {
                            head_office: number;
                            branch_offices: number[];
                        }[] | undefined;
                    }, {
                        password: string;
                        name: string;
                        email: string;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
                        company_id?: number | null | undefined;
                        office?: {
                            head_office: number;
                            branch_offices: number[];
                        }[] | undefined;
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
                        password: string;
                        email: string;
                    }, {
                        password: string;
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
                        company_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                        office: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            head_office: z.ZodNumber;
                            branch_offices: z.ZodArray<z.ZodNumber, "many">;
                        }, "strip", z.ZodTypeAny, {
                            head_office: number;
                            branch_offices: number[];
                        }, {
                            head_office: number;
                            branch_offices: number[];
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        name?: string | undefined;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
                        company_id?: number | null | undefined;
                        office?: {
                            head_office: number;
                            branch_offices: number[];
                        }[] | undefined;
                    }, {
                        name?: string | undefined;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
                        company_id?: number | null | undefined;
                        office?: {
                            head_office: number;
                            branch_offices: number[];
                        }[] | undefined;
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
                        company_id: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
                        office: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            head_office: z.ZodNumber;
                            branch_offices: z.ZodArray<z.ZodNumber, "many">;
                        }, "strip", z.ZodTypeAny, {
                            head_office: number;
                            branch_offices: number[];
                        }, {
                            head_office: number;
                            branch_offices: number[];
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        name?: string | undefined;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
                        company_id?: number | null | undefined;
                        office?: {
                            head_office: number;
                            branch_offices: number[];
                        }[] | undefined;
                    }, {
                        name?: string | undefined;
                        fileId?: number | null | undefined;
                        mobileNumber?: string | null | undefined;
                        roleId?: number | null | undefined;
                        company_id?: number | null | undefined;
                        office?: {
                            head_office: number;
                            branch_offices: number[];
                        }[] | undefined;
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
