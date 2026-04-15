import { IBulkCreateUser } from '@schema/user';
export declare const bulkCreateUserFromExcel: (body: IBulkCreateUser) => Promise<{
    success: number;
    failed: number;
    data: ({
        role: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        } | null;
    } & {
        id: number;
        name: string;
        email: string;
        emailVerified: boolean;
        password: string;
        fileId: number | null;
        original_password: string | null;
        mobileNumber: string | null;
        roleId: number | null;
        company_id: number | null;
        head_office_id: number | null;
        branch_office_id: number | null;
        provider: import("erp-shared-models/src/generated/client").$Enums.Provider;
        createdAt: Date;
        updatedAt: Date;
    })[];
    errors: {
        row: number;
        message: any;
    }[];
}>;
