import React from 'react';

export default ({ seconds }) => {
  return (
    <div>
      {format(seconds)}
      <style jsx>{`
        div {
          padding: 15px;
          margin-left: 50px;
          display: inline-block;
          color: #82FA58;
          font: 50px menlo, monaco, monospace;
          background-color: #000;
        }
      `}</style>
    </div>
  )
}

const format = t => {
    var minutes = Math.floor((t / 60));
    if(minutes < 10){
        minutes = "0" + minutes;
    }
    var seconds = t % 60;
    if(seconds < 10){
        seconds = "0" + seconds;
    }
    return minutes + ':' + seconds;
};

