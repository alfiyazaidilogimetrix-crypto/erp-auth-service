export interface AppEnv {
    DATABASE_URL: string;
    PORT: string;
    USER_JWT_SECRET: string;
    USER_JWT_REFRESH_SECRET: string;
    USER_JWT_EXPIRE: string;
    USER_JWT_REFRESH_EXPIRE: string;
    ADMIN_JWT_SECRET: string;
    ADMIN_JWT_REFRESH_SECRET: string;
    ADMIN_JWT_EXPIRE: string;
    ADMIN_JWT_REFRESH_EXPIRE: string;
    OTP_JWT_SECRET: string;
    OTP_JWT_EXPIRE: string;
    EMAIL_API_KEY: string;
    EMAIL: string;
    BCC?: string;
}
export declare function loadEnv(): AppEnv;
export type HonoEnv = {
    Bindings: AppEnv;
};
export declare const env: AppEnv;
