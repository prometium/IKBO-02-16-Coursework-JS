import AppBar from 'src/components/AppBar';
import React from 'react';
import MemeComponent from 'src/components/MemeComponent';
import Button from 'src/components/Button';
import useMemeComponent from 'src/components/MemeComponent/useMeme';
import './wo1kowsky-page.css';
import VKLabel from 'src/components/VKLabel/VKLabel';
function Wo1kowskyPage() {
  const { open, openMeme, closeMeme } = useMemeComponent(true);

  return (
    <>
      <AppBar title="Волков" color="#ff69b4" />
      <div className="button_div">
        <Button className="button-test" onClick={openMeme}>
          SHOW MEME
        </Button>
      </div>
      <MemeComponent open={open} closeMeme={closeMeme} />
      <div
        style={{
          position: 'absolute',
          right: '0',
          bottom: '0',
          margin: '10px'
        }}
      >
        <VKLabel to="yologuy" />
      </div>
    </>
  );
}

export default Wo1kowskyPage;
