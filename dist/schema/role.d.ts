import { z } from '@hono/zod-openapi';
export declare const assignRoleToUserSchema: z.ZodObject<{
    userId: z.ZodNumber;
    roleId: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    roleId: number;
    userId: number;
}, {
    roleId: number;
    userId: number;
}>;
export declare const createRoleSchema: z.ZodObject<{
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
export declare const updateRoleSchema: z.ZodObject<{
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
export declare const roleResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    permissions: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        action: z.ZodArray<z.ZodString, "many">;
        modules: z.ZodArray<z.ZodObject<{
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
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: number;
        action: string[];
        modules: {
            id: number;
            description: string | null;
            Name: string;
        }[];
    }, {
        id: number;
        action: string[];
        modules: {
            id: number;
            description: string | null;
            Name: string;
        }[];
    }>, "many">>;
    users: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        name: string;
        email: string;
    }, {
        id: number;
        name: string;
        email: string;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    description: string | null;
    permissions?: {
        id: number;
        action: string[];
        modules: {
            id: number;
            description: string | null;
            Name: string;
        }[];
    }[] | undefined;
    users?: {
        id: number;
        name: string;
        email: string;
    }[] | undefined;
}, {
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    description: string | null;
    permissions?: {
        id: number;
        action: string[];
        modules: {
            id: number;
            description: string | null;
            Name: string;
        }[];
    }[] | undefined;
    users?: {
        id: number;
        name: string;
        email: string;
    }[] | undefined;
}>;
export declare const createPermissionSchema: z.ZodObject<{
    action: z.ZodArray<z.ZodString, "many">;
    moduleIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
}, "strip", z.ZodTypeAny, {
    action: string[];
    moduleIds: number[];
}, {
    action: string[];
    moduleIds?: number[] | undefined;
}>;
export declare const updatePermissionSchema: z.ZodObject<{
    action: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    moduleIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
}, "strip", z.ZodTypeAny, {
    moduleIds: number[];
    action?: string[] | undefined;
}, {
    action?: string[] | undefined;
    moduleIds?: number[] | undefined;
}>;
export declare const permissionResponseSchema: z.ZodObject<{
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
        id: number;
        name: string;
        description: string | null;
    }, {
        id: number;
        name: string;
        description: string | null;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: string;
    updatedAt: string;
    action: string[];
    modules?: {
        id: number;
        description: string | null;
        Name: string;
    }[] | undefined;
    roles?: {
        id: number;
        name: string;
        description: string | null;
    }[] | undefined;
}, {
    id: number;
    createdAt: string;
    updatedAt: string;
    action: string[];
    modules?: {
        id: number;
        description: string | null;
        Name: string;
    }[] | undefined;
    roles?: {
        id: number;
        name: string;
        description: string | null;
    }[] | undefined;
}>;
export declare const createModuleSchema: z.ZodObject<{
    Name: z.ZodString;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    Name: string;
    description?: string | null | undefined;
}, {
    Name: string;
    description?: string | null | undefined;
}>;
export declare const updateModuleSchema: z.ZodObject<{
    Name: z.ZodOptional<z.ZodString>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
}, "strip", z.ZodTypeAny, {
    description?: string | null | undefined;
    Name?: string | undefined;
}, {
    description?: string | null | undefined;
    Name?: string | undefined;
}>;
export declare const moduleResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    Name: z.ZodString;
    description: z.ZodNullable<z.ZodString>;
    permissions: z.ZodOptional<z.ZodArray<z.ZodObject<{
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
            id: number;
            name: string;
            description: string | null;
        }, {
            id: number;
            name: string;
            description: string | null;
        }>, "many">>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        createdAt: string;
        updatedAt: string;
        action: string[];
        modules?: {
            id: number;
            description: string | null;
            Name: string;
        }[] | undefined;
        roles?: {
            id: number;
            name: string;
            description: string | null;
        }[] | undefined;
    }, {
        id: number;
        createdAt: string;
        updatedAt: string;
        action: string[];
        modules?: {
            id: number;
            description: string | null;
            Name: string;
        }[] | undefined;
        roles?: {
            id: number;
            name: string;
            description: string | null;
        }[] | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: string;
    updatedAt: string;
    description: string | null;
    Name: string;
    permissions?: {
        id: number;
        createdAt: string;
        updatedAt: string;
        action: string[];
        modules?: {
            id: number;
            description: string | null;
            Name: string;
        }[] | undefined;
        roles?: {
            id: number;
            name: string;
            description: string | null;
        }[] | undefined;
    }[] | undefined;
}, {
    id: number;
    createdAt: string;
    updatedAt: string;
    description: string | null;
    Name: string;
    permissions?: {
        id: number;
        createdAt: string;
        updatedAt: string;
        action: string[];
        modules?: {
            id: number;
            description: string | null;
            Name: string;
        }[] | undefined;
        roles?: {
            id: number;
            name: string;
            description: string | null;
        }[] | undefined;
    }[] | undefined;
}>;
export type ICreateRole = z.infer<typeof createRoleSchema>;
export type IUpdateRole = z.infer<typeof updateRoleSchema>;
export type IRoleResponse = z.infer<typeof roleResponseSchema>;
export type ICreatePermission = z.infer<typeof createPermissionSchema>;
export type IUpdatePermission = z.infer<typeof updatePermissionSchema>;
export type IPermissionResponse = z.infer<typeof permissionResponseSchema>;
export type ICreateModule = z.infer<typeof createModuleSchema>;
export type IUpdateModule = z.infer<typeof updateModuleSchema>;
export type IModuleResponse = z.infer<typeof moduleResponseSchema>;
export type IAssignRoleToUser = z.infer<typeof assignRoleToUserSchema>;
