import React, { useState } from 'react';
import AppBar from 'src/components/AppBar';
import VKLabel from 'src/components/VKLabel/VKLabel';

import './LegendCreoModPage.css';

function LegendCreoModPage() {
  const [price_RUB, setRUB] = useState(0);
  const [price_USD, setUSD] = useState(0);

  function get_price_BTC() {
    return fetch(
      'https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=RUB,USD' +
        '&api_key=bdd362c2665b6c176c6c2bc1dff122788cd34623869cf9d4df70ceed57fa42af'
    )
      .then(response => {
        if (response.ok) return response;
        else alert('Ошибка');
      })
      .then(response => {
        let json = response.json();
        if (json != undefined) {
          console.log(json);
          return json;
        } else {
          alert(response.statusText);
        }
      })
      .then(json => {
        return json;
      });
  }
  function OnClick() {
    get_price_BTC().then(json => {
      setRUB(json.RUB);
      setUSD(json.USD);
    });
  }
  return (
    <>
      <AppBar className="appbar" title="Иваненко" />
      <body>
        <div className="content">
          <p>USD: {price_USD}</p>
          <p>RUB: {price_RUB}</p>
          <button className="button" onClick={OnClick}>
            Получить данные о курсе биткоина
          </button>
        </div>
        <div className="vk">
          <VKLabel to="legendmod" />
        </div>
      </body>
    </>
  );
}

export default LegendCreoModPage;
