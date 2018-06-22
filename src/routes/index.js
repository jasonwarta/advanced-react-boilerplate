import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { AuthConsumer } from '~/components/AuthContext';

import privateRoutes from './private';
import publicRoutes from './public';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ loggedIn }) => (
      <Route 
        {...rest}
        render={(props) => loggedIn
          ? <Component {...props} />
          : <Redirect to="/login" />
        }
      />
    )}
  </AuthConsumer>
);

export const routeConfig = [...privateRoutes, ...publicRoutes]

export default [
  ...privateRoutes.map(({path, component, key}) => (
    <ProtectedRoute exact path={path} component={component} key={key} />
  )),
  ...publicRoutes.map(({path, component, key}) => (
    <Route exact path={path} component={component} key={key} />
  ))
];
