import { HTTPException } from 'hono/http-exception';
import { createMiddleware } from 'hono/factory';
import { verify } from 'hono/jwt';
import { env } from '../lib/env';
import prisma from '../config/prisma';
import { AuthVariables } from './types';

export const authenticationMiddleware = createMiddleware<{ Variables: AuthVariables }>(async (c, next) => {
  const authHeader = c.req.header('Authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new HTTPException(401, { message: 'Unauthorized: Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const payload = await verify(token, env.USER_JWT_SECRET);
    if (!payload || !payload.id) {
        throw new HTTPException(401, { message: 'Unauthorized: Invalid token payload' });
    }

    const userId = Number(payload.id);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        role: {
          include: {
            permissions: {
              include: {
                modules: true
              }
            }
          }
        }
      }
    });

    if (!user) {
      throw new HTTPException(401, { message: 'Unauthorized: User not found' });
    }

    // Attach user context to the request
    c.set('user', user);
    c.set('userId', userId);

    await next();
  } catch (error) {
    throw new HTTPException(401, { message: 'Unauthorized: Token verification failed' });
  }
});
