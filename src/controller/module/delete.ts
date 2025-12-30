import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { prisma } from 'erp-shared-models';

export const deleteModule = async (id: number) => {
  const module = await prisma.module.findUnique({
    where: { id },
    include: {
      permissions: true,
    },
  });

  if (!module) {
    throw new HTTPException(404, {
      message: 'Module not found',
    });
  }

  if (module.permissions.length > 0) {
    throw new HTTPException(400, {
      message: 'Cannot delete module that has permissions assigned',
    });
  }

  await prisma.module.delete({
    where: { id },
  });

  return { message: 'Module deleted successfully' };
};
