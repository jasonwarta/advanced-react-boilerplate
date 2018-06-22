import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from 'apollo-boost';

import config from '~/utils/getConfig';
import {
  AUTH_TOKEN,
} from '~/constants';

const initClient = () => {
  const httpLink = new HttpLink(config.apolloSettings);
  const authLink = new ApolloLink((operation, forward) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (!!token) { // eslint-disable-line no-extra-boolean-cast
      operation.setContext({
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
    }
    return forward(operation);
  });

  const client = new ApolloClient({
    link: ApolloLink.from([
      authLink,
      httpLink,
    ]),
    cache: new InMemoryCache(),
  });

  return client;
};

export default initClient;
