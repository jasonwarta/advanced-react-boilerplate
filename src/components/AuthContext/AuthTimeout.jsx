import React from 'react';
import { Redirect } from 'react-router-dom';

import { AuthConsumer } from './AuthContext';

const AuthTimeout = () => (
  <AuthConsumer>
    {({ logout }) => {
      logout();
      return <Redirect to='/login' />;
    }}
  </AuthConsumer>
);

export default AuthTimeout;
