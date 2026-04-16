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
    description?: string | null | undefined;
    name?: string | undefined;
    permissionIds?: number[] | undefined;
}, {
    description?: string | null | undefined;
    name?: string | undefined;
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
            description: string | null;
            id: number;
            Name: string;
        }, {
            description: string | null;
            id: number;
            Name: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: number;
        action: string[];
        modules: {
            description: string | null;
            id: number;
            Name: string;
        }[];
    }, {
        id: number;
        action: string[];
        modules: {
            description: string | null;
            id: number;
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
    description: string | null;
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    users?: {
        id: number;
        name: string;
        email: string;
    }[] | undefined;
    permissions?: {
        id: number;
        action: string[];
        modules: {
            description: string | null;
            id: number;
            Name: string;
        }[];
    }[] | undefined;
}, {
    description: string | null;
    id: number;
    name: string;
    createdAt: string;
    updatedAt: string;
    users?: {
        id: number;
        name: string;
        email: string;
    }[] | undefined;
    permissions?: {
        id: number;
        action: string[];
        modules: {
            description: string | null;
            id: number;
            Name: string;
        }[];
    }[] | undefined;
}>;
export declare const createPermissionSchema: z.ZodObject<{
    action: z.ZodArray<z.ZodString, "many">;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    moduleIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
}, "strip", z.ZodTypeAny, {
    action: string[];
    moduleIds: number[];
    description?: string | null | undefined;
    title?: string | undefined;
}, {
    action: string[];
    description?: string | null | undefined;
    title?: string | undefined;
    moduleIds?: number[] | undefined;
}>;
export declare const updatePermissionSchema: z.ZodObject<{
    action: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    title: z.ZodOptional<z.ZodString>;
    description: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    moduleIds: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodNumber, "many">>>;
}, "strip", z.ZodTypeAny, {
    moduleIds: number[];
    description?: string | null | undefined;
    title?: string | undefined;
    action?: string[] | undefined;
}, {
    description?: string | null | undefined;
    title?: string | undefined;
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
        description: string | null;
        id: number;
        Name: string;
    }, {
        description: string | null;
        id: number;
        Name: string;
    }>, "many">>;
    roles: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        description: z.ZodNullable<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        description: string | null;
        id: number;
        name: string;
    }, {
        description: string | null;
        id: number;
        name: string;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: number;
    createdAt: string;
    updatedAt: string;
    action: string[];
    modules?: {
        description: string | null;
        id: number;
        Name: string;
    }[] | undefined;
    roles?: {
        description: string | null;
        id: number;
        name: string;
    }[] | undefined;
}, {
    id: number;
    createdAt: string;
    updatedAt: string;
    action: string[];
    modules?: {
        description: string | null;
        id: number;
        Name: string;
    }[] | undefined;
    roles?: {
        description: string | null;
        id: number;
        name: string;
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
            description: string | null;
            id: number;
            Name: string;
        }, {
            description: string | null;
            id: number;
            Name: string;
        }>, "many">>;
        roles: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            name: z.ZodString;
            description: z.ZodNullable<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            description: string | null;
            id: number;
            name: string;
        }, {
            description: string | null;
            id: number;
            name: string;
        }>, "many">>;
        createdAt: z.ZodString;
        updatedAt: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: number;
        createdAt: string;
        updatedAt: string;
        action: string[];
        modules?: {
            description: string | null;
            id: number;
            Name: string;
        }[] | undefined;
        roles?: {
            description: string | null;
            id: number;
            name: string;
        }[] | undefined;
    }, {
        id: number;
        createdAt: string;
        updatedAt: string;
        action: string[];
        modules?: {
            description: string | null;
            id: number;
            Name: string;
        }[] | undefined;
        roles?: {
            description: string | null;
            id: number;
            name: string;
        }[] | undefined;
    }>, "many">>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    description: string | null;
    id: number;
    createdAt: string;
    updatedAt: string;
    Name: string;
    permissions?: {
        id: number;
        createdAt: string;
        updatedAt: string;
        action: string[];
        modules?: {
            description: string | null;
            id: number;
            Name: string;
        }[] | undefined;
        roles?: {
            description: string | null;
            id: number;
            name: string;
        }[] | undefined;
    }[] | undefined;
}, {
    description: string | null;
    id: number;
    createdAt: string;
    updatedAt: string;
    Name: string;
    permissions?: {
        id: number;
        createdAt: string;
        updatedAt: string;
        action: string[];
        modules?: {
            description: string | null;
            id: number;
            Name: string;
        }[] | undefined;
        roles?: {
            description: string | null;
            id: number;
            name: string;
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
