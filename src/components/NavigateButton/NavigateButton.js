import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './NavigateButton.css';

function NavigateButton({
  title,
  primaryColor = '#424242',
  to = '/',
  text = 'empty',
  fontSize = '40px',
  ...rest
}) {
  return (
    <Link to={to} style={{ textDecoration: 'none', margin: '10px' }}>
      <div className="cardContainer">
        <div className="cardHeader">
          <div className="cardIdentity">
            <div
              className="icon"
              style={{ backgroundColor: primaryColor }}
            ></div>
            <h4>{title}</h4>
          </div>
        </div>
        <div className="cardBody">
          <h1 style={{ fontSize }}>{text}</h1>
        </div>
      </div>
    </Link>
  );
}

NavigateButton.propTypes = {
  title: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  to: PropTypes.string,
  fontSize: PropTypes.string
};

export default NavigateButton;
