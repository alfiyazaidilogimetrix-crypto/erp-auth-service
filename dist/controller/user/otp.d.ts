import { IGenerateOtp, IResendOtp, IVerifyOtp } from '@schema/otp';
export declare const generateOTPToken: (body: IGenerateOtp) => Promise<{
    status: string;
    token: string;
}>;
export declare const verifyOTPToken: (body: IVerifyOtp) => Promise<{
    status: string;
    message: string;
    email: string;
}>;
export declare const resendOTPToken: (body: IResendOtp) => Promise<{
    status: string;
    token: string;
}>;
