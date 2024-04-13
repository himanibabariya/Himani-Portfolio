// rafce 

import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import Logo1 from '../assets/images/logo-new.svg';
import Contact from '../Pages/Contact'
import About from "../Pages/About";
import "../Style/Navbar.css"

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
                <input type="checkbox" id='toggler' />
                <label htmlFor="toggler"><i class="fa-solid fa-bars"></i></label>

                <div className="nav-right">
                    <ul>
                        <li><Link to="/" className='active'> Home </Link></li>
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/skills">Skills </Link></li>
                        <li><Link to="/projects"> Projects </Link></li>
                        {/* <li><Link to="/education"> Education </Link></li> */}
                        <li><Link to="/contact"> Contact </Link></li>
                    </ul>
                </div>

                <div className="contact">
                    <Link to="/Contact">
                        <button className='nav-btn'>Let's talk!</button>
                    </Link>
                </div>

            </nav>


        </div>
    )
}

export default Navbar
