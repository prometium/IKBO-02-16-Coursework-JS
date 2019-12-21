import React from 'react';
import VinnikovPage from './VinnikovPage';

const api = () =>
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      /*die*/
    });

function VinnikovPageContainer() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    api().then(data => {
      setData(
        Object.values(data.Valute).map(({ CharCode, Value }) => ({
          name: CharCode,
          value: Value
        }))
      );
    });
  }, []);

  return <VinnikovPage data={data} />;
}

export default VinnikovPageContainer;