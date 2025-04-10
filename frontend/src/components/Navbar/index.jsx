import React from 'react';
import {Nav, NavLink, Bars, NavBtn, NavBtnLinkOut, NavBtnLink} from './NavbarElements';

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>Logo</h1>
                </NavLink>
                <Bars />
                <NavBtn>
                    <NavBtnLinkOut to="/create-a-free-account">Create a free account</NavBtnLinkOut>
                    <NavBtnLink to="/log-in">Log in</NavBtnLink>
                </NavBtn>

            </Nav>
        </>
    );
};

export default Navbar;