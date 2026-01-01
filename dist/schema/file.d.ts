import { z } from '@hono/zod-openapi';
export declare const fileUploadSchema: z.ZodObject<{
    files: z.ZodArray<z.ZodAny, "many">;
}, "strip", z.ZodTypeAny, {
    files: any[];
}, {
    files: any[];
}>;
export declare const fileQuerySchema: z.ZodObject<{
    id: z.ZodOptional<z.ZodString>;
    filename: z.ZodOptional<z.ZodString>;
    original_name: z.ZodOptional<z.ZodString>;
    mime_type: z.ZodOptional<z.ZodString>;
    size: z.ZodOptional<z.ZodString>;
    file_path: z.ZodOptional<z.ZodString>;
    mime_types: z.ZodOptional<z.ZodString>;
    min_size: z.ZodOptional<z.ZodString>;
    max_size: z.ZodOptional<z.ZodString>;
    include_content: z.ZodOptional<z.ZodEnum<["true", "false"]>>;
}, "strip", z.ZodTypeAny, {
    filename?: string | undefined;
    id?: string | undefined;
    size?: string | undefined;
    original_name?: string | undefined;
    mime_type?: string | undefined;
    file_path?: string | undefined;
    mime_types?: string | undefined;
    min_size?: string | undefined;
    max_size?: string | undefined;
    include_content?: "false" | "true" | undefined;
}, {
    filename?: string | undefined;
    id?: string | undefined;
    size?: string | undefined;
    original_name?: string | undefined;
    mime_type?: string | undefined;
    file_path?: string | undefined;
    mime_types?: string | undefined;
    min_size?: string | undefined;
    max_size?: string | undefined;
    include_content?: "false" | "true" | undefined;
}>;
export declare const fileUpdateSchema: z.ZodObject<{
    filename: z.ZodOptional<z.ZodString>;
    originalName: z.ZodOptional<z.ZodString>;
    mimeType: z.ZodOptional<z.ZodString>;
    filePath: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    filename?: string | undefined;
    originalName?: string | undefined;
    mimeType?: string | undefined;
    filePath?: string | undefined;
}, {
    filename?: string | undefined;
    originalName?: string | undefined;
    mimeType?: string | undefined;
    filePath?: string | undefined;
}>;
export declare const deleteMultipleFilesSchema: z.ZodObject<{
    ids: z.ZodArray<z.ZodNumber, "many">;
}, "strip", z.ZodTypeAny, {
    ids: number[];
}, {
    ids: number[];
}>;
export declare const fileResponseSchema: z.ZodObject<{
    id: z.ZodNumber;
    filename: z.ZodString;
    originalName: z.ZodString;
    mimeType: z.ZodString;
    size: z.ZodNumber;
    filePath: z.ZodString;
    createdAt: z.ZodString;
    updatedAt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    filename: string;
    id: number;
    size: number;
    createdAt: string;
    updatedAt: string;
    originalName: string;
    mimeType: string;
    filePath: string;
}, {
    filename: string;
    id: number;
    size: number;
    createdAt: string;
    updatedAt: string;
    originalName: string;
    mimeType: string;
    filePath: string;
}>;
export type IFileQuery = z.infer<typeof fileQuerySchema>;
export type IFileUpdate = z.infer<typeof fileUpdateSchema>;
export type IDeleteMultipleFiles = z.infer<typeof deleteMultipleFilesSchema>;
