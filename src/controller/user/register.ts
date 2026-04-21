// import prisma from '@config/prisma';
import { generatePassword, hashedPassword } from '@lib/tools';
import { HTTPException } from 'hono/http-exception';
import { generateOTPToken } from './otp';
import { IUserRegister } from '@schema/user';
import { prisma } from 'erp-shared-models';

export const register = async (body: IUserRegister) => {
  const { ...userData } = body;
  const user = await prisma.user.findUnique({
    where: {
      email: userData.email,
    },
  });

  if (user !== null) {
    throw new HTTPException(409, {
      message: 'User with this account already registered',
    });
  }

  // Generate auto password (12 characters by default)
  // const generatedPassword = generatePassword(12);
  const hashedPass = await hashedPassword(userData.password);
  const data = await prisma.user.create({
    data: {
      ...userData,
      emailVerified: true,
      password: hashedPass,
      original_password: userData.password, // Save the auto-generated password as plain text
    },
    include: {
      profileImage: true,
      role: true,
    },
  });


  // const verify = await generateOTPToken({
  //   email: data.email,
  // });

  return {
    // ...verify,
    user: data,
  };
};

