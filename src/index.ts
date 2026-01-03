import { logger } from 'hono/logger';
import { OpenAPIHono } from '@hono/zod-openapi';
import { Scalar } from '@scalar/hono-api-reference';
import { loadEnv } from './lib/env';
import { cors } from 'hono/cors';
export * from './middleware';
export * from './middleware/types';

import routes from './routes/routes';

const env = loadEnv();
const app = new OpenAPIHono();
app.use(
  '/api/*',
  cors({
    origin: [
      'http://localhost:5173',
      'https://m1qgkrd1-4242.inc1.devtunnels.ms',
      'https://hdw8jq12-5173.inc1.devtunnels.ms',
      'https://m1qgkrd1-4043.inc1.devtunnels.ms',
      'https://hdw8jq12-5173.inc1.devtunnels.ms',
      'http://192.168.1.18',
      'https://192.168.1.18',
    ],
    allowHeaders: ['Content-Type', 'Authorization'],
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    credentials: true,
  }),
);

app.use(logger());

app.get('/', (c) => {
  return c.text('Hello To Template API Documentation');
});

app.route('/api', routes);

app.onError((err, c) => {
  // Determine status code
  const statusCode = c.res?.status || 400;

  // Create error response object
  const errorResponse = {
    success: false,
    message: err.message || 'An error occurred',
    ...(process.env.NODE_ENV === 'development' && {
      stack: err.stack,
      details: err.cause,
    }),
  };

  return c.json(errorResponse, statusCode as 400);
});

app.doc('/doc', {
  info: {
    title: 'Template API',
    version: 'v1',
  },
  openapi: '3.1.0',
});
app.get('/docs', Scalar({ url: '/doc' }));

app.openAPIRegistry.registerComponent(
  'securitySchemes',
  'AuthorizationBearer', // <- Add security name
  {
    type: 'http',
    scheme: 'bearer',
    bearerFormat: 'JWT',
  },
);

export default {
  port: process.env.PORT || 3001,
  fetch: app.fetch,
};
