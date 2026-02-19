import { prisma } from 'erp-shared-models';
import { IBulkCreateUser } from '@schema/user';
import { hashedPassword } from '@lib/tools';

export const bulkCreateUserFromExcel = async (body: IBulkCreateUser) => {
  const { users } = body;
  const results = [];
  const errors = [];

  // Get all roles once for faster lookup
  const roles = await prisma.role.findMany();
  const roleMap = new Map(roles.map((r) => [r.name.toLowerCase(), r.id]));

  for (let i = 0; i < users.length; i++) {
    const item = users[i];
    const username = item.username;
    const email = item.email.toLowerCase();
    const plainPassword = item.password;
    const mobileNumber = item['Mobile Number'];
    const roleName = item.Role;

    try {
      // Check if user already exists
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [{ email }, { name: username }],
        },
      });

      if (existingUser) {
        errors.push({
          row: i + 1,
          message: `User with email '${email}' or username '${username}' already exists`,
        });
        continue;
      }

      let roleId: number | null = null;
      if (roleName && roleName.toLowerCase() !== 'none') {
        const normalizedRoleName = roleName.trim();
        const roleKey = normalizedRoleName.toLowerCase();
        
        if (roleMap.has(roleKey)) {
          roleId = roleMap.get(roleKey)!;
        } else {
          // Create role if it doesn't exist
          const newRole = await prisma.role.create({
            data: {
              name: normalizedRoleName,
              description: `Auto-created from Excel upload`,
            },
          });
          roleId = newRole.id;
          roleMap.set(roleKey, roleId);
        }
      }

      const hash = await hashedPassword(plainPassword);

      const user = await prisma.user.create({
        data: {
          name: username,
          email,
          password: hash,
          original_password: plainPassword,
          mobileNumber: mobileNumber || null,
          roleId,
          emailVerified: true, // Bulk created users are usually pre-verified or don't need verification
        },
        include: {
          role: true,
        },
      });

      results.push(user);
    } catch (err: any) {
      errors.push({
        row: i + 1,
        message: err.message || 'Failed to create user',
      });
    }
  }

  return {
    success: results.length,
    failed: errors.length,
    data: results,
    errors,
  };
};
