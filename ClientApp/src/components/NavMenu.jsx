import React from 'react'
import { Link } from 'react-router-dom'
import Hamburger from '../images/Hamburger.png'
import HomeIcon from '../images/homeIcon4x4.png'
import SearchIcon from '../images/searchIcon4x4.png'
import WriteIcon from '../images/writeIcon4x4.png'
import '../navMenu.scss'

const NavMenu = () => {
  return (
    <nav className="top-nav">
      <div className="navicon">
        <ul>
          <img className="hamburger" src={Hamburger} alt="Hamburger" />
          <li>
            <Link to="/my-profile">Profile</Link>
          </li>
          <li>
            <Link to="/">
              <img className="home icon" src={HomeIcon} alt="Home Icon" />
              {/* <p>HOME</p> */}
            </Link>
          </li>
          <li>
            <Link to="/search">
              <img className="search icon" src={SearchIcon} alt="Search Icon" />
              {/* <p>SEARCH</p> */}
            </Link>
          </li>
          <li>
            <Link to="/author">
              <img className="write icon" src={WriteIcon} alt="Write Icon" />
              {/* <p>WRITE</p> */}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavMenu
