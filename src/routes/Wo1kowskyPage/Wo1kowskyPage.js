import AppBar from "../../components/AppBar";
import React from 'react';
import AutoFitImage from 'react-image-autofit-frame';



function Wo1kowskyPage() {

    let url = 'https://api.vk.com/method/wall.get?access_token=abcabc1aabcabc1aabcabc1a39aba40940aabcaabcabc1af63747417444a9b169b5cad1&v=5.92&domain=ru9gag&count=2&offset=0';
    fetch(url, {mode:'cors', headers:{'Access-Control-Allow-Origin':'*'}})
        .then(response => response.json())
        .then(json => console.log(json));


    return (
        <>
            <AppBar title="Волков" color='#ff69b4'/>
            <AutoFitImage frameWidth="500px" frameHeight="400px"
                          imgSrc="https://img1.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg" style={{/*..your style here..*/}}/>
        </>
    );
}

export default Wo1kowskyPage;