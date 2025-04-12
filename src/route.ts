import { Application } from 'express';
import { healthRoutes } from '@chat/routes/health';
import { messageRoutes } from '@chat/routes/message';
import { setJwtSecret, verifyGatewayRequest } from '@sumaniac28/gigglobal-helper-v1';
import { config } from '@chat/config';

const BASE_PATH = '/api/v1/message';

setJwtSecret(config.GATEWAY_JWT_TOKEN!);

const appRoutes = (app: Application): void => {
  app.use('', healthRoutes());
  app.use(BASE_PATH, verifyGatewayRequest, messageRoutes());
};

export { appRoutes };
