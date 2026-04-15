import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';

export const deleteCompany = async (id: number) => {
  // Check if company exists
  const company = await prisma.company.findUnique({
    where: { id },
  });

  if (!company) {
    throw new HTTPException(404, {
      message: 'Company not found',
    });
  }

  // Delete company (cascades to owner details if configured, but let's be explicit if needed)
  await prisma.company.delete({
    where: { id },
  });

  if (company.owner_id) {
    await prisma.owner_details.delete({
      where: { id: company.owner_id },
    });
  }

  return true;
};
