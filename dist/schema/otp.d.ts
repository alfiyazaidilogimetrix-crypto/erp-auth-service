import { z } from "@hono/zod-openapi";
export declare const generateOtpSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const verifyOtpSchema: z.ZodObject<{
    token: z.ZodString;
    otp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    otp: string;
    token: string;
}, {
    otp: string;
    token: string;
}>;
export declare const resendOtpSchema: z.ZodObject<{
    token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
}, {
    token: string;
}>;
export type IGenerateOtp = z.infer<typeof generateOtpSchema>;
export type IVerifyOtp = z.infer<typeof verifyOtpSchema>;
export type IResendOtp = z.infer<typeof resendOtpSchema>;
