"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMailSchema = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
exports.sendMailSchema = zod_openapi_1.z
    .object({
    subject: zod_openapi_1.z.string(),
    to: zod_openapi_1.z.string().email(),
    from: zod_openapi_1.z.string().email().optional(),
    cc: zod_openapi_1.z.array(zod_openapi_1.z.string().email()).optional(),
    html: zod_openapi_1.z.string(),
})
    .openapi({
    required: ["subject", "to", "html"],
    example: {
        subject: "Send Email",
        to: "example@gmail.com",
        html: "<p>Hello this mail is from template</p>",
    },
});
