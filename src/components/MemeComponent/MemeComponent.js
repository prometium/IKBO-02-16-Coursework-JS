import React from 'react';
import Image from 'react-image-resizer';
import fetchJsonp from "fetch-jsonp";
import PropTypes from 'prop-types';
import "./meme-component.css";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

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
    return tmp[tmp.length - 1]['url'];
}

const api = () =>
    fetchJsonp('https://api.vk.com/method/wall.get?access_token=abcabc1aabcabc1aabcabc1a39aba40940aabcaabcabc1af63747417444a9b169b5cad1&v=5.92&domain=ru9gag&count=15&offset=0')
        .then(response => response.json())
        .then(function (json) {
            return log_json(json)
        });


function MemeComponent({open, closeMeme}) {
    const [url, setUrl] = React.useState('https://img1.looper.com/img/gallery/things-only-adults-notice-in-shrek/intro-1573597941.jpg');
    //const [isShown, setShown] = React.useState(true);

    React.useEffect(() => {
        api().then(meme_url => {
            setUrl(meme_url)
        })
    }, []);

    return (
        <div className="meme_div"
             onClick={closeMeme}
             style={{display: open ? 'flex' : 'none'}}>
            <div
                className="inner_div"
                onClick={event => {
                event.stopPropagation();
            }}>
                <Image
                    src={url}
                    alt="HOT MEME"
                    height={600}
                    width={600}
                />
            </div>
        </div>
    );
}

MemeComponent.propTypes = {
    open: PropTypes.bool,
    closeMeme: PropTypes.func,
};

export default MemeComponent;