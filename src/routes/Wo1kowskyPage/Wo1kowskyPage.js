import AppBar from "src/components/AppBar";
import React from 'react';
import MemeComponent from "src/components/MemeComponent";
import Button from "src/components/Button";
import useMemeComponent from "src/components/MemeComponent/useMeme";

function Wo1kowskyPage() {
    const {open, openMeme, closeMeme} = useMemeComponent(true);

    return (
        <>
            <AppBar title="Волков" color='#ff69b4'/>
            <Button className="button-test" onClick={openMeme}>SHOW MEME</Button>
            <MemeComponent open={open} closeMeme={closeMeme}/>
        </>
    );
}

export default Wo1kowskyPage;