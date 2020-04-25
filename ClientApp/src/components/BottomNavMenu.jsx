import React from 'react'
import { Link } from 'react-router-dom'
import HomeIcon from '../images/homeIcon4x4.png'
import SearchIcon from '../images/searchIcon4x4.png'
import WriteIcon from '../images/writeIcon4x4.png'
import '../navMenu.scss'

const BottomNavMenu = () => {
  return (
    <>
      <div className="bottom-bar-border" />
      <nav className="bottom-nav-container">
        <ul className="bottom-nav">
          <li>
            <Link to="/search">
              <img className="search icon" src={SearchIcon} alt="Search Icon" />
            </Link>
          </li>
          <li>
            <Link to="/">
              <img className="home icon" src={HomeIcon} alt="Home Icon" />
            </Link>
          </li>
          <li>
            <Link to="/author">
              <img className="write icon" src={WriteIcon} alt="Write Icon" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default BottomNavMenu
