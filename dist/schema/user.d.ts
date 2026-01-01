import { z } from '@hono/zod-openapi';
export declare const userRegisterSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    fileId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    mobileNumber: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    roleId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    password: string;
    fileId?: number | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
}, {
    name: string;
    email: string;
    password: string;
    fileId?: number | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
}>;
export declare const userLoginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const updateUserProfileSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    fileId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    mobileNumber: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    roleId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    fileId?: number | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
}, {
    name?: string | undefined;
    fileId?: number | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
}>;
export declare const updateUserPasswordSchema: z.ZodObject<{
    currentPassword: z.ZodString;
    newPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    currentPassword: string;
    newPassword: string;
}, {
    currentPassword: string;
    newPassword: string;
}>;
export declare const userResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    email: z.ZodString;
    emailVerified: z.ZodBoolean;
    fileId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    profileImage: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        filename: z.ZodString;
        originalName: z.ZodString;
        mimeType: z.ZodString;
        size: z.ZodNumber;
        filePath: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        filename: string;
        id: number;
        size: number;
        originalName: string;
        mimeType: string;
        filePath: string;
    }, {
        filename: string;
        id: number;
        size: number;
        originalName: string;
        mimeType: string;
        filePath: string;
    }>>>;
    mobileNumber: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roleId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    role: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        id: z.ZodNumber;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        name: string;
        id: number;
        description?: string | null | undefined;
    }, {
        name: string;
        id: number;
        description?: string | null | undefined;
    }>>>;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
    provider: z.ZodEnum<["credentials", "google", "github"]>;
}, "strip", z.ZodTypeAny, {
    name: string;
    id: number;
    email: string;
    provider: "credentials" | "google" | "github";
    emailVerified: boolean;
    createdAt: string;
    updatedAt: string;
    role?: {
        name: string;
        id: number;
        description?: string | null | undefined;
    } | null | undefined;
    fileId?: number | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
    profileImage?: {
        filename: string;
        id: number;
        size: number;
        originalName: string;
        mimeType: string;
        filePath: string;
    } | null | undefined;
}, {
    name: string;
    id: number;
    email: string;
    provider: "credentials" | "google" | "github";
    emailVerified: boolean;
    createdAt: string;
    updatedAt: string;
    role?: {
        name: string;
        id: number;
        description?: string | null | undefined;
    } | null | undefined;
    fileId?: number | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
    profileImage?: {
        filename: string;
        id: number;
        size: number;
        originalName: string;
        mimeType: string;
        filePath: string;
    } | null | undefined;
}>;
export declare const verifyOtpSchema: z.ZodObject<{
    email: z.ZodString;
    otp: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    otp: string;
}, {
    email: string;
    otp: string;
}>;
export declare const resendOtpSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const createUserByAdminSchema: z.ZodObject<{
    name: z.ZodString;
    email: z.ZodString;
    fileId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    mobileNumber: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    roleId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    fileId?: number | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
}, {
    name: string;
    email: string;
    fileId?: number | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
}>;
export declare const updateUserByAdminSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    fileId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    mobileNumber: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    roleId: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
    emailVerified: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: boolean | undefined;
    fileId?: number | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
}, {
    name?: string | undefined;
    email?: string | undefined;
    emailVerified?: boolean | undefined;
    fileId?: number | null | undefined;
    mobileNumber?: string | null | undefined;
    roleId?: number | null | undefined;
}>;
export declare const forgotPasswordSchema: z.ZodObject<{
    email: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
}, {
    email: string;
}>;
export declare const resetPasswordSchema: z.ZodObject<{
    token: z.ZodString;
    newPassword: z.ZodString;
}, "strip", z.ZodTypeAny, {
    token: string;
    newPassword: string;
}, {
    token: string;
    newPassword: string;
}>;
export type IVerifyOtp = z.infer<typeof verifyOtpSchema>;
export type IResendOtp = z.infer<typeof resendOtpSchema>;
export type IUserRegister = z.infer<typeof userRegisterSchema>;
export type IUserLogin = z.infer<typeof userLoginSchema>;
export type IUpdateUserProfile = z.infer<typeof updateUserProfileSchema>;
export type IUpdateUserPassword = z.infer<typeof updateUserPasswordSchema>;
export type IUserResponse = z.infer<typeof userResponseSchema>;
export type ICreateUserByAdmin = z.infer<typeof createUserByAdminSchema>;
export type IUpdateUserByAdmin = z.infer<typeof updateUserByAdminSchema>;
export type IForgotPassword = z.infer<typeof forgotPasswordSchema>;
export type IResetPassword = z.infer<typeof resetPasswordSchema>;
