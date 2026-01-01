import { HTTPException } from 'hono/http-exception';
import { createMiddleware } from 'hono/factory';
import { verify } from 'hono/jwt';
import { env } from '../lib/env';
import prisma from '../config/prisma';
import { AuthVariables } from './types';

export const authenticationMiddleware = createMiddleware<{
  Variables: AuthVariables;
}>(async (c, next) => {
  const authHeader = c.req.header('Authorization');
  console.log('Auth Middleware - Header:', authHeader ? 'Present' : 'Missing');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('Auth Middleware - Invalid Header Format');
    throw new HTTPException(401, {
      message: 'Unauthorized: Missing or invalid token',
    });
  }

  const token = authHeader.split(' ')[1];
  console.log('Auth Middleware - Token:', token.substring(0, 10) + '...');

  try {
    const payload = await verify(token, env.USER_JWT_SECRET);
    console.log('Auth Middleware - Payload verified, ID:', payload?.id);

    if (!payload || !payload.id) {
      console.log('Auth Middleware - Invalid Payload structure');
      throw new HTTPException(401, {
        message: 'Unauthorized: Invalid token payload',
      });
    }

    const userId = Number(payload.id);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
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
    });

    if (!user) {
      console.log('Auth Middleware - User not found in DB for ID:', userId);
      throw new HTTPException(401, { message: 'Unauthorized: User not found' });
    }

    console.log('Auth Middleware - User authenticated:', user.email);

    // Attach user context to the request
    c.set('user', user);
    c.set('userId', userId);

    await next();
  } catch (error) {
    console.error('Authentication error details:', error);
    throw new HTTPException(401, {
      message: 'Unauthorized: Token verification failed',
    });
  }
});
