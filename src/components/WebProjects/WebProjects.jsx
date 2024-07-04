import React from 'react'
import Laptop from "../../assets/images/laptop.png";
import Project3 from "../../assets/videos/project3.png";
import VehicleLoanCalculator from "../../assets/videos/VehicleLoanCalculator.png"
import star from "../../assets/other/star.svg"
import react from "../../assets/technologies/react.svg"
import tailwind from "../../assets/technologies/tailwind.svg"
import firebase from "../../assets/technologies/firebase.svg"


const WebProjects = () => {
  return (
    <div>

      {/* Parcel Tracker Project  */}
      <div className="project-container">
        <div className="left">
          <p className='title'>Project Name:</p>
          <p className='project-name'>ParcelTracker</p>

          <div className="laptop">
            <img src={Laptop} alt="" className='img1' />
            <img src={Project3} alt="" className='projectImg' />
          </div>

          <div className="tech-section">
              <p>Technologies used :</p>
            <div className="technologies">
              <img src={react} alt="" />
              <p>React Js</p>
              <img src={tailwind} alt="" />
              <p>Tailwind</p>
              <img src={firebase} alt="" />
              <p>Firebase</p>

            </div>
          </div>
        </div>
        <div className="right">
          <p className='des'>Description:</p>
          <p className='description'>"ParcelTracker" is a sophisticated parcel management platform designed to redefine the tracking experience. It's a reflection of my unwavering commitment to elevating digital experiences, ensuring that every user interaction leaves an indelible mark of satisfaction and reliability. I've not only created a functional tool but a testament to my expertise in blending cutting-edge technology with user-centric design principles, ultimately shaping a digital experience that resonates long after the last delivery is received.</p>

          <div className="liveProject">
            <a href="https://github.com/himanibabariya/Parcel-Tracker" target='_blank'><button className="btn-orange">Github</button></a>
            <a href="#"><button className="btn-blue">Live Demo</button></a>
          </div>


          <div className="concepts">
            <div className="item">
              <img src={star} alt="" />
              <p>Prototype</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Design patterns</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Reliable</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Dynamic</p>
            </div>
          </div>


        </div>
      </div>

      <hr />

      {/* Vehicle Loan Calculator  */}
      <div className="project-container">
        <div className="left">
          <p className='title'>Project Name:</p>
          <p className='project-name'>VehicleLoanCalculator</p>

          <div className="laptop">
            <img src={Laptop} alt="" className='img1' />
            <img src={VehicleLoanCalculator} alt="" className='projectImg' />
          </div>

          <div className="tech-section">
              <p>Technologies used :</p>
            <div className="technologies">
              <img src={react} alt="" />
              <p>React Js</p>
              <img src={tailwind} alt="" />
              <p>Tailwind</p>

            </div>
          </div>
        </div>
        <div className="right">
          <p className='des'>Description:</p>
          <p className='description'>The "Vehicle Loan Calculator" is a web application built using React and Tailwind, designed to simplify the process of calculating loan payments for vehicles. It provides users with an intuitive interface to input loan details such as the Vehicle amount,Down Payment, interest rate, and loan term. The calculator then instantly generates the monthly payment amount, helping users make informed financial decisions and plan their budgets effectively.</p>

          <div className="liveProject">
            <a href="https://github.com/himanibabariya/Vehicle-Loan-Calculator" target='_blank'><button className="btn-orange">Github</button></a>
            <a href="https://vehicleloancalculator.netlify.app/" target='_blank'><button className="btn-blue">Live Demo</button></a>
          </div>


          <div className="concepts">
            <div className="item">
              <img src={star} alt="" />
              <p>User-friendly interface</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Real-time calculations</p>
            </div>
            
          </div>


        </div>
      </div>

      <hr />



    </div>
  )
}

export default WebProjects
