import { z } from '@hono/zod-openapi';
export declare const createBranchOfficeDoc: {
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
                        company_id: z.ZodNumber;
                        head_office_id: z.ZodNumber;
                        office_name: z.ZodString;
                        office_id: z.ZodString;
                        address: z.ZodString;
                        pincode: z.ZodString;
                        state: z.ZodString;
                        city: z.ZodString;
                        phone_number: z.ZodString;
                        mail_id: z.ZodString;
                        office_incharge_name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                        office_incharge_phone_number: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                        office_incharge_mail_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        company_id: number;
                        head_office_id: number;
                        state: string;
                        pincode: string;
                        address: string;
                        office_name: string;
                        office_id: string;
                        city: string;
                        phone_number: string;
                        mail_id: string;
                        office_incharge_name?: string | null | undefined;
                        office_incharge_phone_number?: string | null | undefined;
                        office_incharge_mail_id?: string | null | undefined;
                    }, {
                        company_id: number;
                        head_office_id: number;
                        state: string;
                        pincode: string;
                        address: string;
                        office_name: string;
                        office_id: string;
                        city: string;
                        phone_number: string;
                        mail_id: string;
                        office_incharge_name?: string | null | undefined;
                        office_incharge_phone_number?: string | null | undefined;
                        office_incharge_mail_id?: string | null | undefined;
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
                        branchOffice: z.ZodObject<{
                            id: z.ZodNumber;
                            company_id: z.ZodNumber;
                            head_office_id: z.ZodNumber;
                            office_name: z.ZodString;
                            office_id: z.ZodString;
                            address: z.ZodString;
                            pincode: z.ZodString;
                            state: z.ZodString;
                            city: z.ZodString;
                            phone_number: z.ZodString;
                            mail_id: z.ZodString;
                            office_incharge_name: z.ZodNullable<z.ZodString>;
                            office_incharge_phone_number: z.ZodNullable<z.ZodString>;
                            office_incharge_mail_id: z.ZodNullable<z.ZodString>;
                            created_at: z.ZodString;
                            updated_at: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        }, {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        branchOffice: {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        };
                    }, {
                        message: string;
                        status: number;
                        branchOffice: {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
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
    };
} & {
    getRoutingPath(): "/";
};
export declare const getBranchOfficesDoc: {
    tags: string[];
    method: "get";
    path: "/";
    summary: string;
    description: string;
    request: {
        query: z.ZodObject<{
            page: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>;
            limit: z.ZodDefault<z.ZodOptional<z.ZodEffects<z.ZodString, number, string>>>;
            company_id: z.ZodOptional<z.ZodString>;
            head_office_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            page: number;
            limit: number;
            company_id?: string | undefined;
            head_office_id?: string | undefined;
        }, {
            company_id?: string | undefined;
            head_office_id?: string | undefined;
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
                        message: z.ZodString;
                        branchOffices: z.ZodArray<z.ZodObject<{
                            id: z.ZodNumber;
                            company_id: z.ZodNumber;
                            head_office_id: z.ZodNumber;
                            office_name: z.ZodString;
                            office_id: z.ZodString;
                            address: z.ZodString;
                            pincode: z.ZodString;
                            state: z.ZodString;
                            city: z.ZodString;
                            phone_number: z.ZodString;
                            mail_id: z.ZodString;
                            office_incharge_name: z.ZodNullable<z.ZodString>;
                            office_incharge_phone_number: z.ZodNullable<z.ZodString>;
                            office_incharge_mail_id: z.ZodNullable<z.ZodString>;
                            created_at: z.ZodString;
                            updated_at: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        }, {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        }>, "many">;
                        total: z.ZodNumber;
                        page: z.ZodNumber;
                        limit: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        page: number;
                        limit: number;
                        branchOffices: {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        }[];
                        total: number;
                    }, {
                        message: string;
                        status: number;
                        page: number;
                        limit: number;
                        branchOffices: {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        }[];
                        total: number;
                    }>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/";
};
export declare const getBranchOfficeByIdDoc: {
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
                    schema: z.ZodObject<{
                        status: z.ZodNumber;
                        message: z.ZodString;
                        branchOffice: z.ZodObject<{
                            id: z.ZodNumber;
                            company_id: z.ZodNumber;
                            head_office_id: z.ZodNumber;
                            office_name: z.ZodString;
                            office_id: z.ZodString;
                            address: z.ZodString;
                            pincode: z.ZodString;
                            state: z.ZodString;
                            city: z.ZodString;
                            phone_number: z.ZodString;
                            mail_id: z.ZodString;
                            office_incharge_name: z.ZodNullable<z.ZodString>;
                            office_incharge_phone_number: z.ZodNullable<z.ZodString>;
                            office_incharge_mail_id: z.ZodNullable<z.ZodString>;
                            created_at: z.ZodString;
                            updated_at: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        }, {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        branchOffice: {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        };
                    }, {
                        message: string;
                        status: number;
                        branchOffice: {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
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
export declare const updateBranchOfficeDoc: {
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
                        company_id: z.ZodOptional<z.ZodNumber>;
                        head_office_id: z.ZodOptional<z.ZodNumber>;
                        office_name: z.ZodOptional<z.ZodString>;
                        office_id: z.ZodOptional<z.ZodString>;
                        address: z.ZodOptional<z.ZodString>;
                        pincode: z.ZodOptional<z.ZodString>;
                        state: z.ZodOptional<z.ZodString>;
                        city: z.ZodOptional<z.ZodString>;
                        phone_number: z.ZodOptional<z.ZodString>;
                        mail_id: z.ZodOptional<z.ZodString>;
                        office_incharge_name: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                        office_incharge_phone_number: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                        office_incharge_mail_id: z.ZodNullable<z.ZodOptional<z.ZodString>>;
                    }, "strip", z.ZodTypeAny, {
                        company_id?: number | undefined;
                        head_office_id?: number | undefined;
                        state?: string | undefined;
                        pincode?: string | undefined;
                        address?: string | undefined;
                        office_name?: string | undefined;
                        office_id?: string | undefined;
                        city?: string | undefined;
                        phone_number?: string | undefined;
                        mail_id?: string | undefined;
                        office_incharge_name?: string | null | undefined;
                        office_incharge_phone_number?: string | null | undefined;
                        office_incharge_mail_id?: string | null | undefined;
                    }, {
                        company_id?: number | undefined;
                        head_office_id?: number | undefined;
                        state?: string | undefined;
                        pincode?: string | undefined;
                        address?: string | undefined;
                        office_name?: string | undefined;
                        office_id?: string | undefined;
                        city?: string | undefined;
                        phone_number?: string | undefined;
                        mail_id?: string | undefined;
                        office_incharge_name?: string | null | undefined;
                        office_incharge_phone_number?: string | null | undefined;
                        office_incharge_mail_id?: string | null | undefined;
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
                        branchOffice: z.ZodObject<{
                            id: z.ZodNumber;
                            company_id: z.ZodNumber;
                            head_office_id: z.ZodNumber;
                            office_name: z.ZodString;
                            office_id: z.ZodString;
                            address: z.ZodString;
                            pincode: z.ZodString;
                            state: z.ZodString;
                            city: z.ZodString;
                            phone_number: z.ZodString;
                            mail_id: z.ZodString;
                            office_incharge_name: z.ZodNullable<z.ZodString>;
                            office_incharge_phone_number: z.ZodNullable<z.ZodString>;
                            office_incharge_mail_id: z.ZodNullable<z.ZodString>;
                            created_at: z.ZodString;
                            updated_at: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        }, {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        branchOffice: {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
                        };
                    }, {
                        message: string;
                        status: number;
                        branchOffice: {
                            id: number;
                            company_id: number;
                            head_office_id: number;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            address: string;
                            office_name: string;
                            office_id: string;
                            city: string;
                            phone_number: string;
                            mail_id: string;
                            office_incharge_name: string | null;
                            office_incharge_phone_number: string | null;
                            office_incharge_mail_id: string | null;
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
export declare const deleteBranchOfficeDoc: {
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
