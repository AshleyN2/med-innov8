import React from 'react'

function About() {
  return (
    <>
  {/*ABOUT US*/}
  <section className="row w-100 py-0 bg-light" id="aboutus">
    <div className="col-lg-6 col-img" />
    <div className="col-lg-6 py-5 ">
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h6 className="text-primary">
              Want excellent healthcare services?
            </h6>
            <h1>Experience is your best bet</h1>
            <p>
              Hospital services make up the core of a hospital's offerings. They
              are often shaped by the needs or wishes of its major users to make
              the hospital a one-stop / core institution of its local community
              or medical network. At Med-Innov8, we provide basic services and
              personnel in departments of medicine and surgery—that cater for
              clinical specific diseases and conditions, as well as emergency
              services.
            </p>
            <div className="about d-flex mt-5">
              <div className="iconbox me-3">
                <i className="bx bxs-user-plus" />
              </div>
              <div>
                <h5>Personalized Service</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore suscipit blanditiis.
                </p>
              </div>
            </div>
            <div className="about d-flex mt-2">
              <div className="iconbox me-3">
                <i className="bx bx-calendar-star" />
              </div>
              <div>
                <h5>Ease of Access</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore suscipit blanditiis.
                </p>
              </div>
            </div>
            <div className="about d-flex mt-2">
              <div className="iconbox me-3">
                <i className="bx bx-globe" />
              </div>
              <div>
                <h5>World-class Healthcare </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Labore suscipit blanditiis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*ABOUT US ENDS HERE*/}
</>

  )
}

export default About