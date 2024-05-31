import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../../assets/Ellipse 2.png';
import mobile_menu from '../../assets/menu-icon.png';
import close_icon from '../../assets/close-icon.png';

const Navbar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <nav>
            <img src={Logo} alt="logo" />
            <div className="nav-menu">
                <ul className={mobileMenu ? '' : 'hidden'}>
                    <li>home</li>
                    <li>academics</li>
                    <li>admission</li>
                    <li>student life</li>
                    <li>services</li>
                    <li>about us</li>
                    <li>contact us</li>
                </ul>
                {mobileMenu ? (
                    <img
                        src={close_icon}
                        alt="close icon"
                        className='menu'
                        onClick={toggleMobileMenu}
                    />
                ) : (
                    <img
                        src={mobile_menu}
                        alt="menu icon"
                        className='menu'
                        onClick={toggleMobileMenu}
                    />
                )}
            </div>
        </nav>
    );
};

export default Navbar;
