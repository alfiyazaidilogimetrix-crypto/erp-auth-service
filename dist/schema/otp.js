"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resendOtpSchema = exports.verifyOtpSchema = exports.generateOtpSchema = void 0;
var zod_openapi_1 = require("@hono/zod-openapi");
exports.generateOtpSchema = zod_openapi_1.z
    .object({
    email: zod_openapi_1.z.string().email(),
})
    .openapi({
    required: ["email"],
    example: {
        email: "example@gmail.com",
    },
});
exports.verifyOtpSchema = zod_openapi_1.z
    .object({
    token: zod_openapi_1.z.string(),
    otp: zod_openapi_1.z.string(),
})
    .openapi({
    required: ["token", "otp"],
    example: {
        token: "JWT token",
        otp: "1234",
    },
});
exports.resendOtpSchema = zod_openapi_1.z
    .object({
    token: zod_openapi_1.z.string(),
})
    .openapi({
    required: ["token"],
    example: {
        token: "JWT token",
    },
});
