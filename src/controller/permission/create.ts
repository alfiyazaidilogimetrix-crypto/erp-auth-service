import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { ICreatePermission, IUpdatePermission } from '@schema/role';
import { prisma } from 'erp-shared-models';

export const createPermission = async (body: ICreatePermission) => {
  // Check if modules exist
  if (body.moduleIds && body.moduleIds.length > 0) {
    const modules = await prisma.module.findMany({
      where: { id: { in: body.moduleIds } },
    });

    if (modules.length !== body.moduleIds.length) {
      throw new HTTPException(404, {
        message: 'One or more modules not found',
      });
    }
  }

  const permission = await prisma.permission.create({
    data: {
      action: body.action,
      modules: {
        connect: body.moduleIds?.map((id) => ({ id })) || [],
      },
    },
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

  return permission;
};
