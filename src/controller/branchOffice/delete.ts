import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';

export const deleteBranchOffice = async (id: number) => {
  // Check if branch office exists
  const branchOffice = await prisma.branchOffice.findUnique({
    where: { id },
  });

  if (!branchOffice) {
    throw new HTTPException(404, {
      message: 'Branch office not found',
    });
  }

  // Delete branch office
  await prisma.branchOffice.delete({
    where: { id },
  });

  return true;
};
