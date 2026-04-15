import { z } from '@hono/zod-openapi';

export const ownerDetailsSchema = z
  .object({
    owner_name: z.string().min(1, 'Owner name is required'),
    owner_father_name: z.string().min(1, 'Owner father name is required'),
    dob: z.string().datetime(),
    pincode: z.string().min(6).max(6),
    state: z.string().min(1),
    district: z.string().min(1),
    address: z.string().min(1),
    owner_phone_number: z.string().min(10),
    owner_mail_id: z.string().email(),
  })
  .openapi({
    example: {
      owner_name: 'John Doe',
      owner_father_name: 'Richard Doe',
      dob: '1980-01-01T00:00:00.000Z',
      pincode: '110001',
      state: 'Delhi',
      district: 'Central Delhi',
      address: '123 Street Name',
      owner_phone_number: '9876543210',
      owner_mail_id: 'john.doe@example.com',
    },
  });

export const legalProofSchema = z
  .array(
    z.object({
      file_ids: z.array(z.coerce.number()),
      file_type: z.string(),
    })
  )
  .openapi({
    example: [
      {
        file_ids: [1, 2],
        file_type: 'PAN',
      },
    ],
  });

export const createCompanySchema = z
  .object({
    company_name: z.string().min(1, 'Company name is required'),
    pincode: z.string().min(6).max(6),
    state: z.string().min(1),
    district: z.string().min(1),
    address: z.string().min(1),
    company_mail_id: z.string().email(),
    company_phone_number: z.string().min(10),
    company_gst_number: z.string().min(15).max(15),
    business_type: z.string().min(1),
    user_id: z.number().int().positive(),
    ownerDetails: ownerDetailsSchema.optional(),
    legal_proof: legalProofSchema.optional(),
  })
  .openapi({
    required: [
      'company_name',
      'pincode',
      'state',
      'district',
      'address',
      'company_mail_id',
      'company_phone_number',
      'company_gst_number',
      'business_type',
      'user_id',
    ],
    example: {
      company_name: 'Logimetrix ERP Solutions',
      pincode: '110001',
      state: 'Delhi',
      district: 'Central Delhi',
      address: '456 Business Park',
      company_mail_id: 'contact@logimetrix.com',
      company_phone_number: '0112345678',
      company_gst_number: '07AAAAA0000A1Z5',
      business_type: 'Software Development',
      user_id: 1,
      ownerDetails: {
        owner_name: 'John Doe',
        owner_father_name: 'Richard Doe',
        dob: '1980-01-01T00:00:00.000Z',
        pincode: '110001',
        state: 'Delhi',
        district: 'Central Delhi',
        address: '123 Street Name',
        owner_phone_number: '9876543210',
        owner_mail_id: 'john.doe@example.com',
      },
      legal_proof: [
        {
          file_ids: [1, 2],
          file_type: 'PAN',
        },
      ],
    },
  });

export const updateCompanySchema = z
  .object({
    company_name: z.string().min(1).optional(),
    pincode: z.string().min(6).max(6).optional(),
    state: z.string().min(1).optional(),
    district: z.string().min(1).optional(),
    address: z.string().min(1).optional(),
    company_mail_id: z.string().email().optional(),
    company_phone_number: z.string().min(10).optional(),
    company_gst_number: z.string().min(15).max(15).optional(),
    business_type: z.string().min(1).optional(),
    ownerDetails: ownerDetailsSchema.partial().optional(),
    legal_proof: legalProofSchema.optional(),
  })
  .openapi({
    example: {
      company_name: 'Logimetrix ERP Solutions Updated',
      address: '789 New Business Park',
      legal_proof: [
        {
          file_ids: [1, 3],
          file_type: 'GST',
        },
      ],
    },
  });

export const companyResponseSchema = z
  .object({
    id: z.number(),
    company_name: z.string(),
    pincode: z.string(),
    state: z.string(),
    district: z.string(),
    address: z.string(),
    company_mail_id: z.string(),
    company_phone_number: z.string(),
    company_gst_number: z.string(),
    business_type: z.string(),
    user_id: z.number(),
    owner_id: z.number().nullable(),
    ownerDetails: ownerDetailsSchema.extend({ id: z.number() }).nullable().optional(),
    companyFiles: z
      .array(
        z.object({
          id: z.number(),
          file_id: z.number(),
          file_type: z.string(),
          file: z.any().optional(), // Or define a more specific schema if needed
        })
      )
      .optional(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
  })
  .openapi({
    example: {
      id: 1,
      company_name: 'Logimetrix ERP Solutions',
      pincode: '110001',
      state: 'Delhi',
      district: 'Central Delhi',
      address: '456 Business Park',
      company_mail_id: 'contact@logimetrix.com',
      company_phone_number: '0112345678',
      company_gst_number: '07AAAAA0000A1Z5',
      business_type: 'Software Development',
      user_id: 1,
      owner_id: 1,
      ownerDetails: {
        id: 1,
        owner_name: 'John Doe',
        owner_father_name: 'Richard Doe',
        dob: '1980-01-01T00:00:00.000Z',
        pincode: '110001',
        state: 'Delhi',
        district: 'Central Delhi',
        address: '123 Street Name',
        owner_phone_number: '9876543210',
        owner_mail_id: 'john.doe@example.com',
      },
      companyFiles: [
        {
          id: 1,
          file_id: 1,
          file_type: 'PAN',
        },
      ],
      created_at: '2024-01-15T10:30:00.000Z',
      updated_at: '2024-01-15T10:30:00.000Z',
    },
  });

export type ICreateCompany = z.infer<typeof createCompanySchema>;
export type IUpdateCompany = z.infer<typeof updateCompanySchema>;
export type ICompanyResponse = z.infer<typeof companyResponseSchema>;
export type IOwnerDetails = z.infer<typeof ownerDetailsSchema>;
export type ILegalProof = z.infer<typeof legalProofSchema>;
