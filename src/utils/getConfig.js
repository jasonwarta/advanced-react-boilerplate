/* eslint-disable global-require */

const config = () => {
  if (window) {
    const hostname = window.location.hostname.split('.')[0];

    switch (hostname) {
      case 'admin':
        return require('../../config/config.prod.json');
      case 'admin-test':
        return require('../../config/config.test.json');
      case 'admin-dev':
        return require('../../config/config.dev.json');
      case 'localhost':
      {
        switch (window.location.port) {
          case '4002':
            return require('../../config/config.prod.json');
          case '4001':
            return require('../../config/config.test.json');
          case '4000':
          default:
            return require('../../config/config.dev.json');
        }
      }
      default:
        return require('../../config/config.dev.json');
    }
  }
  return new Error('Couldn\'t load config file');
};

/* eslint-enable global-require */

export default config();
