import { OpenAPIHono } from '@hono/zod-openapi';
import MAIL from './mail/mail';
import USER from './user/user';
// import FILE from './file/file';
import ROLE from './role/role';
import PERMISSION from './permission/permission';
import MODULE from './module/module';
import COMPANY from './company/company';
import HEADOFFICE from './headOffice/headOffice';
import BRANCHOFFICE from './branchOffice/branchOffice';


import DEMO from './demo/demo';

const routes = new OpenAPIHono();

routes.route('/user', USER);
routes.route('/mail', MAIL);
// routes.route('/file', FILE);
routes.route('/role', ROLE);
routes.route('/permission', PERMISSION);
routes.route('/module', MODULE);
routes.route('/company', COMPANY);
routes.route('/head-office', HEADOFFICE);
routes.route('/branch-office', BRANCHOFFICE);
routes.route('/demo', DEMO);
export default routes;
