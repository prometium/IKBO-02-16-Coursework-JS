import React from 'react';
import PropTypes from 'prop-types';

import './Spinner.css';

function Spinner({ show, color = '#1565c0', className, ...rest }) {
  return (
    <div
      className={[`spinner${show ? ' spinner--show' : ''}`, className].join(
        ' '
      )}
      style={{ borderTopColor: color, borderLeftColor: color }}
      {...rest}
    />
  );
}

Spinner.propTypes = {
  show: PropTypes.bool,
  color: PropTypes.string,
  className: PropTypes.string
};

export default Spinner;
