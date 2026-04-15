import { z } from '@hono/zod-openapi';

export const createHeadOfficeSchema = z
  .object({
    company_id: z.number().int().positive(),
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
      office_name: 'Main Head Office',
      office_id: 'HO-001',
      address: '123 Head Street',
      pincode: '110001',
      state: 'Delhi',
      city: 'Delhi',
      phone_number: '0119876543',
      mail_id: 'ho@logimetrix.com',
      office_incharge_name: 'Jane Smith',
      office_incharge_phone_number: '9888877777',
      office_incharge_mail_id: 'jane@logimetrix.com',
    },
  });

export const updateHeadOfficeSchema = z
  .object({
    company_id: z.number().int().positive().optional(),
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
      office_name: 'Main Head Office Updated',
      city: 'New Delhi',
    },
  });

export const headOfficeResponseSchema = z
  .object({
    id: z.number(),
    company_id: z.number(),
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
      office_name: 'Main Head Office',
      office_id: 'HO-001',
      address: '123 Head Street',
      pincode: '110001',
      state: 'Delhi',
      city: 'Delhi',
      phone_number: '0119876543',
      mail_id: 'ho@logimetrix.com',
      office_incharge_name: 'Jane Smith',
      office_incharge_phone_number: '9888877777',
      office_incharge_mail_id: 'jane@logimetrix.com',
      created_at: '2024-01-15T10:30:00.000Z',
      updated_at: '2024-01-15T10:30:00.000Z',
    },
  });

export type ICreateHeadOffice = z.infer<typeof createHeadOfficeSchema>;
export type IUpdateHeadOffice = z.infer<typeof updateHeadOfficeSchema>;
export type IHeadOfficeResponse = z.infer<typeof headOfficeResponseSchema>;
