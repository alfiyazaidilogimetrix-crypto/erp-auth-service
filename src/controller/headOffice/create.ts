import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';
import { ICreateHeadOffice } from '@schema/headOffice';

export const createHeadOffice = async (body: ICreateHeadOffice) => {
  // Check if company exists
  const company = await prisma.company.findUnique({
    where: { id: body.company_id },
  });

  if (!company) {
    throw new HTTPException(404, {
      message: 'Company not found',
    });
  }

  // Create head office
  const headOffice = await prisma.headOffice.create({
    data: body,
  });

  return headOffice;
};
