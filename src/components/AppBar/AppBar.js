import React from 'react';
import PropTypes from 'prop-types';

import './app-bar.css';

function AppBar({ title, color = '#424242' }) {
  return (
    <header className="app-bar" style={{ backgroundColor: color }}>
      <div className="app-bar__block">
        <a href="/" className="app-bar__brand-link">
          IKBO-02-16-Coursework-JS
        </a>
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
