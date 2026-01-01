export * from './middleware';
export * from './middleware/types';
declare const _default: {
    port: string | number;
    fetch: (request: Request, Env?: object | {} | undefined, executionCtx?: import("hono").ExecutionContext) => Response | Promise<Response>;
};
export default _default;
