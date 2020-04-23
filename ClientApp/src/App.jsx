import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UploadAuthor from './pages/UploadAuthor'
import UploadBook from './pages/UploadBook'
import UploadPage from './pages/UploadPage'
import Read from './pages/Read'
import Search from './pages/Search'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import Hamburger from './images/Hamburger.png'
import NavBG from './images/NavBarContainer.png'
import HomeIcon from './images/homeIcon4x4.png'
import SearchIcon from './images/searchIcon4x4.png'
import WriteIcon from './images/writeIcon4x4.png'
import Logo from './images/Daydream_LOGO.png'
import MyProfile from './pages/MyProfile'
import './custom.scss'
import './navMenu.scss'
import { Redirect } from 'react-router'

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
                  <Link to="/my-profile">Profile</Link>
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
                  <Link to="/write">Write</Link>
                </li>
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
        <footer>
          <div className="bottom-bar-border" />
          <nav className="bottom-nav-container">
            <ul className="bottom-nav">
              <li>
                <Link to="/search">
                  <img
                    className="search icon"
                    src={SearchIcon}
                    alt="Search Icon"
                  />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img className="home icon" src={HomeIcon} alt="Home Icon" />
                </Link>
              </li>
              <li>
                <Link to="/author">
                  <img
                    className="write icon"
                    src={WriteIcon}
                    alt="Write Icon"
                  />
                </Link>
              </li>
            </ul>
          </nav>
        </footer>
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              localStorage.getItem('token') ? (
                <HomePage />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route
            exact
            path="/my-profile"
            render={() =>
              localStorage.getItem('token') ? (
                <MyProfile />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact path="/read/:id" component={Read} />
          <Route
            exact
            path="/author"
            render={() =>
              localStorage.getItem('token') ? (
                <UploadAuthor />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route exact path="/author/:id" component={UploadBook} />
          <Route exact path="/book/:id" component={UploadPage} />
          <Route
            exact
            path="/search"
            render={() =>
              localStorage.getItem('token') ? (
                <Search />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    )
  }
}
