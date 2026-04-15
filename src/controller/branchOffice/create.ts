import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';
import { ICreateBranchOffice } from '@schema/branchOffice';

export const createBranchOffice = async (body: ICreateBranchOffice) => {
  // Check if company exists
  const company = await prisma.company.findUnique({
    where: { id: body.company_id },
  });

  if (!company) {
    throw new HTTPException(404, {
      message: 'Company not found',
    });
  }

  // Check if head office exists
  const headOffice = await prisma.headOffice.findUnique({
    where: { id: body.head_office_id },
  });

  if (!headOffice) {
    throw new HTTPException(404, {
      message: 'Head office not found',
    });
  }

  // Create branch office
  const branchOffice = await prisma.branchOffice.create({
    data: body,
  });

  return branchOffice;
};
