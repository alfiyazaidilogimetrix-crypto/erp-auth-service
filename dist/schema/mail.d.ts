import { z } from "@hono/zod-openapi";
export declare const sendMailSchema: z.ZodObject<{
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
export type ISendMail = z.infer<typeof sendMailSchema>;
