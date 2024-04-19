import React from 'react'
import GitHub from "../assets/social/github1.svg";
import { Link } from 'react-router-dom';

const ProjectFooter = () => {
  return (
    <div>
      <div className="moreProjects">
          <p>That is not all. Please checkout my git hub profile for more repositories.</p>
          <a href="https://github.com/himanibabariya" target='_blank'>
            <img src={GitHub} alt="" />
          </a>
        </div>
        <button className='btn-navigation btn-navigation-contact'>
          <Link to="/contact"> Contact me<i className="fa-solid fa-angles-right"></i></Link>
        </button>
    </div>
  )
}

export default ProjectFooter
