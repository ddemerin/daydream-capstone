import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Upload from './pages/Upload'
import Write from './pages/Write'
import Read from './pages/Read'
import Search from './pages/Search'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Hamburger from './images/Hamburger.png'
import HomeIcon from './images/homeIcon4x4.png'
import SearchIcon from './images/searchIcon4x4.png'
import WriteIcon from './images/writeIcon4x4.png'
import Logo from './images/Daydream_LOGO.png'
import './custom.scss'
import './navMenu.scss'

export default class App extends Component {
  static displayName = App.name

  render() {
    return (
      <Router>
        <header>
          <nav className="top-nav">
            <div className="navicon">
              <ul>
                <img className="hamburger" src={Hamburger} alt="Hamburger" />
                <li>
                  <Link to="/">Go Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/signup">Sign Up</Link>
                </li>
                <li>
                  <Link to="/search">Search</Link>
                </li>
                <li>
                  <Link to="/Write">Write</Link>
                </li>
              </ul>
            </div>
          </nav>
          <div className="top-bar-border" />
          <div className="logo-container">
            <Link to="/">
              <img className="logo" src={Logo} alt="logo" />
            </Link>
          </div>
        </header>
        <footer>
          <div className="bottom-bar-border" />
          <nav className="bottom-nav-container">
            <ul className="bottom-nav">
              <li>
                <Link to="/">
                  <img className="icons" src={HomeIcon} alt="Home Icon" />
                </Link>
              </li>
              <li>
                <Link to="/search">
                  <img className="icons" src={SearchIcon} alt="Search Icon" />
                </Link>
              </li>
              <li>
                <Link to="/write">
                  <img className="icons" src={WriteIcon} alt="Write Icon" />
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={Signup}></Route>
          <Route exact path="/read" component={Read}></Route>
          <Route exact path="/write" component={Write}></Route>
          <Route exact path="/upload" component={Upload}></Route>
          <Route exact path="/search" component={Search}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
}
