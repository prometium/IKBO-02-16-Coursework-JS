import React from 'react';
import PropTypes from 'prop-types';

import './button.css';

function Button({
                  component = 'button',
                  primary = false,
                  className,
                  ...rest
                }) {
  const Component = component;

  return (
    <Component
      className={`button ${primary ? 'button-primary ' : ''}${className}`}
      {...rest}/>
  );
}

Button.propTypes = {
  component: PropTypes.string,
  text: PropTypes.string,
  color: PropTypes.string,
  primary: PropTypes.bool,
  className: PropTypes.string
};

export default Button;
