import { OpenAPIHono } from '@hono/zod-openapi';
import {
  createBranchOfficeDoc,
  getBranchOfficesDoc,
  getBranchOfficeByIdDoc,
  updateBranchOfficeDoc,
  deleteBranchOfficeDoc,
} from '@swagger/branchOffice';
import {
  createBranchOffice,
  getBranchOffices,
  getBranchOfficeById,
  updateBranchOffice,
  deleteBranchOffice,
} from '@controller/branchOffice';
import { ICreateBranchOffice, IUpdateBranchOffice } from '@schema/branchOffice';

const branchOffice = new OpenAPIHono();

// Create a new branch office
branchOffice.openapi(createBranchOfficeDoc, async (c) => {
  const body: ICreateBranchOffice = await c.req.json();
  const branchOffice = await createBranchOffice(body);
  return c.json({
    status: 201,
    message: 'Branch office created successfully',
    branchOffice,
  });
});

// Get all branch offices with pagination
branchOffice.openapi(getBranchOfficesDoc, async (c) => {
  const { page = '1', limit = '10', company_id, head_office_id } = c.req.query();
  const result = await getBranchOffices(
    Number(page),
    Number(limit),
    company_id ? Number(company_id) : undefined,
    head_office_id ? Number(head_office_id) : undefined
  );
  return c.json({
    status: 200,
    message: 'Successfully retrieved branch offices',
    ...result,
  });
});

// Get branch office by ID
branchOffice.openapi(getBranchOfficeByIdDoc, async (c) => {
  const { id } = c.req.param();
  const branchOffice = await getBranchOfficeById(parseInt(id));
  return c.json({
    status: 200,
    message: 'Successfully retrieved branch office',
    branchOffice,
  });
});

// Update branch office
branchOffice.openapi(updateBranchOfficeDoc, async (c) => {
  const { id } = c.req.param();
  const body: IUpdateBranchOffice = await c.req.json();
  const branchOffice = await updateBranchOffice(parseInt(id), body);
  return c.json({
    status: 200,
    message: 'Branch office updated successfully',
    branchOffice,
  });
});

// Delete branch office
branchOffice.openapi(deleteBranchOfficeDoc, async (c) => {
  const { id } = c.req.param();
  await deleteBranchOffice(parseInt(id));
  return c.json({
    status: 200,
    message: 'Branch office deleted successfully',
  });
});

export default branchOffice;
