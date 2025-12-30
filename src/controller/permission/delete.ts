import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { prisma } from 'erp-shared-models';

export const deletePermission = async (id: number) => {
  const permission = await prisma.permission.findUnique({
    where: { id },
    include: {
      roles: true,
    },
  });

  if (!permission) {
    throw new HTTPException(404, {
      message: 'Permission not found',
    });
  }

  if (permission.roles.length > 0) {
    throw new HTTPException(400, {
      message: 'Cannot delete permission that is assigned to roles',
    });
  }

  await prisma.permission.delete({
    where: { id },
  });

  return { message: 'Permission deleted successfully' };
};
