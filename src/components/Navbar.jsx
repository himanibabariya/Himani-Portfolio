// rafce 

import React from 'react'
import SunIcon from '../assets/skills/sun.svg';
import Logo from '../assets/images/logo.svg';
import Logo1 from '../assets/images/logo-new.svg';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img className='logo1' src={Logo} alt="" />
                    {/* <img className='logo2' src={Logo1} alt="" /> */}
                </div>

                <div className="nav-right">
                    <ul>
                        <li><a href="#home"> Home </a></li>
                        <li><a href="#skills"> Skills </a></li>
                        <li><a href="#projects"> Projects </a></li>
                        <li><a href="#education"> Education </a></li>
                        <li><a href="#contact"> Contact </a></li>
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
