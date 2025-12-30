import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { prisma } from 'erp-shared-models';

export const getPermissions = async (
  page: number = 1,
  limit: number = 10,
  moduleId?: number,
) => {
  const skip = (page - 1) * limit;

  const where = moduleId
    ? {
        modules: {
          some: {
            id: moduleId,
          },
        },
      }
    : {};

  const [permissions, total] = await Promise.all([
    prisma.permission.findMany({
      where,
      skip,
      take: limit,
      include: {
        modules: true,
        roles: {
          select: {
            id: true,
            name: true,
            description: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.permission.count({ where }),
  ]);

  return {
    permissions,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  };
};

export const getPermissionById = async (id: number) => {
  const permission = await prisma.permission.findUnique({
    where: { id },
    include: {
      modules: true,
      roles: {
        select: {
          id: true,
          name: true,
          description: true,
        },
      },
    },
  });

  if (!permission) {
    throw new HTTPException(404, {
      message: 'Permission not found',
    });
  }

  return permission;
};
