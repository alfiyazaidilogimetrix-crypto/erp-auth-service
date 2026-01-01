import { z } from "@hono/zod-openapi";
export declare const sendMailSchema: z.ZodObject<{
    subject: z.ZodString;
    to: z.ZodString;
    from: z.ZodOptional<z.ZodString>;
    cc: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    html: z.ZodString;
}, "strip", z.ZodTypeAny, {
    html: string;
    to: string;
    subject: string;
    from?: string | undefined;
    cc?: string[] | undefined;
}, {
    html: string;
    to: string;
    subject: string;
    from?: string | undefined;
    cc?: string[] | undefined;
}>;
export type ISendMail = z.infer<typeof sendMailSchema>;
