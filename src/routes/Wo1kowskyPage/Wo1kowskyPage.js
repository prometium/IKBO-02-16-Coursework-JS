import AppBar from "../../components/AppBar";
import React from 'react';
import MemeComponent from "../../components/MemeComponent";
import Button from "../../components/Button";

function Wo1kowskyPage() {
    const [isShown, setShown] = React.useState(false);

    React.useEffect(() => {

    }, []);

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