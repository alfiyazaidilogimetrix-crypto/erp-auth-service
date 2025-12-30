import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { getExpiryTime, validatePassword } from '@lib/tools';
import { IUserLogin } from '@schema/user';
import { userGenerateToken } from '@jwt/user';
import { env } from '@lib/env';
import { prisma } from 'erp-shared-models';

export const login = async (body: IUserLogin) => {
  const user = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
    include: {
      profileImage: true,
      role: true,
    },
  });

  if (!user) {
    throw new HTTPException(404, {
      message: 'User with this email does not exist',
    });
  }

  const passwordVerify = await validatePassword(body.password, user.password);
  if (!passwordVerify) {
    throw new HTTPException(401, {
      message: 'Incorrect password',
    });
  }

  if (!user.emailVerified) {
    throw new HTTPException(403, {
      message: 'Account not verified. Please verify your email.',
    });
  }

  // Remove password from user object
  const { password, ...userWithoutPassword } = user;

  return {
    token: await userGenerateToken({
      id: user.id,
      name: user.name,
      email: user.email,
    }),
    refreshToken: await userGenerateToken({
      id: user.id,
      name: user.name,
      email: user.email,
    }),
    expireTime: getExpiryTime(env.USER_JWT_EXPIRE),
    user: userWithoutPassword,
  };
};
