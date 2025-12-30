// src/lib/fileUtils.ts
import * as crypto from 'crypto';

/**
 * Generate unique filename using crypto and timestamp
 * @param originalName - Original filename
 * @returns Unique filename with timestamp and random string
 */
export const generateUniqueFilename = (originalName: string): string => {
  const timestamp = Date.now();
  const randomString = crypto.randomBytes(8).toString('hex');
  const fileExtension = originalName.split('.').pop() || 'bin';
  return `${timestamp}-${randomString}.${fileExtension}`;
};

/**
 * Validate file type based on mime type
 * @param mimeType - File MIME type
 * @returns boolean indicating if file type is allowed
 */
export const isAllowedFileType = (mimeType: string): boolean => {
  const allowedTypes = ['image/', 'application/', 'text/', 'video/', 'audio/'];
  return allowedTypes.some((type) => mimeType.startsWith(type));
};

/**
 * Check if file size is within limit
 * @param size - File size in bytes
 * @param maxSize - Maximum allowed size in bytes (default 50MB)
 * @returns boolean indicating if size is valid
 */
export const isValidFileSize = (
  size: number,
  maxSize: number = 50 * 1024 * 1024,
): boolean => {
  return size > 0 && size <= maxSize;
};

/**
 * Convert File object to Buffer
 * @param file - File object
 * @returns Buffer containing file data
 */
export const fileToBuffer = async (file: File): Promise<Buffer> => {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

/**
 * Validate and extract file metadata
 * @param file - File object
 * @returns Object containing file metadata
 */
export const extractFileMetadata = async (file: File) => {
  const buffer = await fileToBuffer(file);
  const uniqueFilename = generateUniqueFilename(file.name);

  return {
    filename: uniqueFilename,
    originalName: file.name,
    mimeType: file.type,
    size: file.size,
    filePath: `/files/${uniqueFilename}`,
    fileContent: buffer,
  };
};
