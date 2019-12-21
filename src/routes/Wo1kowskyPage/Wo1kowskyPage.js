import AppBar from "../../components/AppBar";
import React from 'react';
import AutoFitImage from 'react-image-autofit-frame';
import Button from "../../components/Button";
import fetchJsonp from "fetch-jsonp";


function max_meme(memes) {
    let i = 0;
    let max = 0;
    let max_mem;
    while (i < memes.length) {
        if (memes[i]['attachments'] && memes[i]['attachments'].length === 1) {
            if (memes[i]['likes']['count'] > max) {
                max = memes[i]['likes']['count'];
                max_mem = memes[i];
            }
        }
        i += 1;
    }
    return max_mem;
}


function log_json(json) {
    //console.log(json);
    let memes = json['response']['items'];
    let mem = max_meme(memes);
    let tmp = mem['attachments'][0]['photo']['sizes'];
    return tmp[tmp.length-1]['url'];
}

const api = () =>
    fetchJsonp('https://api.vk.com/method/wall.get?access_token=abcabc1aabcabc1aabcabc1a39aba40940aabcaabcabc1af63747417444a9b169b5cad1&v=5.92&domain=ru9gag&count=10&offset=0')
        .then(response => response.json())
        .then(function (json) {
            return  log_json(json)
        });


function Wo1kowskyPage() {
    const [url, setUrl] = React.useState('https://img1.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg');

    React.useEffect(() => {
        api().then(meme_url =>{
            setUrl(meme_url)
        })
    }, []);

    /*let url = 'https://api.vk.com/method/wall.get?access_token=abcabc1aabcabc1aabcabc1a39aba40940aabcaabcabc1af63747417444a9b169b5cad1&v=5.92&domain=ru9gag&count=10&offset=0';
    fetchJsonp(url)
        .then(response => response.json())
        .then(function (json) {
            log_json(json)
        });
        */

    return (
        <>
            <AppBar title="Волков" color='#ff69b4'/>
            <Button/>
            <AutoFitImage frameWidth="500px" frameHeight="400px"
                          imgSrc={url}
                          style={{/*..your style here..*/}}/>

        </>
    );
}

export default Wo1kowskyPage;