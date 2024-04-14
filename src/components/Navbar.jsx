// rafce 

import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import "../Style/Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav>
                {/* Navbar logo  */}
                <div className="nav-left">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <input type="checkbox" id='toggler' />
                <label htmlFor="toggler"><i className="fa-solid fa-bars"></i></label>

                {/* Navbar Center  */}
                <div className="nav-center">
                    <ul>
                        <li><Link to="/" className='active'> Home </Link></li>
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/skills">Skills </Link></li>
                        <li><Link to="/projects"> Projects </Link></li>
                        <li><Link to="/contact"> Contact </Link></li>
                    </ul>
                </div>

                {/* Navbar right  */}
                <div className="nav-right">
                    <Link to="/Contact">
                        <button className='nav-btn'>Let's talk!</button>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
