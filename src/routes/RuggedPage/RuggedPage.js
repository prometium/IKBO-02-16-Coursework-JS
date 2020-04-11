import React from 'react';
import {
  YMaps,
  Map,
  TrafficControl,
  ZoomControl,
  FullscreenControl,
  Placemark
} from 'react-yandex-maps';

import AppBar from 'src/components/AppBar';
import Button from 'src/components/Button';
import VKLabel from 'src/components/VKLabel/VKLabel';

import './rugged-page.css';

function RuggedPage() {
  const mapState = { center: [55.669705, 37.481081], zoom: 15, controls: [] };

  const [shown, setShown] = React.useState(true);
  const trafficState = React.useMemo(() => ({ trafficShown: shown }), [shown]);

  return (
    <>
      <AppBar title="Шумилов" color="primary" />

      <div className="rugged-container">
        <YMaps>
          <Map defaultState={mapState} className="rugged-map">
            <TrafficControl
              state={trafficState}
              onChange={event => {
                setShown(event.originalEvent.target.state._data.trafficShown);
              }}
            />
            <ZoomControl />
            <FullscreenControl />
            <Placemark
              modules={['geoObject.addon.balloon']}
              defaultGeometry={mapState.center}
              properties={{ balloonContentBody: 'РТУ-МИРЭА' }}
            />
          </Map>
        </YMaps>
      </div>
      <div className="rugged-buttons-container">
        <Button
          className="rugged-button"
          primary
          onClick={() => {
            setShown(!trafficState.trafficShown);
          }}
        >
          Переключить отображение пробок
        </Button>
      </div>
      <div
        style={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          margin: '10px'
        }}
      >
        <VKLabel to="shumilov_v" />
      </div>
    </>
  );
}

export default RuggedPage;
