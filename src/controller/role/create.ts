import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { ICreateRole, IUpdateRole, IAssignRoleToUser } from '@schema/role';
import { prisma } from 'erp-shared-models';

export const createRole = async (body: ICreateRole) => {
  const existingRole = await prisma.role.findUnique({
    where: { name: body.name },
  });

  if (existingRole) {
    throw new HTTPException(409, {
      message: 'Role with this name already exists',
    });
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

  const role = await prisma.role.create({
    data: {
      name: body.name,
      description: body.description,
      permissions: {
        connect: body.permissionIds?.map((id) => ({ id })) || [],
      },
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

  return role;
};

export const assignRoleToUser = async (body: IAssignRoleToUser) => {
  // Check if user exists
  const user = await prisma.user.findUnique({
    where: {
      id: body.userId,
    },
  });

  if (!user) {
    throw new HTTPException(404, {
      message: 'User not found',
    });
  }

  // Check if role exists
  const role = await prisma.role.findUnique({
    where: {
      id: body.roleId,
    },
  });

  if (!role) {
    throw new HTTPException(404, {
      message: 'Role not found',
    });
  }

  // Assign role to user
  const updatedUser = await prisma.user.update({
    where: {
      id: body.userId,
    },
    data: {
      roleId: body.roleId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      roleId: true,
    },
  });

  return updatedUser;
};
