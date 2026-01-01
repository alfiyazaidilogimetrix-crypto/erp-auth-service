import { OpenAPIHono } from "@hono/zod-openapi";
declare const mail: OpenAPIHono<import("hono").Env, {}, "/">;
export default mail;
