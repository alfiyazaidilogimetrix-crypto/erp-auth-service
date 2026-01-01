"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserDoc = exports.updateUserByIdDoc = exports.getUserByIdDoc = exports.getAllUsersDoc = exports.userResendOtpDoc = exports.userVerifyDoc = exports.removeProfileImageDoc = exports.updateUserPasswordDoc = exports.updateUserProfileDoc = exports.getUserProfileDoc = exports.userLoginDoc = exports.userRegisterDoc = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
var user_1 = require("@schema/user");
// Common Response Schemas
var ErrorResponseSchema = zod_openapi_1.z.object({
    status: zod_openapi_1.z.number(),
    message: zod_openapi_1.z.string(),
    error: zod_openapi_1.z.string().optional(),
});
var SuccessResponseSchema = zod_openapi_1.z.object({
    status: zod_openapi_1.z.number(),
    message: zod_openapi_1.z.string(),
});
// User Routes
exports.userRegisterDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'post',
    path: '/register',
    summary: 'Register a new user',
    description: 'Creates a new user account with the provided details. Email must be unique.',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: user_1.userRegisterSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Successful registration',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        400: {
            description: 'Bad request - validation error or email already exists',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        500: {
            description: 'Internal server error',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.userLoginDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'post',
    path: '/login',
    summary: 'Login to user account',
    description: 'Authenticate user with email and password. Returns access token and refresh token.',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: user_1.userLoginSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Successful login',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        401: {
            description: 'Unauthorized - invalid credentials',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        403: {
            description: 'Forbidden - email not verified',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'User not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.getUserProfileDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'get',
    path: '/profile',
    summary: 'Get user profile',
    description: "Retrieve authenticated user's profile information with file details",
    responses: {
        200: {
            description: 'Successfully retrieved user profile',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        401: {
            description: 'Unauthorized - invalid or missing token',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'User not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.updateUserProfileDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'patch',
    path: '/profile',
    summary: 'Update user profile',
    description: "Update authenticated user's profile information including profile image",
    request: {
        body: {
            content: {
                'application/json': {
                    schema: user_1.updateUserProfileSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Successfully updated user profile',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        400: {
            description: 'Bad request - validation error or file not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        401: {
            description: 'Unauthorized - invalid or missing token',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.updateUserPasswordDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'patch',
    path: '/profile/password',
    summary: 'Update user password',
    description: "Update authenticated user's password",
    request: {
        body: {
            content: {
                'application/json': {
                    schema: user_1.updateUserPasswordSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Password updated successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        400: {
            description: 'Bad request - current password is incorrect',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        401: {
            description: 'Unauthorized - invalid or missing token',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.removeProfileImageDoc = (0, zod_openapi_1.createRoute)({
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
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        401: {
            description: 'Unauthorized - invalid or missing token',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
// OTP Routes
exports.userVerifyDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'post',
    path: '/verify',
    summary: 'Verify user account',
    description: 'Verify user account using OTP sent to registered email',
    request: {
        body: {
            content: {
                'application/json': {
                    schema: user_1.verifyOtpSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Successfully account verified',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        400: {
            description: 'Invalid OTP or OTP expired',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'User not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.userResendOtpDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'post',
    path: '/resend-otp',
    summary: 'Resend OTP',
    description: "Resend OTP to user's email for verification",
    request: {
        body: {
            content: {
                'application/json': {
                    schema: user_1.resendOtpSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Successfully OTP Resent',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        400: {
            description: 'Invalid email or user already verified',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'User not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
// Admin user management endpoints
exports.getAllUsersDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'get',
    path: '/',
    summary: 'Get all users (Admin)',
    description: 'Retrieve all users with pagination (Admin only)',
    request: {
        query: zod_openapi_1.z.object({
            page: zod_openapi_1.z.string().transform(Number).optional().default('1'),
            limit: zod_openapi_1.z.string().transform(Number).optional().default('10'),
            roleId: zod_openapi_1.z.string().cuid().optional(),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved users',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        403: {
            description: 'Forbidden - admin access required',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.getUserByIdDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'get',
    path: '/users/{id}',
    summary: 'Get user by ID (Admin)',
    description: 'Retrieve a specific user by ID (Admin only)',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
    },
    responses: {
        200: {
            description: 'Successfully retrieved user',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'User not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        403: {
            description: 'Forbidden - admin access required',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.updateUserByIdDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'patch',
    path: '/users/{id}',
    summary: 'Update user by ID (Admin)',
    description: 'Update user information by ID (Admin only)',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string(),
        }),
        body: {
            content: {
                'application/json': {
                    schema: user_1.updateUserProfileSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: 'Successfully updated user',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        400: {
            description: 'Bad request - validation error',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'User not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        403: {
            description: 'Forbidden - admin access required',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
exports.deleteUserDoc = (0, zod_openapi_1.createRoute)({
    tags: ['User'],
    method: 'delete',
    path: '/users/{id}',
    summary: 'Delete user (Admin)',
    description: 'Delete a user account (Admin only)',
    request: {
        params: zod_openapi_1.z.object({
            id: zod_openapi_1.z.string().cuid('Valid user ID is required'),
        }),
    },
    responses: {
        200: {
            description: 'User deleted successfully',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        404: {
            description: 'User not found',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        403: {
            description: 'Forbidden - admin access required',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
        400: {
            description: 'Bad request - cannot delete your own account',
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({}),
                },
            },
        },
    },
});
