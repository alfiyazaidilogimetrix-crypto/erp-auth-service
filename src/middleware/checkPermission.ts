import { HTTPException } from 'hono/http-exception';
import { createMiddleware } from 'hono/factory';
import { AuthVariables } from './types';

export const checkPermissionMiddleware = createMiddleware<{ Variables: AuthVariables }>(async (c, next) => {
  const user = c.get('user');
  const moduleName = c.req.header('x-module');
  const requestedAction = c.req.header('action-perform');

  if (!user) {
    throw new HTTPException(401, { message: 'Unauthorized: User context not found' });
  }

  if (!moduleName || !requestedAction) {
    throw new HTTPException(400, { message: 'Bad Request: x-module and action-perform headers are required' });
  }

  if (!user.role) {
    throw new HTTPException(403, { message: 'Forbidden: User has no role assigned' });
  }

  // Retrieve all permissions associated with the role
  const permissions = user.role.permissions;

  // Check whether the requested module exists in the user’s permissions 
  // and the requested action is allowed for that module.
  const hasPermission = permissions.some((permission: any) => {
    const isModuleMatch = permission.modules.some((mod: any) => mod.Name === moduleName);
    const isActionMatch = permission.action.includes(requestedAction) || 
                          permission.action.includes('all') || 
                          permission.action.includes('manage');
    
    return isModuleMatch && isActionMatch;
  });

  if (!hasPermission) {
    throw new HTTPException(403, { 
      message: `Forbidden: Insufficient permissions for action '${requestedAction}' on module '${moduleName}'` 
    });
  }

  await next();
});
