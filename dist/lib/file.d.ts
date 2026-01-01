/**
 * Generate unique filename using crypto and timestamp
 * @param originalName - Original filename
 * @returns Unique filename with timestamp and random string
 */
export declare const generateUniqueFilename: (originalName: string) => string;
/**
 * Validate file type based on mime type
 * @param mimeType - File MIME type
 * @returns boolean indicating if file type is allowed
 */
export declare const isAllowedFileType: (mimeType: string) => boolean;
/**
 * Check if file size is within limit
 * @param size - File size in bytes
 * @param maxSize - Maximum allowed size in bytes (default 50MB)
 * @returns boolean indicating if size is valid
 */
export declare const isValidFileSize: (size: number, maxSize?: number) => boolean;
/**
 * Convert File object to Buffer
 * @param file - File object
 * @returns Buffer containing file data
 */
export declare const fileToBuffer: (file: File) => Promise<Buffer>;
/**
 * Validate and extract file metadata
 * @param file - File object
 * @returns Object containing file metadata
 */
export declare const extractFileMetadata: (file: File) => Promise<{
    filename: string;
    originalName: string;
    mimeType: string;
    size: number;
    filePath: string;
    fileContent: Buffer<ArrayBufferLike>;
}>;
