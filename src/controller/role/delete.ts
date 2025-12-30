import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { prisma } from 'erp-shared-models';

export const deleteRole = async (id: number) => {
  const role = await prisma.role.findUnique({
    where: { id },
    include: {
      users: true,
    },
  });

  if (!role) {
    throw new HTTPException(404, {
      message: 'Role not found',
    });
  }

  if (role.users.length > 0) {
    throw new HTTPException(400, {
      message: 'Cannot delete role that is assigned to users',
    });
  }

  await prisma.role.delete({
    where: { id },
  });

  return { message: 'Role deleted successfully' };
};
