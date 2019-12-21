import React from 'react';
import PrometiumPage from './PrometiumPage';

const api = () =>
  fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    .then(response => response.json())
    .catch(error => {
      console.error(error);
    });

function PrometiumPageContainer() {
  const [data, setData] = React.useState([]);

  const handleClick = () => {
    api().then(data => {
      setData(
        Object.values(data.Valute).map(({ CharCode, Value }) => ({
          name: CharCode,
          value: Value
        }))
      );
    });
  };

  React.useEffect(() => {
    handleClick();
  }, []);

  return <PrometiumPage data={data} handleClick={handleClick} />;
}

export default PrometiumPageContainer;
