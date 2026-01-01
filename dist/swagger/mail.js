"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailDoc = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
var mail_1 = require("@schema/mail");
exports.sendMailDoc = (0, zod_openapi_1.createRoute)({
    tags: ["Mailer"],
    method: "post",
    path: "/send-mail",
    summary: "Send mail to email",
    request: {
        body: {
            content: {
                "application/json": {
                    schema: mail_1.sendMailSchema,
                },
            },
        },
    },
    responses: {
        200: {
            description: "Successful mail send to user",
            content: {
                "application/json": {
                    schema: zod_openapi_1.z.object({
                        status: zod_openapi_1.z.number(),
                        message: zod_openapi_1.z.string(),
                    }),
                },
            },
        },
    },
});
