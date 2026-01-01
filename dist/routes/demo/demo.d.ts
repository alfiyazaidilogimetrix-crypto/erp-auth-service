import { OpenAPIHono } from '@hono/zod-openapi';
import { AuthVariables } from '../../middleware/types';
declare const demo: OpenAPIHono<{
    Variables: AuthVariables;
}, {}, "/">;
export default demo;
