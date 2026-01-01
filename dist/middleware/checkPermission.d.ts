import { AuthVariables } from './types';
export declare const checkPermissionMiddleware: import("hono").MiddlewareHandler<{
    Variables: AuthVariables;
}, string, {}>;
