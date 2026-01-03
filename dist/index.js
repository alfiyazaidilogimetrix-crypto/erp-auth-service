"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
var logger_1 = require("hono/logger");
var zod_openapi_1 = require("@hono/zod-openapi");
var hono_api_reference_1 = require("@scalar/hono-api-reference");
var env_1 = require("./lib/env");
var cors_1 = require("hono/cors");
__exportStar(require("./middleware"), exports);
__exportStar(require("./middleware/types"), exports);
var routes_1 = require("./routes/routes");
var env = (0, env_1.loadEnv)();
var app = new zod_openapi_1.OpenAPIHono();
app.use('/api/*', (0, cors_1.cors)({
    origin: [
        'http://localhost:5173',
        'https://m1qgkrd1-4242.inc1.devtunnels.ms',
        'https://hdw8jq12-5173.inc1.devtunnels.ms',
        'https://m1qgkrd1-4043.inc1.devtunnels.ms',
        'https://hdw8jq12-5173.inc1.devtunnels.ms',
        'http://192.168.1.18',
        'https://192.168.1.18',
    ],
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
}));
app.use((0, logger_1.logger)());
app.get('/', function (c) {
    return c.text('Hello To Template API Documentation');
});
app.route('/api', routes_1.default);
app.onError(function (err, c) {
    var _a;
    // Determine status code
    var statusCode = ((_a = c.res) === null || _a === void 0 ? void 0 : _a.status) || 400;
    // Create error response object
    var errorResponse = __assign({ success: false, message: err.message || 'An error occurred' }, (process.env.NODE_ENV === 'development' && {
        stack: err.stack,
        details: err.cause,
    }));
    return c.json(errorResponse, statusCode);
});
app.doc('/doc', {
    info: {
        title: 'Template API',
        version: 'v1',
    },
    openapi: '3.1.0',
});
app.get('/docs', (0, hono_api_reference_1.Scalar)({ url: '/doc' }));
app.openAPIRegistry.registerComponent('securitySchemes', 'AuthorizationBearer', // <- Add security name
{
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
});
exports.default = {
    port: process.env.PORT || 3001,
    fetch: app.fetch,
};
