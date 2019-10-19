import React from 'react';
import PropTypes from 'prop-types';

import './nav-bar.css';

function NavBar({ title, color = '#4fc2f7' }) {
  return (
    <header className="nav-bar" style={{ backgroundColor: color }}>
      <div className="nav-bar__block">
        <a href="/" className="nav-bar__brand-link">
          IKBO-02-16-Coursework-JS
        </a>
      </div>
      <div className="nav-bar__block nav-bar__title-block">
        <h1 className="nav-bar__page-title">{title}</h1>
      </div>
    </header>
  );
}

NavBar.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string
};

export default NavBar;
