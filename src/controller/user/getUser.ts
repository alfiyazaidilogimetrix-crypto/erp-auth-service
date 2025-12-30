import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { hashedPassword, validatePassword } from '@lib/tools';
import { IUpdateUserProfile, IUpdateUserPassword } from '@schema/user';
import prisma from 'erp-shared-models';

export const getUserProfile = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      profileImage: true,
      role: {
        include: {
          permissions: {
            include: {
              modules: true,
            },
          },
        },
      },
    },
  });

  if (!user) {
    throw new HTTPException(404, {
      message: 'User not found',
    });
  }

  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};

export const getAllUsers = async (
  page: number = 1,
  limit: number = 10,
  roleId?: number,
) => {
  const skip = (page - 1) * limit;

  const where = roleId ? { roleId } : {};

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,
      skip,
      take: limit,
      include: {
        profileImage: true,
        role: true,
      },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.user.count({ where }),
  ]);

  const usersWithoutPasswords = users.map(({ password, ...user }) => user);

  return {
    users: usersWithoutPasswords,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  };
};

export const getUserById = async (userId: number) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      profileImage: true,
      role: true,
    },
  });

  if (!user) {
    throw new HTTPException(404, {
      message: 'User not found',
    });
  }

  const { password, ...userWithoutPassword } = user;
  return userWithoutPassword;
};
