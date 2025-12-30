import { OpenAPIHono } from '@hono/zod-openapi';
import MAIL from './mail/mail';
import USER from './user/user';
import FILE from './file/file';
import ROLE from './role/role';
import PERMISSION from './permission/permission';
import MODULE from './module/module';


import DEMO from './demo/demo';

const routes = new OpenAPIHono();

routes.route('/user', USER);
routes.route('/mail', MAIL);
// routes.route('/file', FILE);
routes.route('/role', ROLE);
routes.route('/permission', PERMISSION);
routes.route('/module', MODULE);
routes.route('/demo', DEMO);
export default routes;
