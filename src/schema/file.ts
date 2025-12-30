// src/schema/file.ts
import { z } from '@hono/zod-openapi';

// File upload schema
export const fileUploadSchema = z
  .object({
    files: z.array(z.any()).min(1, 'At least one file is required'),
  })
  .openapi({
    example: {
      files: ['file1.jpg', 'file2.pdf'],
    },
  });

// File query filters schema
export const fileQuerySchema = z
  .object({
    id: z.string().optional(),
    filename: z.string().optional(),
    original_name: z.string().optional(),
    mime_type: z.string().optional(),
    size: z.string().optional(),
    file_path: z.string().optional(),
    mime_types: z.string().optional(),
    min_size: z.string().optional(),
    max_size: z.string().optional(),
    include_content: z.enum(['true', 'false']).optional(),
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
export const fileUpdateSchema = z
  .object({
    filename: z.string().optional(),
    originalName: z.string().optional(),
    mimeType: z.string().optional(),
    filePath: z.string().optional(),
  })
  .openapi({
    example: {
      filename: 'updated-file.jpg',
      originalName: 'my-updated-file.jpg',
    },
  });

// Delete multiple files schema
export const deleteMultipleFilesSchema = z
  .object({
    ids: z.array(z.number()).min(1, 'At least one file ID is required'),
  })
  .openapi({
    example: {
      ids: [1, 2, 3],
    },
  });

// File response schema
export const fileResponseSchema = z
  .object({
    id: z.number(),
    filename: z.string(),
    originalName: z.string(),
    mimeType: z.string(),
    size: z.number(),
    filePath: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
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

export type IFileQuery = z.infer<typeof fileQuerySchema>;
export type IFileUpdate = z.infer<typeof fileUpdateSchema>;
export type IDeleteMultipleFiles = z.infer<typeof deleteMultipleFilesSchema>;
