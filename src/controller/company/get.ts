import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';

export const getCompanies = async (page: number = 1, limit: number = 10) => {
  const skip = (page - 1) * limit;

  const [companies, total] = await Promise.all([
    prisma.company.findMany({
      skip,
      take: limit,
      include: {
        ownerDetails: true,
        companyFiles: {
          include: {
            file: true,
          },
        },
      },
      orderBy: {
        created_at: 'desc',
      },
    }),
    prisma.company.count(),
  ]);

  return {
    companies,
    total,
    page,
    limit,
  };
};

export const getCompanyById = async (id: number) => {
  const company = await prisma.company.findUnique({
    where: { id },
    include: {
      ownerDetails: true,
      companyFiles: {
        include: {
          file: true,
        },
      },
    },
  });

  if (!company) {
    throw new HTTPException(404, {
      message: 'Company not found',
    });
  }

  return company;
};
