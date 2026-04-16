import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { hashedPassword, validatePassword } from '@lib/tools';
import { IUpdateUserProfile, IUpdateUserPassword } from '@schema/user';
import { prisma } from 'erp-shared-models';

export const updateUserProfile = async (
  userId: number,
  body: IUpdateUserProfile,
) => {
  const { office, ...userData } = body;
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new HTTPException(404, {
      message: 'User not found',
    });
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: userData,
    include: {
      profileImage: true,
      role: true,
    },
  });

  if (office) {
    // Delete existing assignments (cascades to userBranchOffice)
    await prisma.userHeadOffice.deleteMany({
      where: { userId },
    });

    // Create new assignments
    for (const off of office) {
      const userHO = await prisma.userHeadOffice.create({
        data: {
          userId,
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

  const { password, ...userWithoutPassword } = updatedUser;
  return userWithoutPassword;
};


export const updateUserPassword = async (
  userId: number,
  body: IUpdateUserPassword,
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new HTTPException(404, {
      message: 'User not found',
    });
  }

  const passwordVerify = await validatePassword(
    body.currentPassword,
    user.password,
  );
  if (!passwordVerify) {
    throw new HTTPException(400, {
      message: 'Current password is incorrect',
    });
  }

  const hashedPass = await hashedPassword(body.newPassword);

  await prisma.user.update({
    where: { id: userId },
    data: {
      password: hashedPass,
    },
  });

  return { message: 'Password updated successfully' };
};

export const updateUserById = async (
  userId: number,
  body: IUpdateUserProfile,
) => {
  const { office, ...userData } = body;
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new HTTPException(404, {
      message: 'User not found',
    });
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: userData,
    include: {
      profileImage: true,
      role: true,
    },
  });

  if (office) {
    // Delete existing assignments (cascades to userBranchOffice)
    await prisma.userHeadOffice.deleteMany({
      where: { userId },
    });

    // Create new assignments
    for (const off of office) {
      const userHO = await prisma.userHeadOffice.create({
        data: {
          userId,
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

  const { password, ...userWithoutPassword } = updatedUser;
  return userWithoutPassword;
};


export const uploadProfileImage = async (userId: number, fileId: number) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new HTTPException(404, {
      message: 'User not found',
    });
  }

  const file = await prisma.file.findUnique({
    where: { id: fileId },
  });

  if (!file) {
    throw new HTTPException(404, {
      message: 'File not found',
    });
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: { fileId },
    include: {
      profileImage: true,
      role: true,
    },
  });

  const { password, ...userWithoutPassword } = updatedUser;
  return { user: userWithoutPassword, file };
};
