import React, { useRef, useState, useEffect } from 'react'
import image from "./images/image.png"
import Loader from "./loader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faParachuteBox, faTrophy, faBookTanakh } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill1 } from '@fortawesome/free-regular-svg-icons'
import "./app.css"
import Tours from './tours'
const url = "https://course-api.com/react-tours-project"
const App = () => {
  const aboutSection = useRef(null);
  const [tours, setTour] = useState([])

  const [isloading, setisloading] = useState(true)
  const fetchTour = async () => {
    setisloading(true)
    const response = await fetch(url);
    const data = await response.json()
    setTour(data)
    setisloading(false)

  }
  useEffect(() => {
    fetchTour()
  }, []);
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth',
    });
  };
  if (isloading) {
    return <Loader />
  }
  return (
    <div>
      <div className="header">
        <div className="text">
          <h1>Discover unforgettable travel experiences
          </h1>

          <button onClick={() => scrollDown(aboutSection)}>Contact Us</button>
        </div>

        <img src={image} alt="" />
      </div>
      <div className="heading">


        <h2>Why book with Viator?</h2>
        <div className="procedure">
          <div className="steps">

            <FontAwesomeIcon icon={faMoneyBill1} className="highlight" />
            <h3>
              Ultimate flexibility
            </h3>
            <p>You’re in control, with free cancellation and payment options to satisfy any plan or budget.</p>
          </div>
          <div className="steps">
            <FontAwesomeIcon icon={faParachuteBox} className="highlight" />

            <h3>
              Memorable experiences
            </h3>
            <p>Browse and book tours and activities so incredible, you’ll want to tell your friends.</p>
          </div>
          <div className="steps">
            <FontAwesomeIcon icon={faBookTanakh} className="highlight" />
            <h3>
              Quality at our core
            </h3>
            <p>High quality standards. Millions of reviews. A Tripadvisor company.</p>
          </div>
          <div className="steps">
            <FontAwesomeIcon icon={faTrophy} className="highlight" />
            <h3>
              Award-winning support
            </h3>
            <p>New price? New plan? No problem. We’re here to help, 24/7.</p>
          </div>
        </div>
      </div>
      <div className="gallery">
        <h2 >Gallery</h2>
        <div className="tour">

          <Tours tours={tours} />
        </div>
        <div ref={aboutSection} ></div>

      </div>
    </div>
  )
}

export default App