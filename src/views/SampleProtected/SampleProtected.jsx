import React from 'react';

import ErrorBoundary from '~/components/ErrorBoundary';

class SampleProtected extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <ErrorBoundary>
        Sample Protected Component
      </ErrorBoundary>
    );
  }
}

SampleProtected.displayName = 'SampleProtected';

export default SampleProtected;
