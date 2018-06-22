/* eslint-disable global-require */

const config = () => {
  switch (process.argv[2]) {
    case 'dev':
      return require('../server_config/config.dev.json');
    case 'test':
      return require('../server_config/config.test.json');
    case 'prod':
      return require('../server_config/config.prod.json');
    default:
      break;
  }
  return new Error('Couldn\'t load config file');
};

/* eslint-enable global-require */

export default config();
