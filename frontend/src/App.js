import 'bootstrap/dist/css/bootstrap.css';
import "./App.css"
import React from "react";
import "./index.css";

export default function App() {
  return(
        <div id='body'>
            <Header/>
            <Card 
                className='section'
                img=''
                title='About'
                description='We offer healthcare digitalization solutions by seamlessly
                automating access to information by doctors & patients. Our vision is to have a transparent 
                healthcare system that provides patients with quality and time efficient services.'
            />

            <Card 
                className='section bg-grey'
                img='./Capture3.PNG' 
                title='Our Values'
                description='* Dignity
                * Trust'
            />

            <Card 
                className='section'
                img='./Capture1.PNG' 
                title='Our Mission' 
                description='To provide world class solutions that lead to accessibility of quality 
                medical services from any location.'
            />
            <ContactContainer/>
        </div>
    );
}

const Header = () =>{
    return(
        <div className='header'>
            <span className='header-title'>
                Med-Innov8
            </span>
            <br/>
            <span className="header-text">
                Your trusted healthcare system solution.
            </span>
        </div>
    );
}







const Card = (props) =>{
    return(
        <div className={props.className} >
            <div className="small-div">
                <i className={props.className}></i>
                <img src={props.img} alt=''/>
            </div>

            <div className="big-div">
                <span className='div-title'>
                    {props.title}
                </span>
                <br/>
                <span>
                    {props.description}
                </span>
            </div>
        </div>
    )
}



const ContactContainer = () => {
    return(
        <div className='contact-container bg-grey'>
            <span className="div-title">Contact us</span>
            <div className='contact-form'>
                <div id='sect1'>
                    <span>Contact us and we will get back to you within 24 hours.</span>
                    <span>
                        <i className="fas fa-map-marker-alt"></i>
                        Kampala Uganda
                    </span>
                    <span>
                        <i className="fas fa-mobile-alt"></i>
                        +256 778 800 900
                    </span>
                    <span>
                        <i className="far fa-envelope"></i>
                        company.gmail.com
                    </span>
                </div>
                    
                <div id='sect2'>
                    <span>
                        Contact
                    </span>

                    <input type="text" placeholder="email address" className="input-field"/>
                    <textarea name="" id="" cols="30" rows="10" placeholder="comment"></textarea>
                    <button className="contact-btn">Send</button>
                </div>
            </div>
        </div>
    );

}

/*
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Auth"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
*/

/*
function App() {
  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);

  return <h1>Hello from Med-Innov8!</h1>;
}

export default App;
*/