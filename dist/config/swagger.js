"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var swagger_ui_1 = require("@hono/swagger-ui");
var hono_1 = require("hono");
var swagger = new hono_1.Hono();
swagger.get("/docs", function (c) {
    return c.html("\n    <html lang=\"en\">\n      <head>\n        <meta charset=\"utf-8\" />\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n        <meta name=\"description\" content=\"Custom Swagger\" />\n        <title>Custom Swagger</title>\n        <script>\n          // custom script\n        </script>\n        <style>\n          /* custom style */\n        </style>\n      </head>\n      ".concat((0, swagger_ui_1.SwaggerUI)({ url: "/docs" }), "\n    </html>\n  "));
});
exports.default = swagger;
