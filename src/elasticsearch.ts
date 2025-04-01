import { Client } from '@elastic/elasticsearch';
import { ClusterHealthHealthResponseBody } from '@elastic/elasticsearch/lib/api/types';
import { config } from '@chat/config';
import { winstonLogger } from '@sumaniac28/gigglobal-helper-v1';
import { Logger } from 'winston';

const log: Logger = winstonLogger(
  `${config.ELASTIC_SEARCH_URL}`,
  'chatElasticSearchServer',
  'debug',
  `${config.KIBANA_DASH_USERNAME}`,
  `${config.KIBANA_DASH_PASSWORD}`
);

const elasticSearchClient = new Client({
  node: `${config.ELASTIC_SEARCH_URL}`,
  auth: {
    username: config.KIBANA_DASH_USERNAME || '',
    password: config.KIBANA_DASH_PASSWORD || ''
  }
});

const checkConnection = async (): Promise<void> => {
  let isConnected = false;
  while (!isConnected) {
    log.info('Checking connecting to elasticsearch...');
    try {
      const health: ClusterHealthHealthResponseBody = await elasticSearchClient.cluster.health({});
      log.info(`ChatService Elasticsearch  health status - ${health.status}`);
      isConnected = true;
    } catch (error) {
      log.error('Connection to elasticsearch failed. Retrying....');
      log.log('error', 'ChatService checkConnection() method: ', error);
    }
  }
};

export { checkConnection };
