import { OpenAPIHono } from '@hono/zod-openapi';
import {
  createRoleDoc,
  getRolesDoc,
  getRoleByIdDoc,
  updateRoleDoc,
  deleteRoleDoc,
  assignRoleToUserDoc,
} from '@swagger/role';
import { createRole } from '@controller/role/create';
import { getRoles, getRoleById } from '@controller/role/getRoles';
import { updateRole } from '@controller/role/update';
import { deleteRole } from '@controller/role/delete';
import { IAssignRoleToUser, ICreateRole, IUpdateRole } from '@schema/role';
import { assignRoleToUser } from '@controller/role/create';

const role = new OpenAPIHono();

// Create a new role
role.openapi(createRoleDoc, async (c) => {
  const body: ICreateRole = await c.req.json();
  const role = await createRole(body);
  return c.json({
    status: 201,
    message: 'Role created successfully',
    role,
  });
});

// Get all roles with pagination
role.openapi(getRolesDoc, async (c) => {
  const { page = '1', limit = '10' } = c.req.query();
  const result = await getRoles(Number(page), Number(limit));
  return c.json({
    status: 200,
    message: 'Successfully retrieved roles',
    ...result,
  });
});

// Get role by ID
role.openapi(getRoleByIdDoc, async (c) => {
  const { id } = c.req.param();
  const role = await getRoleById(parseInt(id));
  return c.json({
    status: 200,
    message: 'Successfully retrieved role',
    role,
  });
});

// Update role
role.openapi(updateRoleDoc, async (c) => {
  const { id } = c.req.param();
  const body: IUpdateRole = await c.req.json();
  const role = await updateRole(parseInt(id), body);
  return c.json({
    status: 200,
    message: 'Role updated successfully',
    role,
  });
});

// Delete role
role.openapi(deleteRoleDoc, async (c) => {
  const { id } = c.req.param();
  await deleteRole(parseInt(id));
  return c.json({
    status: 200,
    message: 'Role deleted successfully',
  });
});

// Assign role to user
role.openapi(assignRoleToUserDoc, async (c) => {
  const body: IAssignRoleToUser = await c.req.json();
  const user = await assignRoleToUser(body);

  return c.json({
    status: 200,
    message: 'Role assigned to user successfully',
    user,
  });
});

export default role;
