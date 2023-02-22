import React, { useState, useRef } from 'react';

let Submitted = () => undefined
let fName 
let lName 
let email 
let subject 
let message 
function Contact(props) {
  const [formOrThankyou, setFormOrThankyou] = useState(true)
  fName = useRef()
  lName = useRef()
  email = useRef()
  subject = useRef()
  message = useRef()

   Submitted =(e) => {
  setFormOrThankyou(!formOrThankyou)
  const person = {
    "firstName": fName.current.value,
    "lastName": lName.current.value,
    "email": email.current.value,
    "subject": subject.current.value,
    "message": message.current.value
  }
  console.log(person);
  }

  let content = 
    <div className="row m-0 p-0 contact" id="contact">
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
      {formOrThankyou? Form() : Thankyou()}
      <div className="col-3"></div>
    </div>;

  return content;
}

  function Form(props){
    return <div className="col-6">
        <div className="d-inline-block w-50 pe-1">
          <input type="text" name="fname" className="w-100" placeholder="First name" ref={fName}/>
        </div>
        <div className="d-inline-block w-50 ps-1">
          <input type="text" name="lname" className="w-100" placeholder="Last name" ref={lName}/>
        </div>
        <input type="email" name="email" className="w-100" placeholder="Email" ref={email}/>
        <input type="text" name="subject" className="w-100" placeholder="Subject" ref={subject}/>
        <textarea className="message w-100" placeholder="Message" ref={message}/>
        <div className="button" onClick={Submitted}>SEND</div>
      </div>
  }

  function Thankyou(props){
  return  (<div className="col-6">
  <div className='thankYou text-center'>We appreciate you contacting us. One of our colleagues will get back in touch with you soon!
  <br />Have a great day!
  </div>
</div>)
  }

export default Contact;