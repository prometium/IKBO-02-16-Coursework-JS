import React from 'react';
import {YMaps, Map, TrafficControl, ZoomControl, FullscreenControl, Placemark} from 'react-yandex-maps';

import AppBar from 'src/components/AppBar';
import Button from 'src/components/Button';

import './rugged-page.css';

function RuggedPage() {
  const mapState = {center: [55.669705, 37.481081], zoom: 15, controls: []};

  const [shown, setShown] = React.useState(true);
  const trafficState = React.useMemo(() => ({trafficShown: shown, visible: shown}), [shown]);

  return (
    <>
      <AppBar title="Шумилов" color="#512da8"/>
      isTrafficShown
      <YMaps>
        <Map defaultState={mapState} className='rugged-map'>
          <TrafficControl state={trafficState}/>
          <ZoomControl/>
          <FullscreenControl/>
          <Placemark
            modules={['geoObject.addon.balloon']}
            defaultGeometry={mapState.center}
            properties={{balloonContentBody: 'РТУ-МИРЭА'}}
          />
        </Map>

      </YMaps>

      <Button className="button-test" primary onClick={() => {
        setShown(!trafficState.trafficShown)
      }}>Переключить отображение пробок</Button>
    </>
  );
}

export default RuggedPage;
