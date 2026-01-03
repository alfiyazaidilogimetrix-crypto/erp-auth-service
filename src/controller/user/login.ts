import { HTTPException } from 'hono/http-exception';
// import prisma from '@config/prisma';
import { getExpiryTime, validatePassword } from '@lib/tools';
import { IUserLogin } from '@schema/user';
import { userGenerateToken } from '@jwt/user';
import { env } from '@lib/env';
import { prisma } from 'erp-shared-models';
// Define proper types for your relationships
// Define interfaces based on your schema
interface IModule {
  id: number;
  Name: string;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface IPermission {
  id: number;
  action: string[];
  modules: IModule[];
  createdAt: Date;
  updatedAt: Date;
}

interface IRole {
  id: number;
  name: string;
  description: string | null;
  permissions: IPermission[];
  createdAt: Date;
  updatedAt: Date;
}

interface IUserWithRelations {
  id: number;
  name: string;
  email: string;
  emailVerified: boolean;
  password: string;
  fileId: number | null;
  original_password: string | null;
  mobileNumber: string | null;
  roleId: number | null;
  createdAt: Date;
  updatedAt: Date;
  provider: string;
  profileImage: any | null;
  role: IRole | null;
}

export const login = async (body: IUserLogin) => {
  // Then cast your user result
  const user = (await prisma.user.findUnique({
    where: { email: body.email },
    include: {
      profileImage: true,
      role: {
        include: {
          permissions: {
            include: {
              modules: true,
            },
          },
        },
      },
    },
  })) as IUserWithRelations;

  if (!user) {
    throw new HTTPException(404, {
      message: 'User with this email does not exist',
    });
  }

  const passwordVerify = await validatePassword(body.password, user.password);
  if (!passwordVerify) {
    throw new HTTPException(401, {
      message: 'Incorrect password',
    });
  }

  if (!user.emailVerified) {
    throw new HTTPException(403, {
      message: 'Account not verified. Please verify your email.',
    });
  }

  // Handle user role transformation safely
  let transformedUser;

  if (user.role && user.role.permissions) {
    const transformedRole = {
      ...user.role,
      permissions: transformPermissionsByModule(user.role.permissions),
    };

    const { password: _, ...userWithoutPassword } = user;
    transformedUser = {
      ...userWithoutPassword,
      role: transformedRole,
    };
  } else {
    // If no role or permissions, keep user as-is but remove password
    const { password: _, ...userWithoutPassword } = user;
    transformedUser = userWithoutPassword;
  }

  return {
    token: await userGenerateToken({
      id: user.id,
      name: user.name,
      email: user.email,
    }),
    refreshToken: await userGenerateToken({
      id: user.id,
      name: user.name,
      email: user.email,
    }),
    expireTime: getExpiryTime(env.USER_JWT_EXPIRE),
    user: transformedUser,
  };
};

// Type-safe helper function
interface TransformedPermission {
  module: string;
  action: string[];
}

function transformPermissionsByModule(
  permissions: any[],
): TransformedPermission[] {
  if (!permissions || !Array.isArray(permissions)) {
    return [];
  }

  const moduleMap = new Map<string, Set<string>>();

  permissions.forEach((permission) => {
    if (permission.modules && Array.isArray(permission.modules)) {
      permission.modules.forEach((module: any) => {
        const moduleName = module.Name;

        if (!moduleMap.has(moduleName)) {
          moduleMap.set(moduleName, new Set<string>());
        }

        // Add all actions from this permission
        if (permission.action && Array.isArray(permission.action)) {
          permission.action.forEach((action: string) => {
            moduleMap.get(moduleName)!.add(action);
          });
        }
      });
    }
  });

  // Convert Map to Array
  const result: TransformedPermission[] = [];
  moduleMap.forEach((actions, moduleName) => {
    result.push({
      module: moduleName,
      action: Array.from(actions),
    });
  });

  return result;
}
