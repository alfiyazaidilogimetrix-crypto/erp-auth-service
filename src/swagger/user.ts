import { createRoute, z } from '@hono/zod-openapi';
import {
  resendOtpSchema,
  updateUserPasswordSchema,
  updateUserProfileSchema,
  userLoginSchema,
  userRegisterSchema,
  verifyOtpSchema,
  userResponseSchema,
} from '@schema/user';
import { fileResponseSchema } from '@schema/file';

// Common Response Schemas
const ErrorResponseSchema = z.object({
  status: z.number(),
  message: z.string(),
  error: z.string().optional(),
});

const SuccessResponseSchema = z.object({
  status: z.number(),
  message: z.string(),
});

// User Routes
export const userRegisterDoc = createRoute({
  tags: ['User'],
  method: 'post',
  path: '/register',
  summary: 'Register a new user',
  description:
    'Creates a new user account with the provided details. Email must be unique.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: userRegisterSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful registration',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    400: {
      description: 'Bad request - validation error or email already exists',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    500: {
      description: 'Internal server error',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const userLoginDoc = createRoute({
  tags: ['User'],
  method: 'post',
  path: '/login',
  summary: 'Login to user account',
  description:
    'Authenticate user with email and password. Returns access token and refresh token.',
  request: {
    body: {
      content: {
        'application/json': {
          schema: userLoginSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful login',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    401: {
      description: 'Unauthorized - invalid credentials',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    403: {
      description: 'Forbidden - email not verified',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const getUserProfileDoc = createRoute({
  tags: ['User'],
  method: 'get',
  path: '/profile',
  summary: 'Get user profile',
  description:
    "Retrieve authenticated user's profile information with file details",
  responses: {
    200: {
      description: 'Successfully retrieved user profile',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    401: {
      description: 'Unauthorized - invalid or missing token',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const updateUserProfileDoc = createRoute({
  tags: ['User'],
  method: 'patch',
  path: '/profile',
  summary: 'Update user profile',
  description:
    "Update authenticated user's profile information including profile image",
  request: {
    body: {
      content: {
        'application/json': {
          schema: updateUserProfileSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully updated user profile',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    400: {
      description: 'Bad request - validation error or file not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    401: {
      description: 'Unauthorized - invalid or missing token',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const updateUserPasswordDoc = createRoute({
  tags: ['User'],
  method: 'patch',
  path: '/profile/password',
  summary: 'Update user password',
  description: "Update authenticated user's password",
  request: {
    body: {
      content: {
        'application/json': {
          schema: updateUserPasswordSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Password updated successfully',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    400: {
      description: 'Bad request - current password is incorrect',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    401: {
      description: 'Unauthorized - invalid or missing token',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const removeProfileImageDoc = createRoute({
  tags: ['User'],
  method: 'delete',
  path: '/profile/image',
  summary: 'Remove profile image',
  description: 'Remove profile image from user account',
  responses: {
    200: {
      description: 'Profile image removed successfully',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    401: {
      description: 'Unauthorized - invalid or missing token',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

// OTP Routes
export const userVerifyDoc = createRoute({
  tags: ['User'],
  method: 'post',
  path: '/verify',
  summary: 'Verify user account',
  description: 'Verify user account using OTP sent to registered email',
  request: {
    body: {
      content: {
        'application/json': {
          schema: verifyOtpSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully account verified',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    400: {
      description: 'Invalid OTP or OTP expired',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const userResendOtpDoc = createRoute({
  tags: ['User'],
  method: 'post',
  path: '/resend-otp',
  summary: 'Resend OTP',
  description: "Resend OTP to user's email for verification",
  request: {
    body: {
      content: {
        'application/json': {
          schema: resendOtpSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully OTP Resent',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    400: {
      description: 'Invalid email or user already verified',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});
// Admin user management endpoints
export const getAllUsersDoc = createRoute({
  tags: ['User'],
  method: 'get',
  path: '/',
  summary: 'Get all users (Admin)',
  description: 'Retrieve all users with pagination (Admin only)',
  request: {
    query: z.object({
      page: z.string().transform(Number).optional().default('1'),
      limit: z.string().transform(Number).optional().default('10'),
      roleId: z.string().cuid().optional(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved users',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    403: {
      description: 'Forbidden - admin access required',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const getUserByIdDoc = createRoute({
  tags: ['User'],
  method: 'get',
  path: '/users/{id}',
  summary: 'Get user by ID (Admin)',
  description: 'Retrieve a specific user by ID (Admin only)',
  request: {
    params: z.object({
      id: z.string(),
    }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved user',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    403: {
      description: 'Forbidden - admin access required',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const updateUserByIdDoc = createRoute({
  tags: ['User'],
  method: 'patch',
  path: '/users/{id}',
  summary: 'Update user by ID (Admin)',
  description: 'Update user information by ID (Admin only)',
  request: {
    params: z.object({
      id: z.string(),
    }),
    body: {
      content: {
        'application/json': {
          schema: updateUserProfileSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successfully updated user',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    400: {
      description: 'Bad request - validation error',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    403: {
      description: 'Forbidden - admin access required',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});

export const deleteUserDoc = createRoute({
  tags: ['User'],
  method: 'delete',
  path: '/users/{id}',
  summary: 'Delete user (Admin)',
  description: 'Delete a user account (Admin only)',
  request: {
    params: z.object({
      id: z.string().cuid('Valid user ID is required'),
    }),
  },
  responses: {
    200: {
      description: 'User deleted successfully',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    404: {
      description: 'User not found',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    403: {
      description: 'Forbidden - admin access required',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
    400: {
      description: 'Bad request - cannot delete your own account',
      content: {
        'application/json': {
          schema: z.object({}),
        },
      },
    },
  },
});
