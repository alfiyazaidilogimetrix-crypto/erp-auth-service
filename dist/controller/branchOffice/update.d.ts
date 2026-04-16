import { IUpdateBranchOffice } from '@schema/branchOffice';
export declare const updateBranchOffice: (id: number, body: IUpdateBranchOffice) => Promise<{
    id: number;
    company_id: number;
    state: string;
    pincode: string;
    head_office_id: number;
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
