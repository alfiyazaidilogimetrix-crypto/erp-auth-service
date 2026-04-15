import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';

export const deleteHeadOffice = async (id: number) => {
  // Check if head office exists
  const headOffice = await prisma.headOffice.findUnique({
    where: { id },
  });

  if (!headOffice) {
    throw new HTTPException(404, {
      message: 'Head office not found',
    });
  }

  // Delete head office
  await prisma.headOffice.delete({
    where: { id },
  });

  return true;
};
