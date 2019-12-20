import React from 'react';
import AppBar from 'src/components/AppBar';
import {useRef} from 'react'
import {useEffect} from 'react'


import './Alword-page.css';

function AlwordPage() {
  const ref = useRef(null);
  useEffect(() => {
    if(ref.current){
      Process(ref);
    }
  });
  return (
    <>
      <AppBar title="Слепушко" color="black" />
      <div ref={ref} />
    </>
  );
}

export default AlwordPage;


function Process(ref) {
  /**
   * Provides requestAnimationFrame in a cross browser way.
   * @author paulirish  http://paulirish.com/
   */
  var FPS = 120;

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


  // example code from mr doob : http://mrdoob.com/lab/javascript/requestanimationframe/

  var canvas, context;
  var height = 1024,
    width = 1024;
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
  var currentDot = { x: getRandomInt(0, width), y: getRandomInt(0, height) }
  init();
  animate();

  function init() {

    canvas = document.createElement('canvas');
    canvas.width = height;
    canvas.height = width;
    context = canvas.getContext('2d');
    context.fillStyle = 'rgb(0,0,0)';
    context.fillRect(0, 0, width, height);
    ref.current.appendChild(canvas);
  }

  function animate() {

    requestAnimationFrame(animate);
    draw();

  }

  function draw() {

    var time = new Date().getTime() * 0.001;
    //console.table(dots);
    let dot = dots[getRandomInt(0, 2)];

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