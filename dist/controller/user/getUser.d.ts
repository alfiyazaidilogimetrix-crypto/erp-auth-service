export declare const getUserProfile: (userId: number) => Promise<{
    profileImage: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        filePath: string;
        fileContent: import("erp-shared-models/src/generated/client/runtime/client").Bytes;
    } | null;
    role: ({
        permissions: ({
            modules: {
                description: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                Name: string;
            }[];
        } & {
            description: string | null;
            title: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            action: string[];
        })[];
    } & {
        description: string | null;
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    }) | null;
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
    } | null;
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
}>;
export declare const getAllUsers: (page?: number, limit?: number, roleId?: number) => Promise<{
    users: {
        profileImage: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            filename: string;
            originalName: string;
            mimeType: string;
            size: number;
            filePath: string;
            fileContent: import("erp-shared-models/src/generated/client/runtime/client").Bytes;
        } | null;
        role: {
            description: string | null;
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
        } | null;
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
        } | null;
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
    }[];
    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPages: number;
    };
}>;
export declare const getUserById: (userId: number) => Promise<{
    profileImage: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        filename: string;
        originalName: string;
        mimeType: string;
        size: number;
        filePath: string;
        fileContent: import("erp-shared-models/src/generated/client/runtime/client").Bytes;
    } | null;
    role: {
        description: string | null;
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
    } | null;
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
    } | null;
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
}>;
