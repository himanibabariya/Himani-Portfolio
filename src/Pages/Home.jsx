import React from 'react'
import "../Style/Home.css"
import { Link } from 'react-router-dom';
import profile from '../assets/images/himani.jpg';
import reactIcon from '../assets/skills/react.svg';
import mongoIcon from '../assets/skills/mongo.svg';
import nextjsIcon from '../assets/skills/nextjs.svg';
import nodeIcon from '../assets/skills/node.svg';
import githubSocial from '../assets/social/github.svg';
import instaSocial from '../assets/social/instagram.svg';
import linkedinSocial from '../assets/social/linkedin.svg';

const Home = () => {
    return (
        <div>
            <section id="home" className="home">
                <div className="left-content">
                    <p className="role1">Software Engineer</p>
                    <h1 className="name1">I'm a </h1>
                    <p className="role2 typing-text">Software Developer</p>
                    <h1 className="name2">Himani</h1>
                    <p className="description">Adaptable Software Developer Thriving in Dynamic Environments, Embracing Change and Collaboration</p>

                    <div className="buttons">
                        {/* <a href="#">
                            <button className="btn-resume">Resume</button>
                        </a> */}
                        <button className='btn-skills'>
                            <Link to="/about"> Know me more </Link>
                            <img src="" alt="" />
                        </button>

                        <div className="social-icons">
                            <a href="https://github.com/himanibabariya" target="_blank"><img src={githubSocial} alt="" /></a>
                            <a href="https://www.instagram.com/himani_babariya/" target="_blank"><img src={instaSocial} alt="" /></a>
                            <a href="https://www.linkedin.com/in/himanibabariya/" target="_blank"><img src={linkedinSocial} alt="" /></a>
                        </div>
                    </div>
                </div>

                <div className="right-content">
                    <div className="circle1">
                        <div className="circle2">
                            <img src={profile} alt="Sun" />
                        </div>
                    </div>
                    <div className="icons">
                        <img className="react-icon" src={reactIcon} alt="" />
                        <img className="mongo-icon" src={mongoIcon} alt="" />
                        <img className="nextjs-icon" src={nextjsIcon} alt="" />
                        <img className="nodejs-icon" src={nodeIcon} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
