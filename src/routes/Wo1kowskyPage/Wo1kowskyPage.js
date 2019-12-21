import AppBar from "../../components/AppBar";
import React from 'react';
import AutoFitImage from 'react-image-autofit-frame';
import Button from "../../components/Button";
import fetchJsonp from "fetch-jsonp";


function next_mem(memes, i) {
    let isSingle = false;
    while (!isSingle) {
        if (memes[i]['attachments'].length === 1) {
            isSingle = true;
            return i;
        }
        console.log(i);
        i += 1;
    }
}


function log_json(json) {
    let memes = json['response']['items'];
    let mem = memes[next_mem(memes, 0)];
    let tmp = mem['attachments'][0]['photo']['sizes'];
    console.log(tmp[tmp.length-1]['url']);
}


function Wo1kowskyPage() {

    let url = 'https://api.vk.com/method/wall.get?access_token=abcabc1aabcabc1aabcabc1a39aba40940aabcaabcabc1af63747417444a9b169b5cad1&v=5.92&domain=ru9gag&count=2&offset=0';
    fetchJsonp(url)
        .then(response => response.json())
        .then(function (json) {
            log_json(json)
        });

    return (
        <>
            <AppBar title="Волков" color='#ff69b4'/>
            <Button/>
            <AutoFitImage frameWidth="500px" frameHeight="400px"
                          imgSrc="https://img1.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg"
                          style={{/*..your style here..*/}}/>

        </>
    );
}

export default Wo1kowskyPage;