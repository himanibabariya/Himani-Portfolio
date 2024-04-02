// rafce 

import React from 'react'
import { Link } from 'react-router-dom';
import SunIcon from '../assets/skills/sun.svg';
import Logo from '../assets/images/logo.svg';
import Logo1 from '../assets/images/logo-new.svg';

import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="" />
                    </Link>
                    {/* <img className='logo2' src={Logo1} alt="" /> */}
                </div>

                <div className="nav-right">
                    <ul>
                        <li><Link to="/"> Home </Link></li>
                        <li><Link to="/skills"> Skills </Link></li>
                        <li><Link to="/projects"> Projects </Link></li>
                        <li><Link to="/education"> Education </Link></li>
                        <li><Link to="/contact"> Contact </Link></li>
                    </ul>
                </div>

                <div className="sunIcon">
                    <img src={SunIcon} alt="Sun Icon" />
                </div>

            </nav>
        </div>
    )
}

export default Navbar
