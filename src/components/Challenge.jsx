import React from 'react';


function Challenge(props) {
  const logo = props.logo;

  let content = 
    <div className="row m-0 p-0 challenge">
      <hr className="separator" />
      <div className="col-12 text-center">
        <h3>
          Because always have a problem
        </h3>
      </div>
      <div className="col-12 text-center">
        <h2>Our challenges</h2>
      </div>

      

      <div className="col-12">
        <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/code.jpg" className="d-block w-100" />
            </div>
            
            <div className="carousel-item">
              <img src="/code1.jpg" className="d-block w-100" />
            </div>

            <div className="carousel-item">
              <img src="/code2.jpg" className="d-block w-100" />
            </div>
          </div>
          
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>  



    </div>;

  return content;
}

export default Challenge;