import { z } from "@hono/zod-openapi";
export declare const sendMailDoc: {
    tags: string[];
    method: "post";
    path: "/send-mail";
    summary: string;
    request: {
        body: {
            content: {
                "application/json": {
                    schema: z.ZodObject<{
                        subject: z.ZodString;
                        to: z.ZodString;
                        from: z.ZodOptional<z.ZodString>;
                        cc: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
                        html: z.ZodString;
                    }, "strip", z.ZodTypeAny, {
                        to: string;
                        subject: string;
                        html: string;
                        from?: string | undefined;
                        cc?: string[] | undefined;
                    }, {
                        to: string;
                        subject: string;
                        html: string;
                        from?: string | undefined;
                        cc?: string[] | undefined;
                    }>;
                };
            };
        };
    };
    responses: {
        200: {
            description: string;
            content: {
                "application/json": {
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
    };
} & {
    getRoutingPath(): "/send-mail";
};
