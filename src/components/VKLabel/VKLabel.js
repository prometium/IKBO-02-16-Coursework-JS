import React from 'react';
import PropTypes from 'prop-types';

import './vklabel.css';

function VKLabel({ to = '/' }) {
  const Request = require('../VKLabel/vkapi').Request;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchJsonp = require('fetch-jsonp');
    Request(setData, to, fetchJsonp);
  }, [to]);

  return (
    <>
      <div className="information">
        <a
          href={'https://vk.com/id' + data.id}
          style={{ textDecoration: 'none', margin: '10px' }}
        >
          <div
            className="avatar"
            style={{ backgroundImage: 'url(' + data.photo_400_orig + ')' }}
            alt="avatar"
          />
        </a>
        <div className="name">{data.first_name + ' ' + data.last_name}</div>
        <div className="position">{data.status}</div>
      </div>
    </>
  );
}

VKLabel.propTypes = {
  to: PropTypes.string
};

export default VKLabel;
