import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './app-bar.css';

function AppBar({ title, color = '#424242' }) {
  return (
    <header className="app-bar" style={{ backgroundColor: color }}>
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
  color: PropTypes.string
};

export default AppBar;
