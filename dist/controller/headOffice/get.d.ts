export declare const getHeadOffices: (page?: number, limit?: number, company_id?: number) => Promise<{
    headOffices: ({
        company: {
            id: number;
            district: string;
            state: string;
            pincode: string;
            created_at: Date;
            updated_at: Date;
            file_id: number | null;
            user_id: number;
            address: string;
            company_name: string;
            company_mail_id: string;
            company_phone_number: string;
            company_gst_number: string;
            business_type: string;
            owner_id: number | null;
        };
    } & {
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
    })[];
    total: number;
    page: number;
    limit: number;
}>;
export declare const getHeadOfficeById: (id: number) => Promise<{
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
