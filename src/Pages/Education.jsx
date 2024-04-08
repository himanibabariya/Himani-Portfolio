import React from 'react'
import "../Style/Education.css"
import Education1 from "../assets/images/conestoga.png";
import Education2 from "../assets/images/kadi.png";
import Certificate from "../assets/images/certificate.svg";
import Graduation from "../assets/images/graduation1.png";

const Education = () => {
  return (
    <div>
      <section id="education" className="education">

        <div className="education-left">
          <img src={Graduation} alt="" />
        </div>

        <div className="education-right">
          <h1>Education</h1>
          <div class="education-container">
            <div className="education-box">
              <img src={Education1} alt="" />
              <div className="description">
                <div className="title">Conestoga College (2024)</div>
                <div className="course">Mobile Solutions Development</div>
                <div className="grades">3.8 GPA</div>
              </div>
            </div>
            <div className="education-box">
              <img src={Education2} alt="" />
              <div className="description">
                <div className="title">Kadi Serva Vishwavidyalaya (2021)</div>
                <div className="course">Bachelor of Computer Application</div>
                <div className="grades">9.8 CGPA</div>
              </div>
            </div>
          </div>

          <hr className="sepration" />

          <div className="certification">
            <h1>Certifications</h1>
            <div className="certification-container">
              <div className="certification-box">
                <img src={Certificate} alt="" />
                <div className="description">
                  <div className="title">Data Structures & Algorithms</div>
                </div>
              </div>

              <div className="certification-box">
                <img src={Certificate} alt="" />
                <div className="description">
                  <div className="title">Android Application Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Education
