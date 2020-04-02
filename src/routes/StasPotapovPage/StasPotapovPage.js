import React from 'react';
import { Motion, spring } from 'react-motion';
import AppBar from 'src/components/AppBar';
import Button from 'src/components/Button';
import Spinner from 'src/components/Spinner';

import './StasPotapovPage.css';

function StasPotapovPage() {
  const [openX, setOpenX] = React.useState();
  const [openY, setOpenY] = React.useState();
  const [run, setRun] = React.useState(false);

  const handleMouseDownX = () => {
    setRun(true);
    setOpenX(!openX);
  };

  const handleMouseDownY = () => {
    setRun(true);
    setOpenY(!openY);
  };

  return (
    <>
      <AppBar title="Потапов" color="#1565c0" />
      <div className="potapov">
        <Spinner show={run} />
        <div className="potapov-buttons">
          <Button onMouseDown={handleMouseDownX} primary>
            {openX ? 'Влево' : 'Вправо'}
          </Button>
          <Button onMouseDown={handleMouseDownY} primary>
            {openY ? 'Вверх' : 'Вниз'}
          </Button>
        </div>
        <Motion
          onRest={() => {
            setRun(false);
          }}
          style={{ x: spring(openX ? 400 : 0), y: spring(openY ? 400 : 0) }}
        >
          {({ x, y }) => (
            <div className="potapov-demo">
              <div
                className="potapov-demo-block"
                style={{
                  WebkitTransform: `translate3d(${x}px, ${y}px, 0)`,
                  transform: `translate3d(${x}px, ${y}px, 0)`
                }}
              />
            </div>
          )}
        </Motion>
      </div>
    </>
  );
}

export default StasPotapovPage;
