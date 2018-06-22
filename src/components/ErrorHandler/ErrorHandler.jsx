import React from 'react';

import { AuthTimeout } from '../AuthContext';

const ErrorHandler = ({ error }) => {
  const usableError = JSON.parse(JSON.stringify(error));
  if (usableError.networkError.statusCode === 401) {
    return <AuthTimeout />;
  }
  return (
    <p>
      {JSON.stringify(error)}
    </p>
  );
};

ErrorHandler.defaultProps = {
  error: null,
};

ErrorHandler.displayName = 'ErrorHandler';

export default ErrorHandler;
