import React from 'react'
import { useNavigate} from 'react-router-dom'

const Navbar = ({ user, setUser }) => {
    const navigate = useNavigate()

  return (
    <>
    {/* NAVBAR */}
    <nav className="navbar navbar-expand-lg py-3 sticky-top navbar-light bg-white">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img className="logo" src="2logo.png" alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#clinicalservices">
                Clinical Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#aboutus">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#board">
                Management Board
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact Us
              </a>
            </li>
          </ul>
          <button className="btn btn-primary ms-lg-3">Book Appointment</button>
        </div>
      </div>
    </nav>{" "}
    {/* NAVBAR ENDS HERE */}
  </>
  )
}

    
export default Navbar