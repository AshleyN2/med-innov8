import React from 'react'

function Hero() {
  return (
    <>
    {/*HERO*/}
    <div className="hero vh-100 d-flex align-items-center" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto text-center">
            <h1 className="display-4 text-black">
              Access healthcare services at ease.
            </h1>
            <p className="text-black my-3">
              Medical services &amp; expertise have never been this efficient!
              Providing world class healthcare with transparency. Be healthy, be
              happy.{" "}
            </p>
            <a href="#" className="btn me-3 btn-primary">
              Get Started
            </a>
            <a href="#" className="btn btn-outline-light">
              My Appointment
            </a>
          </div>
        </div>
      </div>
    </div>
    {/*HERO ENDS HERE*/}
  </>
  
  )
}

export default Hero