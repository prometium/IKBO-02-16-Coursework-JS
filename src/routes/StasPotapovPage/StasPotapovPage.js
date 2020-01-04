import React from 'react';
import { Motion, spring } from 'react-motion';
import AppBar from 'src/components/AppBar';
import Button from 'src/components/Button';
import Spinner from 'src/components/Spinner';

import './StasPotapovPage.css';

function StasPotapovPage() {
  const [openX, setOpenX] = React.useState();
  const [openY, setOpenY] = React.useState();

  const handleMouseDownX = () => {
    setOpenX(!openX);
  };

  const handleTouchStartX = e => {
    e.preventDefault();
    handleMouseDownX();
  };

  const handleMouseDownY = () => {
    setOpenY(!openY);
  };

  const handleTouchStartY = e => {
    e.preventDefault();
    handleMouseDownY();
  };

  return (
    <>
      <AppBar title="Потапов" color="#1565c0" />
      <div className="potapov">
        <div>
          <Spinner show={true} />
          <Button
            onMouseDown={handleMouseDownX}
            onTouchStart={handleTouchStartX}
            primary
          >
            {openX ? 'Влево' : 'Вправо'}
          </Button>
          <Button
            onMouseDown={handleMouseDownY}
            onTouchStart={handleTouchStartY}
            primary
          >
            {openY ? 'Вверх' : 'Вниз'}
          </Button>
        </div>
        <Motion
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
