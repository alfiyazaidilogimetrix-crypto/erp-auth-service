import { AuthVariables } from './types';
export declare const authenticationMiddleware: import("hono").MiddlewareHandler<{
    Variables: AuthVariables;
}, string, {}, Response>;
