import React from 'react'
import "../Style/About.css"
import downloadCV from "../assets/other/download.svg";
import downloadBG from "../assets/images/download-cv.png";
import { Link } from 'react-router-dom';
import himaniAbout from "../assets/images/himani-about.jpeg";
import htmlIcon from '../assets/skills/html.svg';
import cssIcon from '../assets/skills/css.svg';
import tailwindIcon from '../assets/skills/tailwind.svg';
import javascriptIcon from '../assets/skills/javascript.svg';
import reactIcon from '../assets/skills/react.svg';
import reduxIcon from '../assets/skills/redux.svg';
import nodeIcon from '../assets/skills/node.svg';
import nextIcon from '../assets/skills/nextjs.svg';
import expressIcon from '../assets/skills/express.svg';
import phpIcon from '../assets/skills/php.svg';
import mongoIcon from '../assets/skills/mongo.svg';
import sqlIcon from '../assets/skills/mysql.svg';
import cIcon from '../assets/skills/c.svg';
import cplusIcon from '../assets/skills/cplus.svg';
import csharpIcon from '../assets/skills/csharp.svg';
import javaIcon from '../assets/skills/java.svg';
import gitIcon from '../assets/skills/git.svg';
import githubIcon from '../assets/skills/github.svg';


import Education1 from "../assets/images/conestoga.png";
import Education2 from "../assets/images/kadi.png";
import Certificate from "../assets/images/certificate.svg";
import Graduation from "../assets/images/graduation1.png";

const About = () => {
  return (
    <div>
      <section className="about" id="about">
        <div className="about-left">

            <img className='aboutImg' src={himaniAbout} alt="" />
            <div className="about-icons">
              <div className="square1"></div>
              <div className="square2"></div>
              <div className="square3"></div>
              <div className="downloadBG-wrapper">
                <img src={downloadBG} alt="" className='downloadBG' />
                <a href="">
                  <img src={downloadCV} alt="" className='downloadCV' />
                </a>
              </div>

            </div>
          

        </div>

        <div className="about-right">
          <p className='title'>About Me</p>
          <h1>I Develop System that Works</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, veniam vitae, qui magnam, recusandae corrupti nesciunt officia tempora dolorum consequuntur nulla voluptatum facilis repellat minus modi deserunt blanditiis fuga cumque?</p>

        </div>
      </section>




      {/* <section id="education" className="education">

        <div className="education-left">
          <img src={Graduation} alt="" />
        </div>

        <div className="education-right">
          <h1>Education</h1>
          <div className="education-container">
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
      </section> */}

    </div>
  )
}

export default About
