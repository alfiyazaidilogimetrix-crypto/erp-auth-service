import { ISendMail } from "@schema/mail";
export declare const sendMail: (body: ISendMail) => Promise<{
    status: number;
    message: string;
}>;
