import React from 'react';


function Member(props) {

  let content = 
    <div className="row m-0 member" id="member">
      <div className="col-12 text-center">
        <h3>
          Who we are and what we do
        </h3>
      </div>
      <div className="col-12 text-center">
        <h2>Our Team of Experts</h2>
      </div>

      <div className="col-12 col-md-6 col-lg-3">
        <img src="/Bence.jpg" alt="" className="w-100" />
        <div className="name text-center">Bence Peter Szucs</div>
        <div className="role text-center">Catering and Hair Manager</div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <img src="/Eszter.jpg" alt="" className="w-100" />
        <div className="name text-center">Eszter Pinter</div>
        <div className="role text-center">CEO and Key Account- and Development- and Everything Manager</div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <img src="/Gyula.jpg" alt="" className="w-100" />
        <div className="name text-center">Gyula Pasztor</div>
        <div className="role text-center">Bootstrap Ninja</div>
      </div>
      <div className="col-12 col-md-6 col-lg-3">
        <img src="/Zsolt.jpg" alt="" className="w-100" />
        <div className="name text-center">Zsolt Szabo</div>
        <div className="role text-center">Marketing Wizard</div>
      </div>
    </div>;

  return content;
}

export default Member;