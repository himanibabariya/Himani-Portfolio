import React from 'react'
import { Link } from 'react-router-dom';
import "./Project.css"
import Laptop from "../assets/images/laptop.png";
import Project1 from "../assets/videos/project1.mp4";


const Projects = () => {
  return (
    <div>
      <section id="projects" className="projects">
        <div className="project-container">
          <div className="left">
            <p className='title'>Project Name:</p>
            <p className='project-name'>GemTrove</p>

            <div className="laptop">
              <img src={Laptop} alt="" className='img1' />
              <video controls className='video' muted autoPlay loop>
                <source src={Project1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

          </div>
          <div className="right">
            <p className='des'>Description:</p>
            <p className='description'>Project "GemTrove" is a captivating jewelry website where my UI/UX design expertise takes center stage. I crafted it meticulously using Adobe XD, and this platform serves as a testament to my design skills, encapsulating my thoughts and personal ideology. With a passion for UI design, I've seamlessly blended my beliefs and learning into every aspect of this website. GemTrove isn't just about showcasing jewelry; it's about showcasing my dedication to crafting immersive and visually appealing interfaces that leave a lasting impression.</p>

            <p className='technologies'>Tool Used:</p>
            <div className="list-languages">
              <div className="language">Adobe Xd</div>
            </div>

            <a href="#"><button className="btn-orange">View Website</button></a>
            <a href="#"><button className="btn-blue">View Code</button></a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects
