import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';
import './LulusuzakuPage.css';
import VKLabel from '../../components/VKLabel/VKLabel';
import '../../components/VKLabel/vklabel.css';
function LulusuzakuPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        //alert("Hello from LulusuzakuPage")

    });


    const inputRef = React.useRef();
    const [input, setInput] = React.useState("1");
    const handleClick = () => {
        setInput(inputRef.current.value);
    };

    return (

        <div className="main" >
            <AppBar title="Очеретная" />
            <div className="user-card">
                <div className="container">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/cookies.jpg" alt="cookies" className="hero-image" />
                    <VKLabel to={input} />
                    <div className="stats">
                        <form onSubmit={event => { event.preventDefault(); handleClick() }} style={{ margin: "15px" }}>
                            <input style={{ width: "268px", textAlign: "center" }} ref={inputRef} />
                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default LulusuzakuPage;