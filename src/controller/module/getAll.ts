import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { prisma } from 'erp-shared-models';

export const getModules = async (page: number = 1, limit: number = 10) => {
  const skip = (page - 1) * limit;

  const [modules, total] = await Promise.all([
    prisma.module.findMany({
      skip,
      take: limit,
      include: {
        permissions: {
          include: {
            roles: {
              select: {
                id: true,
                name: true,
                description: true,
              },
            },
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.module.count(),
  ]);

  return {
    modules,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit),
    },
  };
};

export const getModuleById = async (id: number) => {
  const module = await prisma.module.findUnique({
    where: { id },
    include: {
      permissions: {
        include: {
          roles: {
            select: {
              id: true,
              name: true,
              description: true,
            },
          },
        },
      },
    },
  });

  if (!module) {
    throw new HTTPException(404, {
      message: 'Module not found',
    });
  }

  return module;
};
