import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { ICreateModule, IUpdateModule } from '@schema/role';
import { prisma } from 'erp-shared-models';

export const createModule = async (body: ICreateModule) => {
  const existingModule = await prisma.module.findFirst({
    where: { Name: body.Name },
  });

  if (existingModule) {
    throw new HTTPException(409, {
      message: 'Module with this name already exists',
    });
  }

  const module = await prisma.module.create({
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

  return module;
};
