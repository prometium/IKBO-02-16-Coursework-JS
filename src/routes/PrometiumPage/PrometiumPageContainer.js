import React from 'react';
import PrometiumPage from './PrometiumPage';

function PrometiumPageContainer() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(response => response.json())
      .then(data => {
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
