import React from 'react'

function Services() {
  return (
    <>
    {/*SERVICES*/}
    <section id="clinicalservices">
      <div className="container">
        <div className="row  mb-5">
          <div className="col-md-8 mx-auto text-center">
            <h6 className="text-primary">CLINICAL SERVICES</h6>
            <h1>Our Services</h1>
            <p>
              Hospital services make up the core of a hospital's offerings. They
              are often shaped by the needs or wishes of its major users to make
              the hospital a one-stop / core institution of its local community or
              medical network. At Med-Innov8, we provide basic services and
              personnel in departments of medicine and surgery—that cater for
              clinical specific diseases and conditions, as well as emergency
              services.
            </p>
          </div>
        </div>
        {/*Outpatient*/}
        <div className="row g-4">
          <div className="col-lg-4 col-sm-6">
            {" "}
            {/*On larger devices it'll cover 4 column spaces & on smaller 6 col. spaces*/}
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bxs-clinic" />
              </div>
              <h5 className="mt-4 mb-2">Inpatient &amp; Outpatient</h5>
              <p>
                Round the clock patient monitoring &amp; care.Open 24/7 for
                walk-ins, admission, room and ward inquiries, check-ups &amp; high
                critical care.
              </p>
            </div>
          </div>
          {/*Pharmacy*/}
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bxs-capsule" />
              </div>
              <h5 className="mt-4 mb-2">Pharmacy</h5>
              <p>
                Our pharmacy services are available to both inpatients and
                outpatients. 24/7 pharmacy services. Local and international
                prescriptions
              </p>
            </div>
          </div>
          {/*Accident & Emergency Services*/}
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bxs-ambulance" />
              </div>
              <h5 className="mt-4 mb-2">Accident &amp; Emergency Services</h5>
              <p>
                Fully equipped for medical accidents and emergency care, with
                ambulances &amp; staff to handle complex trauma cases.
              </p>
            </div>
          </div>
          {/*Antenatal & Gynaecology*/}
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bxs-donate-heart" />
              </div>
              <h5 className="mt-4 mb-2">Antenatal &amp; Gyneacology</h5>
              <p>
                Comprehensive care to mothers from conception, to pregnancy &amp;
                delivery plus postnatal. Reproductive health. Family planning
                services.
              </p>
            </div>
          </div>
          {/*Laboratory*/}
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bx-test-tube" />
              </div>
              <h5 className="mt-4 mb-2">Laboratory</h5>
              <p>
                We have one of the best equipped and staffed laboratories,
                offering the most specialized tests. Daily internal quality
                controls run to ensure quality of the reports.
              </p>
            </div>
          </div>
          {/*Radiology*/}
          <div className="col-lg-4 col-sm-6">
            <div className="service card-effect">
              <div className="iconbox">
                <i className="bx bxs-dryer" />
              </div>
              <h5 className="mt-4 mb-2">Radiology</h5>
              <p>
                Ultrasound. Magnetic Resonance Imaging(MRI). Breast Imaging.
                General Radiography (x-ray) and Fluoroscopy. Interventional
                Radiology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*SERVICES ENDS HERE*/}
  </>
  
  )
}

export default Services