import React from 'react';
import AppBar from 'src/components/AppBar';
import { useRef } from 'react'
import { useEffect } from 'react'
import { SketchPicker } from 'react-color'

import './Alword-page.css';




function AlwordPage() {
  const ref = useRef(null);
  const [data, setData] = React.useState({ background: '#fff', foreground: "#ff0000" });
  
  let FPS = 60; 
  let SPEED = 50;
  let height = document.documentElement.clientHeight - 64;
  let width = document.documentElement.clientWidth;
  let foreground = data.foreground;
  let background = data.background;
  const handleBackGround = (color) => {
    background = color.hex;
    setData({ background: background, foreground: foreground });
    updateBackground = true;
  };
  const handleForeground = (color) => {
    foreground = color.hex;
    setData({ background: background, foreground: foreground });
    updateBackground = true;
  };

  function Process(ref) {

    if (!window.requestAnimationFrame) {

      window.requestAnimationFrame = (function () {

        return window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function ( /* function FrameRequestCallback */ callback, /* DOMElement Element */ element) {
            window.setTimeout(callback, 1000 / FPS);
          };

      })();
    }

    let canvas, context;
    let dots = [{
      x: 0,
      y: height
    }, {
      x: width / 2,
      y: 0
    }, {
      x: width,
      y: height
    }];
    let currentDot = { x: dots[0].x, y: dots[0].y }
    init();
    animate();

    function init() {
      
      canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      context = canvas.getContext('2d');
      context.fillStyle = background;
      context.fillRect(0,0,width,height);
      ref.current.appendChild(canvas);
    }

    function animate() {

      requestAnimationFrame(animate);

      for (let i = 0; i < SPEED; i++) {
        draw();
      }

    }
    
    function draw() {

      let dot = dots[getRandomInt(0, dots.length - 1)];

      currentDot.x += (dot.x - currentDot.x) / 2;
      currentDot.y += (dot.y - currentDot.y) / 2;

      context.fillStyle = foreground;
      context.beginPath();
      context.arc(currentDot.x, currentDot.y, 1, 0, Math.PI * 2, true);
      context.closePath();
      context.fill();
    }

    // использование Math.round() даст неравномерное распределение!
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  }

  useEffect(() => {
    console.log("Effect")

    while (ref.current.firstChild) {
      ref.current.removeChild(ref.current.firstChild);
    }

    if (ref.current && ref.current.children.length == 0) {
      Process(ref);
    }
  });

  return (
    <>
      <AppBar title="Слепушко" />
      <div ref={ref} className="canvas"/>
      <div style={{ float: "left" }}>
        <SketchPicker
          color={data.background}
          onChangeComplete={handleBackGround} />
      </div>

      <div style={{ float: "right" }}>
        <SketchPicker
          color={data.foreground}
          onChangeComplete={handleForeground} />
      </div>
    </>
  );
}


export default AlwordPage;
