"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.loadEnv = loadEnv;
// Type-safe environment loader with validation
function loadEnv() {
    var requiredEnvs = [
        'DATABASE_URL',
        'PORT',
        'USER_JWT_SECRET',
        'USER_JWT_REFRESH_SECRET',
        'USER_JWT_EXPIRE',
        'USER_JWT_REFRESH_EXPIRE',
        'ADMIN_JWT_SECRET',
        'ADMIN_JWT_REFRESH_SECRET',
        'ADMIN_JWT_EXPIRE',
        'ADMIN_JWT_REFRESH_EXPIRE',
        'OTP_JWT_SECRET',
        'OTP_JWT_EXPIRE',
        'EMAIL_API_KEY',
        'EMAIL',
        'E_COURT_API_KEY',
        'BASE_URL_ECOURT',
    ];
    // Check for missing environment variables
    var missingEnvs = requiredEnvs.filter(function (env) { return !process.env[env]; });
    if (missingEnvs.length > 0) {
        throw new Error("Missing required environment variables: ".concat(missingEnvs.join(', ')));
    }
    return {
        DATABASE_URL: process.env.DATABASE_URL,
        PORT: process.env.PORT,
        USER_JWT_SECRET: process.env.USER_JWT_SECRET,
        USER_JWT_REFRESH_SECRET: process.env.USER_JWT_REFRESH_SECRET,
        USER_JWT_EXPIRE: process.env.USER_JWT_EXPIRE,
        USER_JWT_REFRESH_EXPIRE: process.env.USER_JWT_REFRESH_EXPIRE,
        ADMIN_JWT_SECRET: process.env.ADMIN_JWT_SECRET,
        ADMIN_JWT_REFRESH_SECRET: process.env.ADMIN_JWT_REFRESH_SECRET,
        ADMIN_JWT_EXPIRE: process.env.ADMIN_JWT_EXPIRE,
        ADMIN_JWT_REFRESH_EXPIRE: process.env.ADMIN_JWT_REFRESH_EXPIRE,
        OTP_JWT_SECRET: process.env.OTP_JWT_SECRET,
        OTP_JWT_EXPIRE: process.env.OTP_JWT_EXPIRE,
        EMAIL_API_KEY: process.env.EMAIL_API_KEY,
        EMAIL: process.env.EMAIL,
        BCC: process.env.BCC,
        E_COURT_API_KEY: process.env.E_COURT_API_KEY,
        BASE_URL_ECOURT: process.env.BASE_URL_ECOURT,
    };
}
// Option 2: Global env instance
exports.env = loadEnv();
