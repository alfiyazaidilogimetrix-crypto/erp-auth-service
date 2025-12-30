import { z } from '@hono/zod-openapi';

export const userPayloadSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string().email(),
  roleId: z.string().cuid().nullable().optional(),
  role: z
    .object({
      id: z.string().cuid(),
      name: z.string(),
      permissions: z.array(
        z.object({
          id: z.string().cuid(),
          action: z.array(z.string()),
          modules: z.array(
            z.object({
              id: z.string().cuid(),
              Name: z.string(),
            }),
          ),
        }),
      ),
    })
    .nullable()
    .optional(),
});

export type IUserPayload = z.infer<typeof userPayloadSchema>;
