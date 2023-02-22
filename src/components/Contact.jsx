import React from 'react';


function Contact(props) {
  const logo = props.logo;

  let content = 
    <div className="row m-0 p-0 contact">
      <hr className="separator" />
      <div className="col-12 text-center">
        <h3>
          We want to hear from you
        </h3>
      </div>
      <div className="col-12 text-center">
        <h2>Contact us</h2>
      </div>
      <div className="col-3"></div>
      <div className="col-6">
        <div className="d-inline-block w-50 pe-1">
          <input type="text" name="fname" className="w-100" placeholder="First name" />
        </div>
        <div className="d-inline-block w-50 ps-1">
          <input type="text" name="lname" className="w-100" placeholder="Last name" />
        </div>
        <input type="email" name="email" className="w-100" placeholder="Email"/>
        <input type="text" name="subject" className="w-100" placeholder="Subject" />
        <textarea className="message" className="w-100" placeholder="Message" />
        <div className="button">SEND</div>
      </div>
      <div className="col-3"></div>
    </div>;

  return content;
}

export default Contact;