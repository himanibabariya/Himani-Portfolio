import React from 'react'
import java from "../../assets/technologies/java.svg"
import android from "../../assets/technologies/android.svg"
import firebase from "../../assets/technologies/firebase.svg"
import api from "../../assets/technologies/api.svg"
import star from "../../assets/other/star.svg"
import mobile from "../../assets/images/phone.webp";
import eventBuzz from "../../assets/videos/EventBuzz.png"


const AndroidProjects = () => {
  return (
    <div>
      <div className="project-container">
        <div className="left">
          <p className='title'>Project Name:</p>
          <p className='project-name'>EventSBuzz</p>

          <div className="phone">
            <img src={mobile} alt="" className='phoneImg' />
            <img src={eventBuzz} alt="" className='phoneVideo-projectImg' />
          </div>

          <div className="tech-section">
            <p>Technologies used :</p>
            <div className="technologies">
              <img src={android} alt="" />
              <p>Android</p>
              <img src={java} alt="" />
              <p>Java</p>
              <img src={firebase} alt="" />
              <p>Firebase</p>
              <img src={api} alt="" />
              <p>API</p>

            </div>
          </div>
        </div>
        <div className="right">
          <p className='des'>Description:</p>
          <p className='description'>"EventBuzz" is a feature-rich Android application developed in Java that enhances the event booking experience by offering special discounts based on the distance customers travel to the event location. Leveraging the power of Google API, the app accurately calculates discounts, rewarding users for their journey. EventBuzz includes essential features such as saving, sharing, and booking events, providing a streamlined and user-friendly interface for effortless event management. Firebase is integrated for secure and reliable data storage, ensuring that user information and event details are stored efficiently. </p>

          <div className="liveProject">
            <a href="https://github.com/himanibabariya/EventBuzz" target='_blank'><button className="btn-orange">Github</button></a>
            <a href="#"><button className="btn-blue">Live Demo</button></a>
          </div>


          <div className="concepts">
            <div className="item">
              <img src={star} alt="" />
              <p>High performance</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Secure authentication</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Seamless integration</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Dynamic</p>
            </div>
          </div>


        </div>
      </div>

      <hr />

    </div>
  )
}

export default AndroidProjects




