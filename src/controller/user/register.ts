// import prisma from '@config/prisma';
import { generatePassword, hashedPassword } from '@lib/tools';
import { HTTPException } from 'hono/http-exception';
import { generateOTPToken } from './otp';
import { IUserRegister } from '@schema/user';
import { prisma } from 'erp-shared-models';

export const register = async (body: IUserRegister) => {
  const { office, ...userData } = body;
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

  if (office && office.length > 0) {
    for (const off of office) {
      const userHO = await prisma.userHeadOffice.create({
        data: {
          userId: data.id,
          headOfficeId: off.head_office,
        },
      });

      if (off.branch_offices && off.branch_offices.length > 0) {
        await prisma.userBranchOffice.createMany({
          data: off.branch_offices.map((boId) => ({
            userHeadOfficeId: userHO.id,
            branchOfficeId: boId,
          })),
        });
      }
    }
  }

  // const verify = await generateOTPToken({
  //   email: data.email,
  // });

  return {
    // ...verify,
    user: data,
  };
};

