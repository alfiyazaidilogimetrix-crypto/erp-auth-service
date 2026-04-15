import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';

export const getBranchOffices = async (
  page: number = 1,
  limit: number = 10,
  company_id?: number,
  head_office_id?: number
) => {
  const skip = (page - 1) * limit;

  const where: any = {};
  if (company_id) where.company_id = company_id;
  if (head_office_id) where.head_office_id = head_office_id;

  const [branchOffices, total] = await Promise.all([
    prisma.branchOffice.findMany({
      where,
      skip,
      take: limit,
      include: {
        company: true,
        headOffice: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    }),
    prisma.branchOffice.count({ where }),
  ]);

  return {
    branchOffices,
    total,
    page,
    limit,
  };
};

export const getBranchOfficeById = async (id: number) => {
  const branchOffice = await prisma.branchOffice.findUnique({
    where: { id },
  });

  if (!branchOffice) {
    throw new HTTPException(404, {
      message: 'Branch office not found',
    });
  }

  return branchOffice;
};
