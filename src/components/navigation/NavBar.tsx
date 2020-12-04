import React from 'react'
import { Link } from 'react-router-dom'
import SailfishLogo from '../../assets/Logo/Grayscale on Transparent.png'


export const NavBar:React.FC = () => {
    return (
        <nav className="nav-bar">
            <img className="logo" id="nav-bar-logo" src={SailfishLogo} alt="company-logo" />
            <div className="nav-bar-link-container">
                <Link className="nav-bar-links" to="/">Home</Link>
                <Link className="nav-bar-links" to="">About Us</Link>
                <Link className="nav-bar-links" to="">Get A Quote</Link>
                <Link className="nav-bar-links" to="">Contact</Link>
            </div>
        </nav>
    )
}
