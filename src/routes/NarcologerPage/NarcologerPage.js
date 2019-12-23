import React, { useState, useEffect } from 'react';
import AppBar from 'src/components/AppBar';
import anime from 'animejs'
import {sum, tkaw, mult, div, fact} from "src/components/MathComponent/MathComponent";

import './NarcologerPage.css';

function NarcologerPage({ data }) {

    useEffect(() => {
        // тут можно писать код
        var a=sum(5,2); //
        console.log(a);
        var lineDrawing = anime({
            targets: '#lineDrawing .lines path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 3000,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: true
          });
    });

    return (
        // разметку внутри <>тут</>
        <>
        <AppBar title="Вельтищев" />
        <script src="https://static.codepen.io/assets/common/stopExecutionOnTimeout-de7e2ef6bfefd24b79a3f68b414b87b8db5b08439cac3f1012092b2290c719cd.js"></script>
        <script src="anime.min.js"></script>
        <script src="src/components/MathComponent"></script>
        <div id="lineDrawing">
        <svg viewBox="0 200 792 512">
        <g className="lines">
        <path className="my-path" d="M296.7,240.8l-11.4,92.1h-20.7l4.9-39.2h-33.2l-4.9,39.2h-20.7l11.4-92.1h20.7l-4.8,38.9h33.2l4.8-38.9H296.7z"
	    />
        <path className="my-path" d="M332.2,256.6l-2.7,22.2h26l-2,15.3h-25.9l-2.8,22.8h34.3l-2,15.9h-55l11.4-92.1h54.8l-2,15.9H332.2z"/>
        <path className="my-path" d="M423.3,316.4l-2,16.4h-51.6l11.4-92.1h20.6l-9.4,75.6H423.3z"/>
        <path className="my-path" d="M485.2,316.4l-2,16.4h-51.6l11.4-92.1h20.6l-9.4,75.6H485.2z"/>
        <path className="my-path" d="M580.2,280.9c0,19.5-10,38.7-27.8,47.6c-16.6,8.3-38.7,7.5-51.7-6.9c-13-14.5-12.6-37.5-4.3-54.2
	    c8.7-17.5,26.9-28.2,46.4-27.6c10.2,0.3,20.1,4.3,27,11.9C577,259.6,580.2,270.3,580.2,280.9z M559.1,281.4c0-11.3-5-23.5-17.6-25
	    c-11.6-1.4-21.5,5.5-26.1,15.9c-4.5,10.2-5.8,24.5-0.8,34.7c5.3,10.6,18.5,13.1,28.6,7.9C555.3,308.6,559.1,293.9,559.1,281.4z"/>
        </g>
</svg>
  </div>
        </>
    );
 }

 export default NarcologerPage;