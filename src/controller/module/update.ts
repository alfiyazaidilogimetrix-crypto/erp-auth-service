import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { IUpdateModule } from '@schema/role';
import { prisma } from 'erp-shared-models';

export const updateModule = async (id: number, body: IUpdateModule) => {
  const module = await prisma.module.findUnique({
    where: { id },
  });

  if (!module) {
    throw new HTTPException(404, {
      message: 'Module not found',
    });
  }

  if (body.Name && body.Name !== module.Name) {
    const existingModule = await prisma.module.findFirst({
      where: { Name: body.Name },
    });

    if (existingModule) {
      throw new HTTPException(409, {
        message: 'Module with this name already exists',
      });
    }
  }

  const updatedModule = await prisma.module.update({
    where: { id },
    data: body,
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

  return updatedModule;
};
