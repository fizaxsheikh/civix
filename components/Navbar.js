import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (

        <nav className="navbar">

            <div className="navbar-left">
                <a href="/" className="logo">
                CIVIX
                </a>
            </div>

            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/create-account">Create a free account</a>
                    </li>
                    <li>
                        <a href="/log-in">Log-in</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;