import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getContrast from 'src/utils/getContrast';

import './app-bar.css';

function AppBar({ title, color = '#424242', className = '', ...rest }) {
  return (
    <header
      className={['app-bar', className].join(' ')}
      style={{ backgroundColor: color, color: getContrast(color) }}
      {...rest}
    >
      <div className="app-bar__block">
        <Link to="/" className="app-bar__brand-link">
          IKBO-02-16-Coursework-JS
        </Link>
      </div>
      {title && (
        <div className="app-bar__block app-bar__title-block">
          <h1 className="app-bar__page-title">{title}</h1>
        </div>
      )}
    </header>
  );
}

AppBar.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string
};

export default AppBar;
