import { OpenAPIHono } from '@hono/zod-openapi';
import { HTTPException } from 'hono/http-exception';
import { IResendOtp, IVerifyOtp } from '@schema/otp';
import { prisma } from 'erp-shared-models';
import {
  userLoginDoc,
  userRegisterDoc,
  userResendOtpDoc,
  userVerifyDoc,
  getUserProfileDoc,
  updateUserProfileDoc,
  updateUserPasswordDoc,
  removeProfileImageDoc,
  getAllUsersDoc,
  getUserByIdDoc,
  updateUserByIdDoc,
  deleteUserDoc,
} from '@swagger/user';
import {
  IUserLogin,
  IUserRegister,
  IUpdateUserProfile,
  IUpdateUserPassword,
} from '@schema/user';
import { register } from '@controller/user/register';
import { login } from '@controller/user/login';
import { resendOTPToken, verifyOTPToken } from '@controller/user/otp';
import {
  updateUserProfile,
  updateUserPassword,
  updateUserById,
  uploadProfileImage,
} from '@controller/user/update';
import {
  getUserProfile,
  getAllUsers,
  getUserById,
} from '@controller/user/getUser';
import { deleteUser, removeProfileImage } from '@controller/user/delete';
import { userGuard } from '@jwt/user';
import { IUserPayload } from '@schema/jwt';

const user = new OpenAPIHono();
user.use(getUserProfileDoc.path, userGuard);
user.use(updateUserProfileDoc.path, userGuard);
user.use(updateUserPasswordDoc.path, userGuard);
user.use(removeProfileImageDoc.path, userGuard);
// user.use(getAllUsersDoc.path, userGuard);
// user.use(getUserByIdDoc.path, userGuard);
user.use(updateUserByIdDoc.path, userGuard);
user.use(deleteUserDoc.path, userGuard);

// Auth routes
user.openapi(userRegisterDoc, async (c) => {
  const body: IUserRegister = await c.req.json();
  const data = await register(body);
  return c.json({
    status: 201,
    message:
      'User registered successfully. Please check your email for verification.',
    // token: data.token,
    user: data.user,
  });
});

user.openapi(userLoginDoc, async (c) => {
  const body: IUserLogin = await c.req.json();
  const data = await login(body);
  return c.json({
    status: 200,
    message: 'You are logged in successfully',
    ...data,
  });
});

user.openapi(userVerifyDoc, async (c) => {
  const body: IVerifyOtp = await c.req.json();
  const verify = await verifyOTPToken(body);
  const userData = await prisma.user.update({
    where: {
      email: verify.email,
    },
    data: {
      emailVerified: true,
    },
    include: {
      profileImage: true,
      role: true,
    },
  });

  if (!userData) {
    throw new HTTPException(404, {
      message: 'User with this email does not exist',
    });
  }

  const { password, ...userWithoutPassword } = userData;

  return c.json({
    status: 200,
    message: 'Your account has been verified. You can log in now.',
    user: userWithoutPassword,
  });
});

user.openapi(userResendOtpDoc, async (c) => {
  const body: IResendOtp = await c.req.json();
  const data = await resendOTPToken(body);
  return c.json({
    status: 200,
    message: 'OTP resent successfully',
    token: data.token,
    // email: data.email, // Make sure this matches the schema
  });
});

// Protected user routes (require authentication)
user.openapi(getUserProfileDoc, async (c) => {
  const user: IUserPayload = c.get('jwtPayload');
  const userData = await getUserProfile(user.id);
  return c.json({
    status: 200,
    user: userData,
  });
});

user.openapi(updateUserProfileDoc, async (c) => {
  const user: IUserPayload = c.get('jwtPayload');
  const body: IUpdateUserProfile = await c.req.json();
  const userData = await updateUserProfile(user.id, body);
  return c.json({
    status: 200,
    message: 'Profile updated successfully',
    user: userData,
  });
});

user.openapi(updateUserPasswordDoc, async (c) => {
  const user: IUserPayload = c.get('jwtPayload');
  const body: IUpdateUserPassword = await c.req.json();
  await updateUserPassword(user.id, body);
  return c.json({
    status: 200,
    message: 'Password updated successfully',
  });
});

user.openapi(removeProfileImageDoc, async (c) => {
  const user: IUserPayload = c.get('jwtPayload');
  const userData = await removeProfileImage(user.id);
  return c.json({
    status: 200,
    message: 'Profile image removed successfully',
    user: userData,
  });
});

// Admin routes
user.openapi(getAllUsersDoc, async (c) => {
  const { page = 1, limit = 10, roleId } = c.req.query();
  const result = await getAllUsers(
    Number(page),
    Number(limit),
    parseInt(roleId),
  );
  return c.json({
    status: 200,
    ...result,
  });
});

user.openapi(getUserByIdDoc, async (c) => {
  const { id } = c.req.param();
  const userData = await getUserById(parseInt(id));
  return c.json({
    status: 200,
    user: userData,
  });
});

user.openapi(updateUserByIdDoc, async (c) => {
  const { id } = c.req.param();
  const body: IUpdateUserProfile = await c.req.json();
  const userData = await updateUserById(parseInt(id), body);

  const userWithProvider = {
    ...userData,
    provider: 'credentials' as const,
  };

  return c.json({
    status: 200,
    message: 'User updated successfully',
    user: userWithProvider,
  });
});

user.openapi(deleteUserDoc, async (c) => {
  const { id } = c.req.param();
  const user: IUserPayload = c.get('jwtPayload');
  await deleteUser(parseInt(id), user.id);
  return c.json({
    status: 200,
    message: 'User deleted successfully',
  });
});

export default user;
