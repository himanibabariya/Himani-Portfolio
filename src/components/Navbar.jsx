// rafce 

import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/images/logo.svg';
import "../Style/Navbar.css"

const Navbar = () => {
    const location = useLocation();

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
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}> Home </Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About me</Link></li>
                        <li><Link to="/skills" className={location.pathname === '/skills' ? 'active' : ''}>Skills </Link></li>
                        <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''}> Projects </Link></li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}> Contact </Link></li>
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
