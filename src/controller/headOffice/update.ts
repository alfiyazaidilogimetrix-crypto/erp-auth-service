import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';
import { IUpdateHeadOffice } from '@schema/headOffice';

export const updateHeadOffice = async (id: number, body: IUpdateHeadOffice) => {
  // Check if head office exists
  const existingHeadOffice = await prisma.headOffice.findUnique({
    where: { id },
  });

  if (!existingHeadOffice) {
    throw new HTTPException(404, {
      message: 'Head office not found',
    });
  }

  // Update head office
  const headOffice = await prisma.headOffice.update({
    where: { id },
    data: body,
  });

  return headOffice;
};
