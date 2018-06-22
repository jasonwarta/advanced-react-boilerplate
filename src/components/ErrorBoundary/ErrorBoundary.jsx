import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      info: null,
    };
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
      error,
      info,
    });
    console.log(error, info); // eslint-disable-line no-console
  }

  render() {
    const {
      hasError,
      error,
      info,
    } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <Fragment>
          <h1>
            Something when wrong
          </h1>
          <h3>
            Error
          </h3>
          <code>
            {JSON.stringify(JSON.parse(error), null, 2)}
          </code>
          <h3>
            Info
          </h3>
          <code>
            {JSON.stringify(JSON.parse(info), null, 2)}
          </code>
        </Fragment>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

ErrorBoundary.displayName = 'ErrorBoundary';

export default ErrorBoundary;
