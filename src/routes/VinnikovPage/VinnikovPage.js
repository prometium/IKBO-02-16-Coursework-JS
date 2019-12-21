import React from 'react';
import PropTypes from 'prop-types';

import './VinnikovPage.css';

import AppBar from 'src/components/AppBar';

const color = '#253C65';

function VinnikovPage({ data }) {

    return (
        <>
            <AppBar title="Винников" color={color} />
        Hello world
        </>
      );

}
/*
VinnikovPage.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.exact({
        name: PropTypes.string.isRequired,
        value: PropTypes.number.isRequired
      }).isRequired
    ).isRequired
  };
*/
export default VinnikovPage;