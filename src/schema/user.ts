import { z } from '@hono/zod-openapi';

export const userRegisterSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(100),
    email: z.string().email('Valid email is required'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(100),
    fileId: z.number().int().positive().optional().nullable(),
    mobileNumber: z.string().max(20).optional().nullable(),
    roleId: z.number().optional().nullable(),
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

export const userLoginSchema = z
  .object({
    email: z.string().email('Valid email is required'),
    password: z.string().min(1, 'Password is required'),
  })
  .openapi({
    example: {
      email: 'john.doe@example.com',
      password: 'Password123',
    },
  });

export const updateUserProfileSchema = z
  .object({
    name: z.string().min(1).max(100).optional(),
    fileId: z.number().int().positive().optional().nullable(),
    mobileNumber: z.string().max(20).optional().nullable(),
    roleId: z.number().optional().nullable(),
  })
  .openapi({
    example: {
      name: 'John Smith',
      fileId: 2,
      mobileNumber: '+1987654321',
      roleId: 2,
    },
  });

export const updateUserPasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'),
    newPassword: z
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

export const userResponseSchema = z
  .object({
    id: z.number(),
    name: z.string(),
    email: z.string().email(),
    emailVerified: z.boolean(),
    fileId: z.number().int().positive().nullable().optional(),
    profileImage: z
      .object({
        id: z.number().int().positive(),
        filename: z.string(),
        originalName: z.string(),
        mimeType: z.string(),
        size: z.number().int().positive(),
        filePath: z.string(),
      })
      .optional()
      .nullable(),
    // original_password: z.string().nullable().optional(),
    mobileNumber: z.string().nullable().optional(),
    roleId: z.number().nullable().optional(),
    role: z
      .object({
        id: z.number(),
        name: z.string(),
        description: z.string().nullable().optional(),
      })
      .optional()
      .nullable(),
    createdAt: z.string().datetime(),
    updatedAt: z.string().datetime(),
    provider: z.enum(['credentials', 'google', 'github']), // Expanded based on common providers
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

export const verifyOtpSchema = z
  .object({
    email: z.string().email('Valid email is required'),
    otp: z.string().min(1, 'OTP is required').max(6),
  })
  .openapi({
    required: ['email', 'otp'],
    example: {
      email: 'john.doe@example.com',
      otp: '123456',
    },
  });

export const resendOtpSchema = z
  .object({
    email: z.string().email('Valid email is required'),
  })
  .openapi({
    required: ['email'],
    example: {
      email: 'john.doe@example.com',
    },
  });

// Admin specific schemas
export const createUserByAdminSchema = z
  .object({
    name: z.string().min(1, 'Name is required').max(100),
    email: z.string().email('Valid email is required'),
    fileId: z.number().int().positive().optional().nullable(),
    mobileNumber: z.string().max(20).optional().nullable(),
    roleId: z.number().optional().nullable(),
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

export const updateUserByAdminSchema = z
  .object({
    name: z.string().min(1).max(100).optional(),
    email: z.string().email().optional(),
    fileId: z.number().int().positive().optional().nullable(),
    mobileNumber: z.string().max(20).optional().nullable(),
    roleId: z.number().optional().nullable(),
    emailVerified: z.boolean().optional(),
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
export const forgotPasswordSchema = z
  .object({
    email: z.string().email('Valid email is required'),
  })
  .openapi({
    required: ['email'],
    example: {
      email: 'john.doe@example.com',
    },
  });

export const resetPasswordSchema = z
  .object({
    token: z.string().min(1, 'Reset token is required'),
    newPassword: z
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
