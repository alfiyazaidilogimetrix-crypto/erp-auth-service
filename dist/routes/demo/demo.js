"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var zod_openapi_1 = require("@hono/zod-openapi");
var authentication_1 = require("../../middleware/authentication");
var checkPermission_1 = require("../../middleware/checkPermission");
var demo = new zod_openapi_1.OpenAPIHono();
var demoRoute = (0, zod_openapi_1.createRoute)({
    method: 'get',
    path: '/test-auth',
    request: {
        headers: zod_openapi_1.z.object({
            'Authorization': zod_openapi_1.z.string().openapi({ example: 'Bearer TOKEN' }),
            'x-module': zod_openapi_1.z.string().openapi({ example: 'Inventory' }),
            'action-perform': zod_openapi_1.z.string().openapi({ example: 'read' }),
        }),
    },
    responses: {
        200: {
            content: {
                'application/json': {
                    schema: zod_openapi_1.z.object({
                        success: zod_openapi_1.z.boolean(),
                        message: zod_openapi_1.z.string(),
                        user: zod_openapi_1.z.any(),
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
demo.use('/test-auth', authentication_1.authenticationMiddleware, checkPermission_1.checkPermissionMiddleware);
demo.openapi(demoRoute, function (c) {
    var _a;
    var user = c.get('user');
    return c.json({
        success: true,
        message: 'You have access!',
        user: {
            id: user.id,
            name: user.name,
            role: (_a = user.role) === null || _a === void 0 ? void 0 : _a.name
        }
    }, 200);
});
exports.default = demo;
