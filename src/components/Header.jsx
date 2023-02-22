import React from 'react';
import { useState, useEffect, useRef } from 'react';

function Header(props) {
  const [counter, setCounter] = useState(0);
  const videoRef = useRef();
  const blackbgRef = useRef();


  useEffect(() => {
    let timeOut = setTimeout(() => {
      HideVideo()
    }, 10700);

    return () => clearInterval(timeOut.current);
    });

  function HideVideo(){
    let video = videoRef.current;
    let blackbg = blackbgRef.current;

    video.className = "d-none"
    blackbg.classList.add("trans")
    }


  let content = 
    <div className="row m-0 p-0 header">
      <div className="col-12 m-0 p-0 video-container position-relative">

        <video playsInline autoPlay muted ref={videoRef}>
          <source src="/video.mp4" type="video/mp4" />
        </video>

        <div className="blackbg" ref={blackbgRef}></div>

        <div className="matrix"></div>

        <div>
          
        </div>

      </div>
    </div>;

  return content;
}

export default Header;