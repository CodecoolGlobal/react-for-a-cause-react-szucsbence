import React from 'react';
import { useState, useEffect, useRef } from 'react';


function Footer(props) {
  const thisYear = new Date().getFullYear() 

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