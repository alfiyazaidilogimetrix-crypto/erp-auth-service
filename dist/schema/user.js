"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPasswordSchema = exports.forgotPasswordSchema = exports.updateUserByAdminSchema = exports.createUserByAdminSchema = exports.resendOtpSchema = exports.verifyOtpSchema = exports.userResponseSchema = exports.updateUserPasswordSchema = exports.updateUserProfileSchema = exports.userLoginSchema = exports.userRegisterSchema = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
exports.userRegisterSchema = zod_openapi_1.z
    .object({
    name: zod_openapi_1.z.string().min(1, 'Name is required').max(100),
    email: zod_openapi_1.z.string().email('Valid email is required'),
    password: zod_openapi_1.z
        .string()
        .min(6, 'Password must be at least 6 characters')
        .max(100),
    fileId: zod_openapi_1.z.number().int().positive().optional().nullable(),
    mobileNumber: zod_openapi_1.z.string().max(20).optional().nullable(),
    roleId: zod_openapi_1.z.number().optional().nullable(),
})
    .openapi({
    required: ['name', 'email', 'password'],
    example: {
        name: 'John Doe',
        email: 'john.doe@example.com',
        password: 'Password123',
        fileId: 1,
        mobileNumber: '+1234567890',
        roleId: 1,
    },
});
exports.userLoginSchema = zod_openapi_1.z
    .object({
    email: zod_openapi_1.z.string().email('Valid email is required'),
    password: zod_openapi_1.z.string().min(1, 'Password is required'),
})
    .openapi({
    example: {
        email: 'john.doe@example.com',
        password: 'Password123',
    },
});
exports.updateUserProfileSchema = zod_openapi_1.z
    .object({
    name: zod_openapi_1.z.string().min(1).max(100).optional(),
    fileId: zod_openapi_1.z.number().int().positive().optional().nullable(),
    mobileNumber: zod_openapi_1.z.string().max(20).optional().nullable(),
    roleId: zod_openapi_1.z.number().optional().nullable(),
})
    .openapi({
    example: {
        name: 'John Smith',
        fileId: 2,
        mobileNumber: '+1987654321',
        roleId: 2,
    },
});
exports.updateUserPasswordSchema = zod_openapi_1.z
    .object({
    currentPassword: zod_openapi_1.z.string().min(1, 'Current password is required'),
    newPassword: zod_openapi_1.z
        .string()
        .min(6, 'New password must be at least 6 characters')
        .max(100),
})
    .openapi({
    example: {
        currentPassword: 'OldPassword123',
        newPassword: 'NewPassword456',
    },
});
exports.userResponseSchema = zod_openapi_1.z
    .object({
    id: zod_openapi_1.z.number(),
    name: zod_openapi_1.z.string(),
    email: zod_openapi_1.z.string().email(),
    emailVerified: zod_openapi_1.z.boolean(),
    fileId: zod_openapi_1.z.number().int().positive().nullable().optional(),
    profileImage: zod_openapi_1.z
        .object({
        id: zod_openapi_1.z.number().int().positive(),
        filename: zod_openapi_1.z.string(),
        originalName: zod_openapi_1.z.string(),
        mimeType: zod_openapi_1.z.string(),
        size: zod_openapi_1.z.number().int().positive(),
        filePath: zod_openapi_1.z.string(),
    })
        .optional()
        .nullable(),
    // original_password: z.string().nullable().optional(),
    mobileNumber: zod_openapi_1.z.string().nullable().optional(),
    roleId: zod_openapi_1.z.number().nullable().optional(),
    role: zod_openapi_1.z
        .object({
        id: zod_openapi_1.z.number(),
        name: zod_openapi_1.z.string(),
        description: zod_openapi_1.z.string().nullable().optional(),
    })
        .optional()
        .nullable(),
    createdAt: zod_openapi_1.z.string().datetime(),
    updatedAt: zod_openapi_1.z.string().datetime(),
    provider: zod_openapi_1.z.enum(['credentials', 'google', 'github']), // Expanded based on common providers
})
    .openapi({
    example: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        emailVerified: true,
        fileId: 1,
        profileImage: {
            id: 1,
            filename: 'profile-123.jpg',
            originalName: 'avatar.jpg',
            mimeType: 'image/jpeg',
            size: 102400,
            filePath: '/uploads/profiles/profile-123.jpg',
        },
        // generatedPassword: null,
        mobileNumber: '+1234567890',
        roleId: 1,
        role: {
            id: 1,
            name: 'Admin',
            description: 'Administrator role',
        },
        createdAt: '2024-01-15T10:30:00.000Z',
        updatedAt: '2024-01-20T14:45:00.000Z',
        provider: 'credentials',
    },
});
exports.verifyOtpSchema = zod_openapi_1.z
    .object({
    email: zod_openapi_1.z.string().email('Valid email is required'),
    otp: zod_openapi_1.z.string().min(1, 'OTP is required').max(6),
})
    .openapi({
    required: ['email', 'otp'],
    example: {
        email: 'john.doe@example.com',
        otp: '123456',
    },
});
exports.resendOtpSchema = zod_openapi_1.z
    .object({
    email: zod_openapi_1.z.string().email('Valid email is required'),
})
    .openapi({
    required: ['email'],
    example: {
        email: 'john.doe@example.com',
    },
});
// Admin specific schemas
exports.createUserByAdminSchema = zod_openapi_1.z
    .object({
    name: zod_openapi_1.z.string().min(1, 'Name is required').max(100),
    email: zod_openapi_1.z.string().email('Valid email is required'),
    fileId: zod_openapi_1.z.number().int().positive().optional().nullable(),
    mobileNumber: zod_openapi_1.z.string().max(20).optional().nullable(),
    roleId: zod_openapi_1.z.number().optional().nullable(),
})
    .openapi({
    required: ['name', 'email'],
    example: {
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        fileId: 3,
        mobileNumber: '+1234567891',
        roleId: 1,
    },
});
exports.updateUserByAdminSchema = zod_openapi_1.z
    .object({
    name: zod_openapi_1.z.string().min(1).max(100).optional(),
    email: zod_openapi_1.z.string().email().optional(),
    fileId: zod_openapi_1.z.number().int().positive().optional().nullable(),
    mobileNumber: zod_openapi_1.z.string().max(20).optional().nullable(),
    roleId: zod_openapi_1.z.number().optional().nullable(),
    emailVerified: zod_openapi_1.z.boolean().optional(),
})
    .openapi({
    example: {
        name: 'Jane Smith Updated',
        email: 'jane.updated@example.com',
        fileId: 4,
        mobileNumber: '+1234567892',
        roleId: 2,
        emailVerified: true,
    },
});
// Password reset schemas
exports.forgotPasswordSchema = zod_openapi_1.z
    .object({
    email: zod_openapi_1.z.string().email('Valid email is required'),
})
    .openapi({
    required: ['email'],
    example: {
        email: 'john.doe@example.com',
    },
});
exports.resetPasswordSchema = zod_openapi_1.z
    .object({
    token: zod_openapi_1.z.string().min(1, 'Reset token is required'),
    newPassword: zod_openapi_1.z
        .string()
        .min(6, 'New password must be at least 6 characters')
        .max(100),
})
    .openapi({
    required: ['token', 'newPassword'],
    example: {
        token: 'reset_token_abc123',
        newPassword: 'NewSecurePassword123',
    },
});
