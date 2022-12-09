import React from 'react'

function Contact() {
  return (
    <>
  {/*CONTACT US*/}
  <section id="contact">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md-8 mx-auto text-center">
          <h6 className="text-primary">Contact Us</h6>
          <h1>Get In Touch</h1>
        </div>
      </div>
      <form action="" className="row g-3 justify-content-center">
        <div className="col-md-5">
          <input type="text" className="form-control" placeholder="Full Name" />
        </div>
        <div className="col-md-5">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your E-mail Address"
          />
        </div>
        <div className="col-md-10">
          <input type="text" className="form-control" placeholder="Subject" />
        </div>
        <div className="col-md-10">
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            className="form-control"
            placeholder="Enter Message"
            defaultValue={""}
          />
        </div>
        <div className="col-md-10 d-grid mb-5">
          <button className="btn btn-primary">Send</button>
        </div>
      </form>
    </div>
  </section>
  {/*CONTACT US ENDS HERE*/}
</>

  )
}

export default Contact