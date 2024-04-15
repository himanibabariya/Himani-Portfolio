import React from 'react'
import "../Style/About.css"
import downloadCV from "../assets/other/download.svg";
import downloadBG from "../assets/images/download-cv.png";
import { Link } from 'react-router-dom';
import himaniAbout from "../assets/images/himani-about.jpeg";

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
              <a href="">
                <img src={downloadBG} alt="" className='downloadBG' />
                <img src={downloadCV} alt="" className='downloadCV' />
              </a>
            </div>

          </div>


        </div>

        <div className="about-right">
          <h1 className='title'>About Me</h1>
          <h2>I Develop System that Works</h2>
          <p>Welcome to my software engineering journey, where creativity meets technical mastery and innovation knows no bounds. I stand at the intersection of innovation and technical prowess. I excel in UI/UX design, web development, and the intricate workings of data structures and algorithms. With an unwavering commitment to perfection, I craft digital experiences that transcend functionality, ensuring every aspect captivates and engages users.</p><br />
          <p>In web development, i am proficient in both frontend and backend technologies. I leverage frameworks like React.js for dynamic user interfaces, while also commanding languages such as JavaScript, HTML, and CSS with finesse. On the backend, i navigate through databases effortlessly, utilizing technologies like Node.js, Express.js, and MongoDB to build robust server-side applications.</p>
        </div>
      </section>

      <section id="container" className="education-container">
        <div className="education">
          <h1><i className="fa-solid fa-graduation-cap"></i>Education</h1>
          <div className="content">
            <div className="education-left">
              <span className='dot'></span>
              <span className='line'></span>
            </div>
            <div className="education-right">
              <h1>Mobile Solutions Development - 3.8 GPA</h1>
              <p>Conestoga College</p>
              <p>May 2023 - Sep 2024</p>
              <p>This program equipped me with advanced skills in Android and iOS application development, along with a solid foundation in software engineering principles like data structures, algorithms, object-oriented programming, and database management systems.</p>
            </div>
          </div>
          <div className="content">
            <div className="education-left">
              <span className='dot'></span>
              <span className='line'></span>
            </div>
            <div className="education-right">
              <h1>Bachelor of Computer Application - 9.8 CGPA</h1>
              <p>Kadi Serva Vishwavidyalaya</p>
              <p>2018 - 2021</p>
              <p>During my academic journey, I delved into various facets of computer science, with a particular focus on web development. Exploring the intricacies of coding, design, and functionality, I gained a comprehensive understanding of creating dynamic and user-friendly websites.</p>
              <p></p>
            </div>
          </div>
        </div>

        <div className="experience">
          <h1><i className="fa-solid fa-pencil"></i>Experience</h1>
          <div className="content">
            <div className="education-left">
              <span className='dot'></span>
              <span className='line'></span>
            </div>
            <div className="education-right">
              <h1>Software Engineer</h1>
              <p>SCC Infotech LLP - India</p>
              <p>July 2023 -  Dec 2023</p>
              <p>Through hands-on experience, I honed my skills in programming languages such as c++, Java, and JavaScript, as well as frameworks like React.js. I also gained proficiency in version control systems such as Git and acquired a deeper understanding of software development methodologies such as Agile. </p>
            </div>
          </div>
          <div className="content">
            <div className="education-left">
              <span className='dot'></span>
              <span className='line'></span>
            </div>
            <div className="education-right">
              <h1>Software Engineer (Intern)</h1>
              <p>SCC Infotech LLP - India</p>
              <p>Jan 2022 - june 2023</p>
              <p>During my internship as a software engineer, I gained invaluable experience working on real-world projects alongside seasoned professionals. I learned to navigate complex codebases, debug issues efficiently, and collaborate effectively within a team environment. </p>
            </div>
          </div>
        </div>
        
      </section>
      <button className='btn-navigation btn-skiils-navigation' >
          <Link to="/skills"> Skiils <i className="fa-solid fa-angles-right"></i></Link>
        </button>
    </div>
  )
}

export default About
