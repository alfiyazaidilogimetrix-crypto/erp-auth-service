import { OpenAPIHono, createRoute, z } from '@hono/zod-openapi';
import { authenticationMiddleware } from '../../middleware/authentication';
import { checkPermissionMiddleware } from '../../middleware/checkPermission';

import { AuthVariables } from '../../middleware/types';

const demo = new OpenAPIHono<{ Variables: AuthVariables }>();

const demoRoute = createRoute({
  method: 'get',
  path: '/test-auth',
  request: {
    headers: z.object({
      'Authorization': z.string().openapi({ example: 'Bearer TOKEN' }),
      'x-module': z.string().openapi({ example: 'Inventory' }),
      'action-perform': z.string().openapi({ example: 'read' }),
    }),
  },
  responses: {
    200: {
      content: {
        'application/json': {
          schema: z.object({
            success: z.boolean(),
            message: z.string(),
            user: z.any(),
          }),
        },
      },
      description: 'Authorized access',
    },
    401: {
        description: 'Unauthorized',
    },
    403: {
        description: 'Forbidden',
    }
  },
});

demo.use('/test-auth', authenticationMiddleware, checkPermissionMiddleware);

demo.openapi(demoRoute, (c) => {
  const user = c.get('user');
  return c.json({
    success: true,
    message: 'You have access!',
    user: {
        id: user.id,
        name: user.name,
        role: user.role?.name
    }
  }, 200);
});

export default demo;
