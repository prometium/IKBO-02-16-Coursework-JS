import React from 'react';
import Image from 'react-image-resizer';
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
    let memes = json['response']['items'];
    let mem = max_meme(memes);
    let tmp = mem['attachments'][0]['photo']['sizes'];
    console.log(tmp);
    return tmp[tmp.length-1]['url'];
}

const api = () =>
    fetchJsonp('https://api.vk.com/method/wall.get?access_token=abcabc1aabcabc1aabcabc1a39aba40940aabcaabcabc1af63747417444a9b169b5cad1&v=5.92&domain=ru9gag&count=100&offset=0')
        .then(response => response.json())
        .then(function (json) {
            return  log_json(json)
        });


function MemeComponent() {
    const [url, setUrl] = React.useState('https://img1.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg');

    React.useEffect(() => {
        api().then(meme_url =>{
            setUrl(meme_url)
        })
    }, []);

    return (
        <>
            <Image
                src={url}
                alt="9GAG HOTTEST MEME"
                height={900}
                width={600}
            />
        </>
    );
}

export default MemeComponent;