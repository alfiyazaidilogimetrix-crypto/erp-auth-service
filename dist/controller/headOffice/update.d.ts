import { IUpdateHeadOffice } from '@schema/headOffice';
export declare const updateHeadOffice: (id: number, body: IUpdateHeadOffice) => Promise<{
    id: number;
    company_id: number;
    state: string;
    pincode: string;
    created_at: Date;
    updated_at: Date;
    address: string;
    office_name: string;
    office_id: string;
    city: string;
    phone_number: string;
    mail_id: string;
    office_incharge_name: string | null;
    office_incharge_phone_number: string | null;
    office_incharge_mail_id: string | null;
}>;
