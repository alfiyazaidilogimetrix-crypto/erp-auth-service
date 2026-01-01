"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileResponseSchema = exports.deleteMultipleFilesSchema = exports.fileUpdateSchema = exports.fileQuerySchema = exports.fileUploadSchema = void 0;
// src/schema/file.ts
var zod_openapi_1 = require("@hono/zod-openapi");
// File upload schema
exports.fileUploadSchema = zod_openapi_1.z
    .object({
    files: zod_openapi_1.z.array(zod_openapi_1.z.any()).min(1, 'At least one file is required'),
})
    .openapi({
    example: {
        files: ['file1.jpg', 'file2.pdf'],
    },
});
// File query filters schema
exports.fileQuerySchema = zod_openapi_1.z
    .object({
    id: zod_openapi_1.z.string().optional(),
    filename: zod_openapi_1.z.string().optional(),
    original_name: zod_openapi_1.z.string().optional(),
    mime_type: zod_openapi_1.z.string().optional(),
    size: zod_openapi_1.z.string().optional(),
    file_path: zod_openapi_1.z.string().optional(),
    mime_types: zod_openapi_1.z.string().optional(),
    min_size: zod_openapi_1.z.string().optional(),
    max_size: zod_openapi_1.z.string().optional(),
    include_content: zod_openapi_1.z.enum(['true', 'false']).optional(),
})
    .openapi({
    example: {
        mime_type: 'image/jpeg',
        min_size: '1000',
        max_size: '5000000',
        include_content: 'false',
    },
});
// File update schema
exports.fileUpdateSchema = zod_openapi_1.z
    .object({
    filename: zod_openapi_1.z.string().optional(),
    originalName: zod_openapi_1.z.string().optional(),
    mimeType: zod_openapi_1.z.string().optional(),
    filePath: zod_openapi_1.z.string().optional(),
})
    .openapi({
    example: {
        filename: 'updated-file.jpg',
        originalName: 'my-updated-file.jpg',
    },
});
// Delete multiple files schema
exports.deleteMultipleFilesSchema = zod_openapi_1.z
    .object({
    ids: zod_openapi_1.z.array(zod_openapi_1.z.number()).min(1, 'At least one file ID is required'),
})
    .openapi({
    example: {
        ids: [1, 2, 3],
    },
});
// File response schema
exports.fileResponseSchema = zod_openapi_1.z
    .object({
    id: zod_openapi_1.z.number(),
    filename: zod_openapi_1.z.string(),
    originalName: zod_openapi_1.z.string(),
    mimeType: zod_openapi_1.z.string(),
    size: zod_openapi_1.z.number(),
    filePath: zod_openapi_1.z.string(),
    createdAt: zod_openapi_1.z.string(),
    updatedAt: zod_openapi_1.z.string(),
})
    .openapi({
    example: {
        id: 1,
        filename: '1698765432-abc123def456.jpg',
        originalName: 'photo.jpg',
        mimeType: 'image/jpeg',
        size: 2048576,
        filePath: '/files/1698765432-abc123def456.jpg',
        createdAt: '2024-10-31T12:30:45.000Z',
        updatedAt: '2024-10-31T12:30:45.000Z',
    },
});
