import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { IUpdateRole } from '@schema/role';
import { prisma } from 'erp-shared-models';

export const updateRole = async (id: number, body: IUpdateRole) => {
  const role = await prisma.role.findUnique({
    where: { id },
  });

  if (!role) {
    throw new HTTPException(404, {
      message: 'Role not found',
    });
  }

  if (body.name && body.name !== role.name) {
    const existingRole = await prisma.role.findUnique({
      where: { name: body.name },
    });

    if (existingRole) {
      throw new HTTPException(409, {
        message: 'Role with this name already exists',
      });
    }
  }

  // Check if permissions exist
  if (body.permissionIds && body.permissionIds.length > 0) {
    const permissions = await prisma.permission.findMany({
      where: { id: { in: body.permissionIds } },
    });

    if (permissions.length !== body.permissionIds.length) {
      throw new HTTPException(404, {
        message: 'One or more permissions not found',
      });
    }
  }

  const updatedRole = await prisma.role.update({
    where: { id },
    data: {
      name: body.name,
      description: body.description,
      permissions: body.permissionIds
        ? {
            set: body.permissionIds.map((id) => ({ id })),
          }
        : undefined,
    },
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

  return updatedRole;
};
