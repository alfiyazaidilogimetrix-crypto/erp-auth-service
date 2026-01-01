export declare const hashedPassword: (pass: string) => Promise<string>;
export declare const validatePassword: (pass: string, hasPass: string) => Promise<boolean>;
export declare const getExpiryTime: (expireString: string) => number;
export declare const generateOtp: () => string;
export declare const generatePassword: (length?: number) => string;
