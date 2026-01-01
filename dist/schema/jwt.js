"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userPayloadSchema = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
exports.userPayloadSchema = zod_openapi_1.z.object({
    id: zod_openapi_1.z.number(),
    name: zod_openapi_1.z.string(),
    email: zod_openapi_1.z.string().email(),
    roleId: zod_openapi_1.z.string().cuid().nullable().optional(),
    role: zod_openapi_1.z
        .object({
        id: zod_openapi_1.z.string().cuid(),
        name: zod_openapi_1.z.string(),
        permissions: zod_openapi_1.z.array(zod_openapi_1.z.object({
            id: zod_openapi_1.z.string().cuid(),
            action: zod_openapi_1.z.array(zod_openapi_1.z.string()),
            modules: zod_openapi_1.z.array(zod_openapi_1.z.object({
                id: zod_openapi_1.z.string().cuid(),
                Name: zod_openapi_1.z.string(),
            })),
        })),
    })
        .nullable()
        .optional(),
});
