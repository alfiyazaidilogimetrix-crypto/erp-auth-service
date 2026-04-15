import { z } from '@hono/zod-openapi';
export declare const createCompanyDoc: {
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
                        company_name: z.ZodString;
                        pincode: z.ZodString;
                        state: z.ZodString;
                        district: z.ZodString;
                        address: z.ZodString;
                        company_mail_id: z.ZodString;
                        company_phone_number: z.ZodString;
                        company_gst_number: z.ZodString;
                        business_type: z.ZodString;
                        user_id: z.ZodNumber;
                        ownerDetails: z.ZodOptional<z.ZodObject<{
                            owner_name: z.ZodString;
                            owner_father_name: z.ZodString;
                            dob: z.ZodString;
                            pincode: z.ZodString;
                            state: z.ZodString;
                            district: z.ZodString;
                            address: z.ZodString;
                            owner_phone_number: z.ZodString;
                            owner_mail_id: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            district: string;
                            state: string;
                            pincode: string;
                            address: string;
                            owner_name: string;
                            owner_father_name: string;
                            dob: string;
                            owner_phone_number: string;
                            owner_mail_id: string;
                        }, {
                            district: string;
                            state: string;
                            pincode: string;
                            address: string;
                            owner_name: string;
                            owner_father_name: string;
                            dob: string;
                            owner_phone_number: string;
                            owner_mail_id: string;
                        }>>;
                        legal_proof: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            file_ids: z.ZodArray<z.ZodNumber, "many">;
                            file_type: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            file_ids: number[];
                            file_type: string;
                        }, {
                            file_ids: number[];
                            file_type: string;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        district: string;
                        state: string;
                        pincode: string;
                        user_id: number;
                        address: string;
                        company_name: string;
                        company_mail_id: string;
                        company_phone_number: string;
                        company_gst_number: string;
                        business_type: string;
                        ownerDetails?: {
                            district: string;
                            state: string;
                            pincode: string;
                            address: string;
                            owner_name: string;
                            owner_father_name: string;
                            dob: string;
                            owner_phone_number: string;
                            owner_mail_id: string;
                        } | undefined;
                        legal_proof?: {
                            file_ids: number[];
                            file_type: string;
                        }[] | undefined;
                    }, {
                        district: string;
                        state: string;
                        pincode: string;
                        user_id: number;
                        address: string;
                        company_name: string;
                        company_mail_id: string;
                        company_phone_number: string;
                        company_gst_number: string;
                        business_type: string;
                        ownerDetails?: {
                            district: string;
                            state: string;
                            pincode: string;
                            address: string;
                            owner_name: string;
                            owner_father_name: string;
                            dob: string;
                            owner_phone_number: string;
                            owner_mail_id: string;
                        } | undefined;
                        legal_proof?: {
                            file_ids: number[];
                            file_type: string;
                        }[] | undefined;
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
                        company: z.ZodObject<{
                            id: z.ZodNumber;
                            company_name: z.ZodString;
                            pincode: z.ZodString;
                            state: z.ZodString;
                            district: z.ZodString;
                            address: z.ZodString;
                            company_mail_id: z.ZodString;
                            company_phone_number: z.ZodString;
                            company_gst_number: z.ZodString;
                            business_type: z.ZodString;
                            user_id: z.ZodNumber;
                            owner_id: z.ZodNullable<z.ZodNumber>;
                            ownerDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                                owner_name: z.ZodString;
                                owner_father_name: z.ZodString;
                                dob: z.ZodString;
                                pincode: z.ZodString;
                                state: z.ZodString;
                                district: z.ZodString;
                                address: z.ZodString;
                                owner_phone_number: z.ZodString;
                                owner_mail_id: z.ZodString;
                            } & {
                                id: z.ZodNumber;
                            }, "strip", z.ZodTypeAny, {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            }, {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            }>>>;
                            companyFiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                id: z.ZodNumber;
                                file_id: z.ZodNumber;
                                file_type: z.ZodString;
                                file: z.ZodOptional<z.ZodAny>;
                            }, "strip", z.ZodTypeAny, {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }, {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }>, "many">>;
                            created_at: z.ZodString;
                            updated_at: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
                        }, {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        company: {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
                        };
                    }, {
                        message: string;
                        status: number;
                        company: {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
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
export declare const getCompaniesDoc: {
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
                        message: z.ZodString;
                        companies: z.ZodArray<z.ZodObject<{
                            id: z.ZodNumber;
                            company_name: z.ZodString;
                            pincode: z.ZodString;
                            state: z.ZodString;
                            district: z.ZodString;
                            address: z.ZodString;
                            company_mail_id: z.ZodString;
                            company_phone_number: z.ZodString;
                            company_gst_number: z.ZodString;
                            business_type: z.ZodString;
                            user_id: z.ZodNumber;
                            owner_id: z.ZodNullable<z.ZodNumber>;
                            ownerDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                                owner_name: z.ZodString;
                                owner_father_name: z.ZodString;
                                dob: z.ZodString;
                                pincode: z.ZodString;
                                state: z.ZodString;
                                district: z.ZodString;
                                address: z.ZodString;
                                owner_phone_number: z.ZodString;
                                owner_mail_id: z.ZodString;
                            } & {
                                id: z.ZodNumber;
                            }, "strip", z.ZodTypeAny, {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            }, {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            }>>>;
                            companyFiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                id: z.ZodNumber;
                                file_id: z.ZodNumber;
                                file_type: z.ZodString;
                                file: z.ZodOptional<z.ZodAny>;
                            }, "strip", z.ZodTypeAny, {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }, {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }>, "many">>;
                            created_at: z.ZodString;
                            updated_at: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
                        }, {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
                        }>, "many">;
                        total: z.ZodNumber;
                        page: z.ZodNumber;
                        limit: z.ZodNumber;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        companies: {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
                        }[];
                        page: number;
                        limit: number;
                        total: number;
                    }, {
                        message: string;
                        status: number;
                        companies: {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
                        }[];
                        page: number;
                        limit: number;
                        total: number;
                    }>;
                };
            };
        };
    };
} & {
    getRoutingPath(): "/";
};
export declare const getCompanyByIdDoc: {
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
                        company: z.ZodObject<{
                            id: z.ZodNumber;
                            company_name: z.ZodString;
                            pincode: z.ZodString;
                            state: z.ZodString;
                            district: z.ZodString;
                            address: z.ZodString;
                            company_mail_id: z.ZodString;
                            company_phone_number: z.ZodString;
                            company_gst_number: z.ZodString;
                            business_type: z.ZodString;
                            user_id: z.ZodNumber;
                            owner_id: z.ZodNullable<z.ZodNumber>;
                            ownerDetails: z.ZodOptional<z.ZodNullable<z.ZodObject<{
                                owner_name: z.ZodString;
                                owner_father_name: z.ZodString;
                                dob: z.ZodString;
                                pincode: z.ZodString;
                                state: z.ZodString;
                                district: z.ZodString;
                                address: z.ZodString;
                                owner_phone_number: z.ZodString;
                                owner_mail_id: z.ZodString;
                            } & {
                                id: z.ZodNumber;
                            }, "strip", z.ZodTypeAny, {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            }, {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            }>>>;
                            companyFiles: z.ZodOptional<z.ZodArray<z.ZodObject<{
                                id: z.ZodNumber;
                                file_id: z.ZodNumber;
                                file_type: z.ZodString;
                                file: z.ZodOptional<z.ZodAny>;
                            }, "strip", z.ZodTypeAny, {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }, {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }>, "many">>;
                            created_at: z.ZodString;
                            updated_at: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
                        }, {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
                        }>;
                    }, "strip", z.ZodTypeAny, {
                        message: string;
                        status: number;
                        company: {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
                        };
                    }, {
                        message: string;
                        status: number;
                        company: {
                            id: number;
                            district: string;
                            state: string;
                            pincode: string;
                            created_at: string;
                            updated_at: string;
                            user_id: number;
                            address: string;
                            company_name: string;
                            company_mail_id: string;
                            company_phone_number: string;
                            company_gst_number: string;
                            business_type: string;
                            owner_id: number | null;
                            companyFiles?: {
                                id: number;
                                file_id: number;
                                file_type: string;
                                file?: any;
                            }[] | undefined;
                            ownerDetails?: {
                                id: number;
                                district: string;
                                state: string;
                                pincode: string;
                                address: string;
                                owner_name: string;
                                owner_father_name: string;
                                dob: string;
                                owner_phone_number: string;
                                owner_mail_id: string;
                            } | null | undefined;
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
export declare const updateCompanyDoc: {
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
                        company_name: z.ZodOptional<z.ZodString>;
                        pincode: z.ZodOptional<z.ZodString>;
                        state: z.ZodOptional<z.ZodString>;
                        district: z.ZodOptional<z.ZodString>;
                        address: z.ZodOptional<z.ZodString>;
                        company_mail_id: z.ZodOptional<z.ZodString>;
                        company_phone_number: z.ZodOptional<z.ZodString>;
                        company_gst_number: z.ZodOptional<z.ZodString>;
                        business_type: z.ZodOptional<z.ZodString>;
                        ownerDetails: z.ZodOptional<z.ZodObject<{
                            owner_name: z.ZodOptional<z.ZodString>;
                            owner_father_name: z.ZodOptional<z.ZodString>;
                            dob: z.ZodOptional<z.ZodString>;
                            pincode: z.ZodOptional<z.ZodString>;
                            state: z.ZodOptional<z.ZodString>;
                            district: z.ZodOptional<z.ZodString>;
                            address: z.ZodOptional<z.ZodString>;
                            owner_phone_number: z.ZodOptional<z.ZodString>;
                            owner_mail_id: z.ZodOptional<z.ZodString>;
                        }, "strip", z.ZodTypeAny, {
                            district?: string | undefined;
                            state?: string | undefined;
                            pincode?: string | undefined;
                            address?: string | undefined;
                            owner_name?: string | undefined;
                            owner_father_name?: string | undefined;
                            dob?: string | undefined;
                            owner_phone_number?: string | undefined;
                            owner_mail_id?: string | undefined;
                        }, {
                            district?: string | undefined;
                            state?: string | undefined;
                            pincode?: string | undefined;
                            address?: string | undefined;
                            owner_name?: string | undefined;
                            owner_father_name?: string | undefined;
                            dob?: string | undefined;
                            owner_phone_number?: string | undefined;
                            owner_mail_id?: string | undefined;
                        }>>;
                        legal_proof: z.ZodOptional<z.ZodArray<z.ZodObject<{
                            file_ids: z.ZodArray<z.ZodNumber, "many">;
                            file_type: z.ZodString;
                        }, "strip", z.ZodTypeAny, {
                            file_ids: number[];
                            file_type: string;
                        }, {
                            file_ids: number[];
                            file_type: string;
                        }>, "many">>;
                    }, "strip", z.ZodTypeAny, {
                        district?: string | undefined;
                        state?: string | undefined;
                        pincode?: string | undefined;
                        address?: string | undefined;
                        company_name?: string | undefined;
                        company_mail_id?: string | undefined;
                        company_phone_number?: string | undefined;
                        company_gst_number?: string | undefined;
                        business_type?: string | undefined;
                        ownerDetails?: {
                            district?: string | undefined;
                            state?: string | undefined;
                            pincode?: string | undefined;
                            address?: string | undefined;
                            owner_name?: string | undefined;
                            owner_father_name?: string | undefined;
                            dob?: string | undefined;
                            owner_phone_number?: string | undefined;
                            owner_mail_id?: string | undefined;
                        } | undefined;
                        legal_proof?: {
                            file_ids: number[];
                            file_type: string;
                        }[] | undefined;
                    }, {
                        district?: string | undefined;
                        state?: string | undefined;
                        pincode?: string | undefined;
                        address?: string | undefined;
                        company_name?: string | undefined;
                        company_mail_id?: string | undefined;
                        company_phone_number?: string | undefined;
                        company_gst_number?: string | undefined;
                        business_type?: string | undefined;
                        ownerDetails?: {
                            district?: string | undefined;
                            state?: string | undefined;
                            pincode?: string | undefined;
                            address?: string | undefined;
                            owner_name?: string | undefined;
                            owner_father_name?: string | undefined;
                            dob?: string | undefined;
                            owner_phone_number?: string | undefined;
                            owner_mail_id?: string | undefined;
                        } | undefined;
                        legal_proof?: {
                            file_ids: number[];
                            file_type: string;
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
export declare const deleteCompanyDoc: {
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
