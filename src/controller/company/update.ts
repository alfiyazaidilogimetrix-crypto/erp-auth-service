import { HTTPException } from 'hono/http-exception';
import { prisma } from 'erp-shared-models';
import { IUpdateCompany } from '@schema/company';

export const updateCompany = async (id: number, body: IUpdateCompany) => {
  const { ownerDetails, legal_proof, ...companyData } = body;

  // Check if company exists
  const existingCompany = await prisma.company.findUnique({
    where: { id },
  });

  if (!existingCompany) {
    throw new HTTPException(404, {
      message: 'Company not found',
    });
  }

  // Update company, owner details, and company files
  const updatedCompany = await prisma.$transaction(async (tx) => {
    // 1. Update Owner Details
    if (ownerDetails && existingCompany.owner_id) {
      await tx.owner_details.update({
        where: { id: existingCompany.owner_id },
        data: {
          ...ownerDetails,
          dob: ownerDetails.dob ? new Date(ownerDetails.dob) : undefined,
        },
      });
    } else if (ownerDetails && !existingCompany.owner_id) {
      const newOwner = await tx.owner_details.create({
        data: {
          ...ownerDetails as any,
          dob: ownerDetails.dob ? new Date(ownerDetails.dob) : new Date(),
        },
      });
      await tx.company.update({
        where: { id },
        data: { owner_id: newOwner.id },
      });
    }

    // 2. Update Company Data
    await tx.company.update({
      where: { id },
      data: companyData,
    });

    // 3. Update Company Files (Legal Proof)
    if (legal_proof && legal_proof.length > 0) {
      for (const proof of legal_proof) {
        // Option A: Replace existing files of this type
        // Delete existing files for this specific type to sync with new ones
        await tx.company_files.deleteMany({
          where: {
            company_id: id,
            file_type: proof.file_type,
          },
        });

        // Create new records
        const fileOperations = proof.file_ids.map((file_id) => ({
          company_id: id,
          file_id,
          file_type: proof.file_type,
        }));

        if (fileOperations.length > 0) {
          await tx.company_files.createMany({
            data: fileOperations,
          });
        }
      }
    }

    return await tx.company.findUnique({
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
  });

  return updatedCompany;
};
