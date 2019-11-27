import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'src/components/AppBar';

import './Alword-page.css';

function AlwordPage({ data }) {
  return (
    <>
      <AppBar title="Слепушко" color="black" />

      <canvas className="Alword-container" id="canvas"></canvas>

    </>
  );
}

AlwordPage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default AlwordPage;
