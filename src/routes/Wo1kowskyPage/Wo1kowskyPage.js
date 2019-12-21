import AppBar from "src/components/AppBar";
import React from 'react';
import MemeComponent from "src/components/MemeComponent";
import Button from "src/components/Button";

function Wo1kowskyPage() {
    const [isShown, setShown] = React.useState(false);

    return (
        <>
            <AppBar title="Волков" color='#ff69b4'/>
            <Button className="button-test" onClick={() => setShown(!isShown)}>SHOW MEME</Button>
            <div style={{display: isShown ? 'block' : 'none'}}>
                <MemeComponent/>
            </div>
        </>
    );
}

export default Wo1kowskyPage;