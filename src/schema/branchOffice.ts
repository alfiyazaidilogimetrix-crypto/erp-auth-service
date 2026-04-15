import { z } from '@hono/zod-openapi';

export const createBranchOfficeSchema = z
  .object({
    company_id: z.number().int().positive(),
    head_office_id: z.number().int().positive(),
    office_name: z.string().min(1, 'Office name is required'),
    office_id: z.string().min(1, 'Office ID is required'),
    address: z.string().min(1),
    pincode: z.string().min(6).max(6),
    state: z.string().min(1),
    city: z.string().min(1),
    phone_number: z.string().min(10),
    mail_id: z.string().email(),
    office_incharge_name: z.string().optional().nullable(),
    office_incharge_phone_number: z.string().optional().nullable(),
    office_incharge_mail_id: z.string().email().optional().nullable(),
  })
  .openapi({
    required: [
      'company_id',
      'head_office_id',
      'office_name',
      'office_id',
      'address',
      'pincode',
      'state',
      'city',
      'phone_number',
      'mail_id',
    ],
    example: {
      company_id: 1,
      head_office_id: 1,
      office_name: 'Local Branch Office',
      office_id: 'BO-001',
      address: '456 Branch Road',
      pincode: '110002',
      state: 'Delhi',
      city: 'Delhi',
      phone_number: '0111234567',
      mail_id: 'branch@logimetrix.com',
      office_incharge_name: 'Bob Wilson',
      office_incharge_phone_number: '9777766666',
      office_incharge_mail_id: 'bob@logimetrix.com',
    },
  });

export const updateBranchOfficeSchema = z
  .object({
    company_id: z.number().int().positive().optional(),
    head_office_id: z.number().int().positive().optional(),
    office_name: z.string().min(1).optional(),
    office_id: z.string().min(1).optional(),
    address: z.string().min(1).optional(),
    pincode: z.string().min(6).max(6).optional(),
    state: z.string().min(1).optional(),
    city: z.string().min(1).optional(),
    phone_number: z.string().min(10).optional(),
    mail_id: z.string().email().optional(),
    office_incharge_name: z.string().optional().nullable(),
    office_incharge_phone_number: z.string().optional().nullable(),
    office_incharge_mail_id: z.string().email().optional().nullable(),
  })
  .openapi({
    example: {
      office_name: 'Local Branch Office Updated',
      address: '789 New Branch Road',
    },
  });

export const branchOfficeResponseSchema = z
  .object({
    id: z.number(),
    company_id: z.number(),
    head_office_id: z.number(),
    office_name: z.string(),
    office_id: z.string(),
    address: z.string(),
    pincode: z.string(),
    state: z.string(),
    city: z.string(),
    phone_number: z.string(),
    mail_id: z.string(),
    office_incharge_name: z.string().nullable(),
    office_incharge_phone_number: z.string().nullable(),
    office_incharge_mail_id: z.string().nullable(),
    created_at: z.string().datetime(),
    updated_at: z.string().datetime(),
  })
  .openapi({
    example: {
      id: 1,
      company_id: 1,
      head_office_id: 1,
      office_name: 'Local Branch Office',
      office_id: 'BO-001',
      address: '456 Branch Road',
      pincode: '110002',
      state: 'Delhi',
      city: 'Delhi',
      phone_number: '0111234567',
      mail_id: 'branch@logimetrix.com',
      office_incharge_name: 'Bob Wilson',
      office_incharge_phone_number: '9777766666',
      office_incharge_mail_id: 'bob@logimetrix.com',
      created_at: '2024-01-15T10:30:00.000Z',
      updated_at: '2024-01-15T10:30:00.000Z',
    },
  });

export type ICreateBranchOffice = z.infer<typeof createBranchOfficeSchema>;
export type IUpdateBranchOffice = z.infer<typeof updateBranchOfficeSchema>;
export type IBranchOfficeResponse = z.infer<typeof branchOfficeResponseSchema>;
