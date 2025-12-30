import { OpenAPIHono } from '@hono/zod-openapi';
import {
  createPermissionDoc,
  getPermissionsDoc,
  getPermissionByIdDoc,
  updatePermissionDoc,
  deletePermissionDoc,
} from '@swagger/permission';
import { createPermission } from '@controller/permission/create';
import {
  getPermissions,
  getPermissionById,
} from '@controller/permission/getAll';
import { updatePermission } from '@controller/permission/update';
import { deletePermission } from '@controller/permission/delete';
import { ICreatePermission, IUpdatePermission } from '@schema/role';

const permission = new OpenAPIHono();

// Create a new permission
permission.openapi(createPermissionDoc, async (c) => {
  const body: ICreatePermission = await c.req.json();
  const permission = await createPermission(body);
  return c.json({
    status: 201,
    message: 'Permission created successfully',
    permission,
  });
});

// Get all permissions with pagination
permission.openapi(getPermissionsDoc, async (c) => {
  const { page = '1', limit = '10', moduleId } = c.req.query();
  const result = await getPermissions(
    Number(page),
    Number(limit),
    parseInt(moduleId),
  );
  return c.json({
    status: 200,
    message: 'Successfully retrieved permissions',
    ...result,
  });
});

// Get permission by ID
permission.openapi(getPermissionByIdDoc, async (c) => {
  const { id } = c.req.param();
  const permission = await getPermissionById(parseInt(id));
  return c.json({
    status: 200,
    message: 'Successfully retrieved permission',
    permission,
  });
});

// Update permission
permission.openapi(updatePermissionDoc, async (c) => {
  const { id } = c.req.param();
  const body: IUpdatePermission = await c.req.json();
  const permission = await updatePermission(parseInt(id), body);
  return c.json({
    status: 200,
    message: 'Permission updated successfully',
    permission,
  });
});

// Delete permission
permission.openapi(deletePermissionDoc, async (c) => {
  const { id } = c.req.param();
  await deletePermission(parseInt(id));
  return c.json({
    status: 200,
    message: 'Permission deleted successfully',
  });
});

export default permission;
