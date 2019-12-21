import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import getContrast from 'src/utils/getContrast';

import './app-bar.css';

const getThemeColor = variant =>
  getComputedStyle(document.documentElement).getPropertyValue(
    `--color-${variant}`
  );

const colorPrimary = getThemeColor('primary');
const colorSecondary = getThemeColor('secondary');

const detectFinalColor = color => {
  switch (color) {
    case 'primary':
      return colorPrimary;
    case 'secondary':
      return colorSecondary;
    default:
      return color;
  }
};

function AppBar({ title, color = '#616161', className = '', ...rest }) {
  const finalColor = detectFinalColor(color);

  return (
    <header
      className={['app-bar', className].join(' ')}
      style={{
        backgroundColor: finalColor,
        color: getContrast(finalColor)
      }}
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

export default React.memo(AppBar);
