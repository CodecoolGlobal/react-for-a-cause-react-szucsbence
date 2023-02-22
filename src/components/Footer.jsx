import React from 'react';
import { useState, useEffect, useRef } from 'react';


function Footer(props) {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const today = props.today;
  const start = useRef();
  const thisYear = new Date().getFullYear() ;

  useEffect(() => {
    start.current = setInterval(() => {
      if(isActive == true){
        setIsActive(current => !current);
        }
    }, 2000);

    return () => clearInterval(start.current);
    });

  function HideFooter(){
    console.log(counter);
    setIsActive(current => !current);

    // if(counter < 2){
    //   setCounter(counter + 1)
    //   }
    }


  let content = 
    <div className="container footer">
      <div className="row m-0 p-0">
        <div className="col-12">
          &copy; {thisYear} - For a Good Cause
        </div>
      </div>
    </div>;

  return content;
}

export default Footer;