import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import serverlessExpress from '@vendia/serverless-express';
import app from './app';
/**
 * Error Handler. Provides full stack
 */
if (process.env.NODE_ENV === 'development') {
  // app.use(errorHandler());
}

const handler = (event: APIGatewayProxyEvent, context: Context) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const serverless = serverlessExpress.createServer(app);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return serverlessExpress.proxy(serverless, event, context);
};

export default handler;
