import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';
import { ICreateCompany } from '@schema/company';

export const createCompany = async (body: ICreateCompany) => {
  const { ownerDetails, legal_proof, ...companyData } = body;

  // Check if company with same GST already exists
  const existingCompany = await prisma.company.findFirst({
    where: { company_gst_number: companyData.company_gst_number },
  });

  if (existingCompany) {
    throw new HTTPException(409, {
      message: 'Company with this GST number already exists',
    });
  }

  // Create company, owner details, and company files
  const company = await prisma.$transaction(async (tx) => {
    let ownerId = null;

    if (ownerDetails) {
      const owner = await tx.owner_details.create({
        data: {
          ...ownerDetails,
          dob: new Date(ownerDetails.dob),
        },
      });
      ownerId = owner.id;
    }

    const newCompany = await tx.company.create({
      data: {
        ...companyData,
        owner_id: ownerId,
      },
    });

    // Create company files if legal_proof is provided
    if (legal_proof && legal_proof.length > 0) {
      const fileOperations = legal_proof.flatMap((proof) =>
        proof.file_ids.map((file_id) => ({
          company_id: newCompany.id,
          file_id,
          file_type: proof.file_type,
        }))
      );

      if (fileOperations.length > 0) {
        await tx.company_files.createMany({
          data: fileOperations,
        });
      }
    }

    return await tx.company.findUnique({
      where: { id: newCompany.id },
      include: {
        ownerDetails: true,
        companyFiles: {
          include: {
            file: true,
          },
        },
      },
    });
  });

  return company;
};
