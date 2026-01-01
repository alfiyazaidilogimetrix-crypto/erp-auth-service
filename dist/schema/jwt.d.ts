import { z } from '@hono/zod-openapi';
export declare const userPayloadSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    email: z.ZodString;
    roleId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    role: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        permissions: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            action: z.ZodArray<z.ZodString, "many">;
            modules: z.ZodArray<z.ZodObject<{
                id: z.ZodString;
                Name: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                id: string;
                Name: string;
            }, {
                id: string;
                Name: string;
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            id: string;
            action: string[];
            modules: {
                id: string;
                Name: string;
            }[];
        }, {
            id: string;
            action: string[];
            modules: {
                id: string;
                Name: string;
            }[];
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: string;
        permissions: {
            id: string;
            action: string[];
            modules: {
                id: string;
                Name: string;
            }[];
        }[];
    }, {
        name: string;
        id: string;
        permissions: {
            id: string;
            action: string[];
            modules: {
                id: string;
                Name: string;
            }[];
        }[];
    }>>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    email: string;
    role?: {
        name: string;
        id: string;
        permissions: {
            id: string;
            action: string[];
            modules: {
                id: string;
                Name: string;
            }[];
        }[];
    } | null | undefined;
    roleId?: string | null | undefined;
}, {
    name: string;
    id: number;
    email: string;
    role?: {
        name: string;
        id: string;
        permissions: {
            id: string;
            action: string[];
            modules: {
                id: string;
                Name: string;
            }[];
        }[];
    } | null | undefined;
    roleId?: string | null | undefined;
}>;
export type IUserPayload = z.infer<typeof userPayloadSchema>;
