import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { prisma } from 'erp-shared-models';

export const getRoles = async (page: number = 1, limit: number = 10) => {
  const skip = (page - 1) * limit;

  const [roles, total] = await Promise.all([
    prisma.role.findMany({
      skip,
      take: limit,
      include: {
        permissions: {
          include: {
            modules: true,
          },
        },
        users: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.role.count(),
  ]);

  return {
    roles,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  };
};

export const getRoleById = async (id: number) => {
  const role = await prisma.role.findUnique({
    where: { id },
    include: {
      permissions: {
        include: {
          modules: true,
        },
      },
      users: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
    },
  });

  if (!role) {
    throw new HTTPException(404, {
      message: 'Role not found',
    });
  }

  return role;
};
