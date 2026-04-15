import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';
import { IUpdateBranchOffice } from '@schema/branchOffice';

export const updateBranchOffice = async (id: number, body: IUpdateBranchOffice) => {
  // Check if branch office exists
  const existingBranchOffice = await prisma.branchOffice.findUnique({
    where: { id },
  });

  if (!existingBranchOffice) {
    throw new HTTPException(404, {
      message: 'Branch office not found',
    });
  }

  // Update branch office
  const branchOffice = await prisma.branchOffice.update({
    where: { id },
    data: body,
  });

  return branchOffice;
};
