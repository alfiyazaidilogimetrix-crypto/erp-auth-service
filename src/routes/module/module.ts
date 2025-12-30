import { OpenAPIHono } from '@hono/zod-openapi';
import {
  createModuleDoc,
  getModulesDoc,
  getModuleByIdDoc,
  updateModuleDoc,
  deleteModuleDoc,
} from '@swagger/module';
import { createModule } from '@controller/module/create';
import { getModules, getModuleById } from '@controller/module/getAll';
import { updateModule } from '@controller/module/update';
import { deleteModule } from '@controller/module/delete';
import { ICreateModule, IUpdateModule } from '@schema/role';

const module = new OpenAPIHono();

// Create a new module
module.openapi(createModuleDoc, async (c) => {
  const body: ICreateModule = await c.req.json();
  const moduleData = await createModule(body);
  return c.json({
    status: 201,
    message: 'Module created successfully',
    module: moduleData,
  });
});

// Get all modules with pagination
module.openapi(getModulesDoc, async (c) => {
  const { page = '1', limit = '10' } = c.req.query();
  const result = await getModules(Number(page), Number(limit));
  return c.json({
    status: 200,
    message: 'Successfully retrieved modules',
    ...result,
  });
});

// Get module by ID
module.openapi(getModuleByIdDoc, async (c) => {
  const { id } = c.req.param();
  const moduleData = await getModuleById(parseInt(id));
  return c.json({
    status: 200,
    message: 'Successfully retrieved module',
    module: moduleData,
  });
});

// Update module
module.openapi(updateModuleDoc, async (c) => {
  const { id } = c.req.param();
  const body: IUpdateModule = await c.req.json();
  const moduleData = await updateModule(parseInt(id), body);
  return c.json({
    status: 200,
    message: 'Module updated successfully',
    module: moduleData,
  });
});

// Delete module
module.openapi(deleteModuleDoc, async (c) => {
  const { id } = c.req.param();
  await deleteModule(parseInt(id));
  return c.json({
    status: 200,
    message: 'Module deleted successfully',
  });
});

export default module;
