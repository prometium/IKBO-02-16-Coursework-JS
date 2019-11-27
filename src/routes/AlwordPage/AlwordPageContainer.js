import React from 'react';
import AlwordPage from './AlwordPage';

function AlwordPageContainer() {
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

  return <AlwordPage data={data} />;
}

export default AlwordPageContainer;
