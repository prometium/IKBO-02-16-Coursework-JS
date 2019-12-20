import React from 'react';
import AppBar from 'src/components/AppBar';
import { useRef } from 'react'
import { useEffect } from 'react'
import { SketchPicker } from 'react-color'

import './Alword-page.css';


function AlwordPage() {
  const ref = useRef(null);
  const [data, setData] = React.useState({ background: '#fff', foreground: "#ff0000" });
  const handleBackGround = (color) => {
    setData({ background: color.hex });
  };
  const handleForeground = (color) => {
    setData({ foreground: color.hex });
  };

  useEffect(() => {
    console.table(ref.current);
    if (ref.current && ref.current.children.length == 0) {
      Process(ref);
    }
  });

  return (
    <>
      <AppBar title="Слепушко" />
      <div ref={ref} class="canvas" style={{ background: data.background }} />
      <div style={{float:"left"}}>
      <SketchPicker
        color={data.background}
        onChangeComplete={handleBackGround} />
      </div>
      
      <div style={{float:"right"}}>
        <SketchPicker
          color={data.foreground}
          onChangeComplete={handleForeground} />
      </div>
    </>
  );
}

export default AlwordPage;


var SPEED = 100;
function Process(ref) {

  var FPS = 60;

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

  var canvas, context;
  //var height = window.screen.height-164;
  console.table(document.documentElement);
  var height = document.documentElement.clientHeight - 64;
  var width = document.documentElement.clientWidth;
  var dots = [{
    x: 0,
    y: height
  }, {
    x: width / 2,
    y: 0
  }, {
    x: width,
    y: height
  }];
  var currentDot = { x: dots[0].x, y: dots[0].y }
  init();
  animate();

  function init() {

    canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    context = canvas.getContext('2d');
    context.fillStyle = 'rgb(0,0,0)';
    //context.fillRect(0, 0, width, height);
    ref.current.appendChild(canvas);
  }

  function animate() {

    requestAnimationFrame(animate);

    for (let i = 0; i < SPEED; i++) {
      draw();
    }

  }

  function draw() {

    var time = new Date().getTime() * 0.001;
    console.log(dots.length);
    let dot = dots[getRandomInt(0, dots.length - 1)];

    var x = currentDot.x + (dot.x - currentDot.x) / 2;
    var y = currentDot.y + (dot.y - currentDot.y) / 2;
    currentDot.x = x;
    currentDot.y = y;
    //context.fillStyle = 'rgb(245,245,245)';
    //context.fillRect( 0, 0, 255, 255 );

    context.fillStyle = 'rgb(255,0,0)';
    context.beginPath();
    context.arc(x, y, 1, 0, Math.PI * 2, true);
    context.closePath();
    context.fill();

  }

  // использование Math.round() даст неравномерное распределение!
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}