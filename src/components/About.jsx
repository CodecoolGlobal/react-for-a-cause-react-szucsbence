import React from 'react';


function About(props) {
 

  let content = 
    <div className="row m-0 about">
      <hr className="separator" />
      <div className="col-12 text-center">
        <h3>
          Our week...
        </h3>
      </div>
      <div className="col-12 text-center">
        <h2>The project</h2>
      </div>
      <div className="col-12">
      This week our task was to create a one page website to a non-governmental organization committed to a great cause.<br></br>
      What greater cause there is for four Codecoolers than inspiring the next generations to become programmers.<br></br>
      We would like to establish a network of free online coding clubs around the world for kids (age 6-18) where volunteers teach them to code, build apps, and more!
      <br></br>
      <br></br>
      Help us reach our goal by becoming one of our volunteers!
      <br></br>
      Contact us by message at the "Contact us" section at the bottom of this page!
      </div>
    </div>;

  return content;
}

export default About;