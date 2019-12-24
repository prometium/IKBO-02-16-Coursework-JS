import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './vklabel.css';

function VKLabel({ title, primaryColor = '#424242', to = '/', text = "empty", fontSize = "40px", ...rest }) {

  const Request = require('../VKLabel/vkapi').Request;
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchJsonp = require('fetch-jsonp')
    Request(setData, to, fetchJsonp);
  }, [to]);

  return (

    <>
      <div className="information">
        <a href={"https://vk.com/id"+data.id} style={{ textDecoration: 'none', margin: "10px" }}>
          <img src={data.photo_400_orig} alt="avatar" className="avatar" />
        </a>
        <div className="name">{data.first_name + " " + data.last_name}</div>
        <div className="position">{data.status}</div>
      </div>
    </>
  );
}

VKLabel.propTypes = {
  title: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  to: PropTypes.string,
  fontSize: PropTypes.string
};

export default VKLabel;