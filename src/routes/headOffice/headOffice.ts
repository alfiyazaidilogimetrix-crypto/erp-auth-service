import { OpenAPIHono } from '@hono/zod-openapi';
import {
  createHeadOfficeDoc,
  getHeadOfficesDoc,
  getHeadOfficeByIdDoc,
  updateHeadOfficeDoc,
  deleteHeadOfficeDoc,
} from '@swagger/headOffice';
import {
  createHeadOffice,
  getHeadOffices,
  getHeadOfficeById,
  updateHeadOffice,
  deleteHeadOffice,
} from '@controller/headOffice';
import { ICreateHeadOffice, IUpdateHeadOffice } from '@schema/headOffice';

const headOffice = new OpenAPIHono();

// Create a new head office
headOffice.openapi(createHeadOfficeDoc, async (c) => {
  const body: ICreateHeadOffice = await c.req.json();
  const headOffice = await createHeadOffice(body);
  return c.json({
    status: 201,
    message: 'Head office created successfully',
    headOffice,
  });
});

// Get all head offices with pagination
headOffice.openapi(getHeadOfficesDoc, async (c) => {
  const { page = '1', limit = '10', company_id } = c.req.query();
  const result = await getHeadOffices(
    Number(page),
    Number(limit),
    company_id ? Number(company_id) : undefined
  );
  return c.json({
    status: 200,
    message: 'Successfully retrieved head offices',
    ...result,
  });
});

// Get head office by ID
headOffice.openapi(getHeadOfficeByIdDoc, async (c) => {
  const { id } = c.req.param();
  const headOffice = await getHeadOfficeById(parseInt(id));
  return c.json({
    status: 200,
    message: 'Successfully retrieved head office',
    headOffice,
  });
});

// Update head office
headOffice.openapi(updateHeadOfficeDoc, async (c) => {
  const { id } = c.req.param();
  const body: IUpdateHeadOffice = await c.req.json();
  const headOffice = await updateHeadOffice(parseInt(id), body);
  return c.json({
    status: 200,
    message: 'Head office updated successfully',
    headOffice,
  });
});

// Delete head office
headOffice.openapi(deleteHeadOfficeDoc, async (c) => {
  const { id } = c.req.param();
  await deleteHeadOffice(parseInt(id));
  return c.json({
    status: 200,
    message: 'Head office deleted successfully',
  });
});

export default headOffice;
