import React from 'react';
import AlwordPage from './AlwordPage';

function AlwordPageContainer() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    
    var canvasElement = document.querySelector("#canvas");
    var ctx = canvasElement.getContext("2d");
    
    // Sides: a = 30   b = 30   c = 59

    canvasElement.width = window.innerWidth;
    canvasElement.height = window.innerHeight;

    var triangle = {
      x1: 30,
      y1: 0,
      x2: 0,
      y2: 59,
      x3: 30,
      y3: 59
    }

    ctx.strokeStyle = 'red';

    ctx.beginPath();
    ctx.moveTo(triangle.x1, triangle.y1);
    ctx.lineTo(triangle.x2, triangle.y2);
    ctx.lineTo(triangle.x3, triangle.y3);
    ctx.lineTo(triangle.x1, triangle.y1);
    ctx.closePath();
    ctx.stroke();

  }, []);

  return <AlwordPage data={data} />;
}

export default AlwordPageContainer;
