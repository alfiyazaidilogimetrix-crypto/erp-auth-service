import { OpenAPIHono } from '@hono/zod-openapi';
import {
  createCompanyDoc,
  getCompaniesDoc,
  getCompanyByIdDoc,
  updateCompanyDoc,
  deleteCompanyDoc,
} from '@swagger/company';
import {
  createCompany,
  getCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany,
} from '@controller/company';
import { ICreateCompany, IUpdateCompany } from '@schema/company';

const company = new OpenAPIHono();

// Create a new company
company.openapi(createCompanyDoc, async (c) => {
  const body: ICreateCompany = await c.req.json();
  const company = await createCompany(body);
  return c.json({
    status: 201,
    message: 'Company created successfully',
    company,
  });
});

// Get all companies with pagination
company.openapi(getCompaniesDoc, async (c) => {
  const { page = '1', limit = '10' } = c.req.query();
  const result = await getCompanies(Number(page), Number(limit));
  return c.json({
    status: 200,
    message: 'Successfully retrieved companies',
    ...result,
  });
});

// Get company by ID
company.openapi(getCompanyByIdDoc, async (c) => {
  const { id } = c.req.param();
  const company = await getCompanyById(parseInt(id));
  return c.json({
    status: 200,
    message: 'Successfully retrieved company',
    company,
  });
});

// Update company
company.openapi(updateCompanyDoc, async (c) => {
  const { id } = c.req.param();
  const body: IUpdateCompany = await c.req.json();
  const company = await updateCompany(parseInt(id), body);
  return c.json({
    status: 200,
    message: 'Company updated successfully',
    company,
  });
});

// Delete company
company.openapi(deleteCompanyDoc, async (c) => {
  const { id } = c.req.param();
  await deleteCompany(parseInt(id));
  return c.json({
    status: 200,
    message: 'Company deleted successfully',
  });
});

export default company;
