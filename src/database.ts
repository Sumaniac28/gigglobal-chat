import { winstonLogger } from '@sumaniac28/gigglobal-helper-v1';
import { Logger } from 'winston';
import { config } from '@chat/config';
import mongoose from 'mongoose';

const log: Logger = winstonLogger(
  `${config.ELASTIC_SEARCH_URL}`,
  'chatDatabase Server',
  'debug',
  `${config.KIBANA_DASH_USERNAME}`,
  `${config.KIBANA_DASH_PASSWORD}`
);

const databaseConnection = async (): Promise<void> => {
  try {
    await mongoose.connect(`${config.DATABASE_URL}`);
    log.info('Chat service successfully connected to the database');
  } catch (error) {
    log.log('error', 'Chat service databaseConnection() method error', error);
  }
};

export { databaseConnection };
