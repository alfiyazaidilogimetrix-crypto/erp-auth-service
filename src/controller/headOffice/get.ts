import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';

export const getHeadOffices = async (
  page: number = 1,
  limit: number = 10,
  company_id?: number
) => {
  const skip = (page - 1) * limit;

  const where = company_id ? { company_id } : {};

  const [headOffices, total] = await Promise.all([
    prisma.headOffice.findMany({
      where,
      skip,
      take: limit,
      include: {
        company: true,
      },
      orderBy: {
        created_at: 'desc',
      },
    }),
    prisma.headOffice.count({ where }),
  ]);

  return {
    headOffices,
    total,
    page,
    limit,
  };
};

export const getHeadOfficeById = async (id: number) => {
  const headOffice = await prisma.headOffice.findUnique({
    where: { id },
  });

  if (!headOffice) {
    throw new HTTPException(404, {
      message: 'Head office not found',
    });
  }

  return headOffice;
};
