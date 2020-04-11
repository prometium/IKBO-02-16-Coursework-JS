import React from 'react';
import AppBar from 'src/components/AppBar';
import './LulusuzakuPage.css';
import VKLabel from '../../components/VKLabel/VKLabel';
import '../../components/VKLabel/vklabel.css';
import MemeComponent from 'src/components/MemeComponent';
import useMeme from 'src/components/MemeComponent/useMeme';

function LulusuzakuPage() {
  const { open, closeMeme } = useMeme(true);

  const inputRef = React.useRef();
  const [input, setInput] = React.useState('1');
  const handleClick = () => {
    setInput(inputRef.current.value);
  };

  return (
    <div className="main">
      <AppBar title="Очеретная" />
      <MemeComponent open={open} closeMeme={closeMeme} />
      <div className="user-card">
        <div className="container">
          <div alt="cookies" className="hero-image" />
          <VKLabel to={input} />
          <div className="stats">
            <form
              onSubmit={event => {
                event.preventDefault();
                handleClick();
              }}
              style={{ margin: '15px' }}
            >
              <input
                style={{ width: '268px', textAlign: 'center' }}
                ref={inputRef}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LulusuzakuPage;
