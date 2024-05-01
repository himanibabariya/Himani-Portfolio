import React from 'react'
import Laptop from "../../assets/images/laptop.png";
import Project3 from "../../assets/videos/project3.png";
import star from "../../assets/other/star.svg"
import react from "../../assets/technologies/react.svg"
import tailwind from "../../assets/technologies/tailwind.svg"
import firebase from "../../assets/technologies/firebase.svg"


const WebProjects = () => {
  return (
    <div>
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
            <a href="#"><button className="btn-orange">Github</button></a>
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
              <p>Prototype</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Prototype</p>
            </div>
          </div>


        </div>
      </div>

      <hr />

    </div>
  )
}

export default WebProjects
