import React from 'react'
import Laptop from "../../assets/images/laptop.png";
import Project3 from "../../assets/videos/project3.png";

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

          </div>
          <div className="right">
            <p className='des'>Description:</p>
            <p className='description'>"ParcelTracker" is a sophisticated parcel management platform designed to redefine the tracking experience. It's a reflection of my unwavering commitment to elevating digital experiences, ensuring that every user interaction leaves an indelible mark of satisfaction and reliability. I've not only created a functional tool but a testament to my expertise in blending cutting-edge technology with user-centric design principles, ultimately shaping a digital experience that resonates long after the last delivery is received.</p>

            <p className='technologies'>Technologies Used:</p>
            <div className="list-languages">
              <div className="language">HTML</div>
              <div className="language">CSS</div>
              <div className="language">React.js</div>
              <div className="language">Next.js</div>
              <div className="language">Firebase</div>
            </div>

            <a href="#"><button className="btn-orange">Github</button></a>
            <a href="#"><button className="btn-blue">Live Demo</button></a>
          </div>
        </div>

        <hr />

    </div>
  )
}

export default WebProjects
