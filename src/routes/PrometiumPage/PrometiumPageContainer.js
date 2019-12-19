import React from 'react';
import PrometiumPage from './PrometiumPage';

const api = () =>
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .catch(error => {
      console.error(error);
      /*die*/
    });

function PrometiumPageContainer() {
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

  return <PrometiumPage data={data} />;
}

export default PrometiumPageContainer;
