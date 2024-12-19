import React from 'react'
import Laptop from "../../assets/images/laptop.png";
import Project1 from "../../assets/videos/project1.mp4";
import Phone from "../../assets/images/phone.webp";
import Project2 from "../../assets/videos/project2.mp4";
import star from "../../assets/other/star.svg"
import xd from "../../assets/technologies/adobe-xd-icon.svg"

const UiProjects = () => {
  return (
    <div>
      <div className="project-container">
        <div className="left">
          <p className='title'>Project Name:</p>
          <p className='project-name'>GemTrove</p>

          <div className="laptop">
            <img src={Laptop} alt="" className='img1' />
            <video controls className='video' muted autoPlay loop>
              <source src={Project1} type="video/mp4" />
            </video>

            <div className="tech-section">

              <p>Tool Used :</p>
              <div className="technologies">

                <img src={xd} alt="" />
                <p>Adobe Xd</p>

              </div>
            </div>
          </div>

        </div>
        <div className="right">
          <p className='des'>Description:</p>
          <p className='description'>Project "GemTrove" is a captivating jewelry website where my UI/UX design expertise takes center stage. I crafted it meticulously using Adobe XD, and this platform serves as a testament to my design skills, encapsulating my thoughts and personal ideology. With a passion for UI design, I've seamlessly blended my beliefs and learning into every aspect of this website. GemTrove isn't just about showcasing jewelry; it's about showcasing my dedication to crafting immersive and visually appealing interfaces that leave a lasting impression.</p>

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
              <p>Responsive</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>User Centric</p>
            </div>
          </div>

          <div className="liveProject">
            <a href="https://xd.adobe.com/view/ceb78ee4-1d74-4975-8be8-7770d4c38431-9be4/" target='_blank'><button className="btn-orange">Desktop</button></a>
            <a href="https://xd.adobe.com/view/ceb78ee4-1d74-4975-8be8-7770d4c38431-9be4/screen/bcc1399a-8c29-441a-8aa9-ca92fb2fc241" target='_blank'><button className="btn-blue">Tablet</button></a>
            <a href="https://xd.adobe.com/view/ceb78ee4-1d74-4975-8be8-7770d4c38431-9be4/screen/105862bb-b09c-4503-aacc-0086d5b63ede" target='_blank'><button className="btn-orange">Mobile</button></a>

          </div>
        </div>
      </div>

      <hr />

      <div className="project-container">
        <div className="left">
          <p className='title'>Project Name:</p>
          <p className='project-name'>The KW Region Bank</p>

          <div className="phone">
            <img src={Phone} alt="" className='phoneImg' />
            <video controls className='phoneVideo' muted autoPlay loop>
              <source src={Project2} type="video/mp4" />
            </video>

            <div className="tech-section">
                <p>Tool Used :</p>
              <div className="technologies">
                <img src={xd} alt="" />
                <p>Adobe Xd</p>
              </div>
            </div>
          </div>

        </div>
        <div className="right">
          <p className='des'>Description:</p>
          <p className='description'>Project "KW Bank Mobile Application" revolutionizes the banking experience with a meticulously crafted UI/UX design. Through the creation of rapid UX and UI prototypes, I've shaped every aspect of this app's user interaction, ensuring seamless navigation and intuitive functionality. By bringing wireframes and design documents to life, I've developed comprehensive user journeys, wireframes, prototypes, and interactive mockups, all aimed at communicating design concepts and validating user interactions.</p>

          <div className="concepts">
            <div className="item">
              <img src={star} alt="" />
              <p>Animations</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Usability testing</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Design Trend</p>
            </div>
            <div className="item">
              <img src={star} alt="" />
              <p>Prototype</p>
            </div>
          </div>

          <div className="liveProject">
            <a href="#" target='_blank'><button className="btn-orange">Github</button></a>
            <a href="https://xd.adobe.com/view/ce0091c7-554e-4100-8f59-3e30a66582a8-9b53/screen/fcf8cf96-dff4-4f9d-8a57-964030f90809" target='_blank'><button className="btn-blue">Live Demo</button></a>
          </div>
        </div>
      </div>
      <hr />

    </div>
  )
}

export default UiProjects
