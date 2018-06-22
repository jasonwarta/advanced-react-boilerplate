import React from 'react';
import PropTypes from 'prop-types';

import ErrorBoundary from '~/components/ErrorBoundary';

import formatDate from '~/utils/formatDate';

const FormattedDate = ({ date, format }) => (
  <ErrorBoundary>
    {`${formatDate(date, format) || date}`}
  </ErrorBoundary>
);

FormattedDate.defaultProps = {
  format: 'ddd, mmm d, h:MM TT',
};

FormattedDate.propTypes = {
  format: PropTypes.string,
  date: PropTypes.string.isRequired,
};

FormattedDate.displayName = 'FormattedDate';

export default FormattedDate;
