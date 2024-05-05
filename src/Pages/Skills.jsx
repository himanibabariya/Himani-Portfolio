import React from 'react'
import "../Style/Skills.css"
import { Link } from 'react-router-dom';
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
import microsoft from '../assets/skills/microsoft.svg';
import aws from '../assets/skills/aws.svg'


const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills">
        <h1>Skills</h1>

        <div className="skill-container">
          <div className="boxes box-group-left">
            <h2>Frontend Development</h2>
            <div className="box1">
              <div className="box"><img src={htmlIcon} alt="" /> HTML5</div>
              <div className="box"><img src={cssIcon} alt="" /> CSS3</div>
              <div className="box"><img src={tailwindIcon} alt="" /> Tailwind</div>
              <div className="box"><img src={javascriptIcon} alt="" /> JavaScript</div>
              <div className="box"><img src={reactIcon} alt="" /> React Js</div>
              <div className="box"><img src={reduxIcon} alt="" /> Redux</div>
            </div>
          </div>

          <div className="boxes box-group-right">
            <h2>Backend Development</h2>
            <div className="box2">
              <div className="box"><img src={nodeIcon} alt="" /> Node Js</div>
              <div className="box"><img src={nextIcon} alt="" />Next Js</div>
              <div className="box"><img src={expressIcon} alt="" /> Express Js</div>
              <div className="box"><img src={phpIcon} alt="" /> PHP</div>
              <div className="box"><img src={mongoIcon} alt="" /> MongoDB</div>
              <div className="box"><img src={sqlIcon} alt="" /> MySql</div>
            </div>
          </div>

          <div className=" boxes box-group-left">
            <h2>Programming Language</h2>
            <div className="box3">
              <div className="box"><img src={cIcon} alt="" />C</div>
              <div className="box"><img src={cplusIcon} alt="" />C++</div>
              <div className="box"><img src={csharpIcon} alt="" />C#</div>
              <div className="box"><img src={javaIcon} alt="" />Java</div>
            </div>
          </div>

          <div className=" boxes box-group-right">
            <h2>Version Control & Development</h2>
            <div className="box4">
              <div className="box"><img src={gitIcon} alt="" />Git</div>
              <div className="box"><img src={githubIcon} alt="" />GitHub</div>
            </div>
          </div>

          <div className=" boxes box-group-left">
            <h2>Cloud Computing</h2>
            <div className="box3">
              <div className="box"><img src={microsoft} alt="" />Microsoft Azure</div>
              <div className="box"><img src={aws} alt="" />AWS</div>

            </div>
          </div>

          <div className=" boxes box-group-right">
            <h2>Agile Methodology</h2>
            <div className="box4">
              <div className="box">Scrum</div>
              {/* <div className="box"></div> */}
            </div>
          </div>

          <div className=" boxes box-group-left">
            <h2>Tools</h2>
            <div className="box5">
              <div className="box">Figma</div>
              <div className="box">Adobe XD</div>
              <div className="box">VS Code</div>
              <div className="box">IntelliJ IDEA</div>
              <div className="box">Microsoft Visual Studio </div>
              <div className="box">Postman</div>
              <div className="box">Microsoft Teams</div>
              <div className="box">Selenium</div>
              

            </div>
          </div>

          <div className=" boxes box-group-right">
            <h2>Concepts</h2>
            <div className="box6">
              <div className="box">Object Oriented Programming</div>
              <div className="box">Data structure & Algorithm</div>
              <div className="box">Data base management system</div>
              <div className="box">Software Engineering</div>
            </div>
          </div>
        </div>
        <button className='btn-navigation btn-navigation-projects'>
          <Link to="/projects"> Previous work <i className="fa-solid fa-angles-right"></i></Link>
        </button>
      </section>

    </div>
  )
}

export default Skills
