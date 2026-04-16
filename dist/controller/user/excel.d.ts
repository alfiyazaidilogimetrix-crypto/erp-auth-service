import { IBulkCreateUser } from '@schema/user';
export declare const bulkCreateUserFromExcel: (body: IBulkCreateUser) => Promise<{
    success: number;
    failed: number;
    data: ({
        role: {
            description: string | null;
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        } | null;
    } & {
        password: string;
        id: number;
        name: string;
        email: string;
        emailVerified: boolean;
        fileId: number | null;
        original_password: string | null;
        mobileNumber: string | null;
        roleId: number | null;
        company_id: number | null;
        createdAt: Date;
        updatedAt: Date;
        provider: import("erp-shared-models/src/generated/client").$Enums.Provider;
    })[];
    errors: {
        row: number;
        message: any;
    }[];
}>;
