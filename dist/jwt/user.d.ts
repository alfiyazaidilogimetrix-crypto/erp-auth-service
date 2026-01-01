import { IUserPayload } from '@schema/jwt';
export declare const userGenerateToken: (payload: IUserPayload) => Promise<string>;
export declare const userRefreshToken: (payload: {
    id: string;
    name: string;
    email: string;
}) => Promise<string>;
export declare const userGuard: import("hono").MiddlewareHandler;
