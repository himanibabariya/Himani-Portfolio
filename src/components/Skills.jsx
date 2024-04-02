import React from 'react'
import "./Skills.css"
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
import vsIcon from '../assets/skills/vscode.svg';
import inIcon from '../assets/skills/html.svg';
import vs2Icon from '../assets/skills/html.svg';
import postmanIcon from '../assets/skills/postman.svg';
import maIcon from '../assets/skills/html.svg';
import figmaIcon from '../assets/skills/html.svg';

const Skills = () => {
  return (
    <div>
      <section id="skills" className="skills">
        <h1>Skills</h1>

        <div className="skill-container">
          <div className="boxes ">
            <h2>Frontend Development</h2>
            <div className="box1">
              <div className="box"><img src={htmlIcon} alt="" /> HTML</div>
              <div className="box"><img src={cssIcon} alt="" /> CSS</div>
              <div className="box"><img src={tailwindIcon} alt="" /> Tailwind</div>
              <div className="box"><img src={javascriptIcon} alt="" /> JavaScript</div>
              <div className="box"><img src={reactIcon} alt="" /> React Js</div>
              <div className="box"><img src={reduxIcon} alt="" /> Redux</div>
            </div>
          </div>

          <div className="boxes">
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

          <div className=" boxes">
            <h2>Programming Language</h2>
            <div className="box3">
              <div className="box"><img src={cIcon} alt="" />C</div>
              <div className="box"><img src={cplusIcon} alt="" />C++</div>
              <div className="box"><img src={csharpIcon} alt="" />C#</div>
              <div className="box"><img src={javaIcon} alt="" />Java</div>
            </div>
          </div>

          <div className=" boxes">
            <h2>Version Control & Development</h2>
            <div className="box4">
              <div className="box"><img src={gitIcon} alt="" />Git</div>
              <div className="box"><img src={githubIcon} alt="" />GitHub</div>
            </div>
          </div>

          <div className=" boxes">
            <h2>Tools</h2>
            <div className="box5">
              <div className="box">VS Code</div>
              <div className="box">IntelliJ IDEA</div>
              <div className="box">Microsoft Visual Studio </div>
              <div className="box">Postman</div>
              <div className="box">Microsoft Azure</div>
              <div className="box">Figma</div>
              <div className="box">Adobe XD</div>
            </div>
          </div>

          <div className=" boxes">
            <h2>Concepts</h2>
            <div className="box6">
              <div className="box">Object Oriented Programming</div>
              <div className="box">Data structure & Algorithm</div>
              <div className="box">Data base management system</div>
              <div className="box">Software Engineering</div>
            </div>
          </div>       
        </div>
        <button className='btn-skills'>
            <Link to="/projects"> Previous works </Link>
            <img src="" alt="" />
          </button>
      </section>

    </div>
  )
}

export default Skills
