import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { prisma } from 'erp-shared-models';

export const deleteUser = async (userId: number, currentUserId: number) => {
  if (userId === currentUserId) {
    throw new HTTPException(400, {
      message: 'Cannot delete your own account',
    });
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new HTTPException(404, {
      message: 'User not found',
    });
  }

  await prisma.user.delete({
    where: { id: userId },
  });

  return { message: 'User deleted successfully' };
};

export const removeProfileImage = async (userId: number) => {
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
    data: { fileId: null },
    include: {
      profileImage: true,
      role: true,
    },
  });

  const { password, ...userWithoutPassword } = updatedUser;
  return userWithoutPassword;
};
