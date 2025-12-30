import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { IUpdatePermission } from '@schema/role';
import { prisma } from 'erp-shared-models';

export const updatePermission = async (id: number, body: IUpdatePermission) => {
  const permission = await prisma.permission.findUnique({
    where: { id },
  });

  if (!permission) {
    throw new HTTPException(404, {
      message: 'Permission not found',
    });
  }

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

  const updatedPermission = await prisma.permission.update({
    where: { id },
    data: {
      action: body.action,
      modules: body.moduleIds
        ? {
            set: body.moduleIds.map((id) => ({ id })),
          }
        : undefined,
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

  return updatedPermission;
};
