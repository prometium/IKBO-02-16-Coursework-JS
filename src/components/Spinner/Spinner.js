import React from 'react';
import PropTypes from 'prop-types';

import './Spinner.css';

function Spinner({ show, className, ...rest }) {
  return (
    <div
      className={[`spinner${show ? ' spinner--show' : ''}`, className].join(
        ' '
      )}
      {...rest}
    />
  );
}

Spinner.propTypes = {
  show: PropTypes.bool,
  className: PropTypes.string
};

export default Spinner;
