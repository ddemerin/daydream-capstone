import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../images/Hamburger.png'
import HomeIcon from '../images/homeIcon4x4.png'
import SearchIcon from '../images/searchIcon4x4.png'
import WriteIcon from '../images/writeIcon4x4.png'
import ProfileIcon from '../images/Profile_Placeholder_Small.png'
import NavBG from '../images/NavBarContainer.png'
import Logo from '../images/Daydream_LOGO.png'
import '../styles/navMenu.scss'

const NavMenu = () => {
  return (
    <header>
      <nav className="top-nav">
        <div className="navicon">
          <ul>
            <img className="hamburger" src={Hamburger} alt="Hamburger" />
            <li className="profile-icon-container">
              <Link to="/my-profile">
                <img
                  className="profile-icon"
                  src={ProfileIcon}
                  alt="Profile Icon"
                />{' '}
                Profile
              </Link>
            </li>
            <li className="icon-container">
              <Link to="/">
                <img className="icons" src={HomeIcon} alt="Home Icon" /> Home
              </Link>
            </li>
            <li className="icon-container">
              <Link to="/search">
                <img className="icons" src={SearchIcon} alt="Search Icon" />{' '}
                Search
              </Link>
            </li>
            <li className="icon-container">
              <Link to="/author">
                <img className="icons" src={WriteIcon} alt="Write Icon" />{' '}
                Upload
              </Link>
            </li>
            {/* <li>
              <Link to="/login">Logout</Link>
            </li> */}
          </ul>
        </div>
      </nav>
      <div className="top-bar-border" />
      <div className="nav-conatiner">
        <img className="navBG" src={NavBG} alt="Nav Button BG" />
      </div>
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
      </div>
    </header>
  )
}

export default NavMenu
