import React from 'react'
import './NavBar.css'
import NavItem from './NavItem'

function NavBar({ sidemenu, setSideMenu }) {



    let container = ''
    const home = window.location.pathname !== '/';
    const contact = window.location.pathname !== '/contact';
    const about = window.location.pathname !== '/about';


    if (sidemenu === 1) {
        container = (
            <div className="NavBar-container one fadeInLeft animate" onMouseEnter={() => setSideMenu(2)}    >
                <NavItem onClick={() => setSideMenu(2)} imgPath='./assets/right.svg' />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {home && <NavItem onClick={() => setSideMenu(0)} imgPath='./assets/house.svg' to="/" />}
                    <NavItem onClick={() => setSideMenu(0)} to="/resume" imgPath='./assets/download.svg' />
                    {contact && <NavItem onClick={() => setSideMenu(0)} to="/contact" imgPath='./assets/contact.svg' />}
                    {about && <NavItem onClick={() => setSideMenu(0)} to="/about" imgPath='./assets/about.svg' />}
                </div>
                <NavItem onClick={() => setSideMenu(0)} imgPath='./assets/close.svg' />
                <div></div>
            </div>

        )
    }

    if (sidemenu === 2) {
        container = (
            <div className="NavBar-container two fadeInLeft animate">
                <NavItem text="Shrink" onClick={() => setSideMenu(1)} imgPath='./assets/shrink.svg' />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                    {home && <NavItem onClick={() => setSideMenu(0)} text="Home" to="/" imgPath='./assets/house.svg' />}
                    <NavItem onClick={() => setSideMenu(0)} text="View Resume" to="/resume" imgPath='./assets/download.svg' />
                    {contact && <NavItem onClick={() => setSideMenu(0)} text="Contact" to="/contact" imgPath='./assets/contact.svg' />}
                    {about && <NavItem onClick={() => setSideMenu(0)} text="About" to="/about" imgPath='./assets/about.svg' />}
                </div>
                <NavItem text="Close" onClick={() => setSideMenu(0)} imgPath='./assets/close.svg' />
                <div></div>
            </div>
        )
    }

    return (
        <div>
            {container}
        </div>
    )
}

export default NavBar
