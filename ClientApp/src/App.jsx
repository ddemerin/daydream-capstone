import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import UploadAuthor from './pages/UploadAuthor'
import UploadBook from './pages/UploadBook'
import UploadPage from './pages/UploadPage'
import Read from './pages/Read'
import Search from './pages/Search'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import NavMenu from './components/NavMenu'
import BottomNavMenu from './components/BottomNavMenu'
import MyProfile from './pages/MyProfile'
import { Redirect } from 'react-router'

export default class App extends Component {
  static displayName = App.name

  render() {
    console.log(localStorage.getItem('token'))

    return (
      <Router>
        {localStorage.getItem('token') ? <NavMenu /> : <></>}
        {localStorage.getItem('token') ? <BottomNavMenu /> : <> </>}
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
