import React, { useState } from 'react'
import axios from 'axios'
import Logo from '../images/Daydream_LOGO.png'
import Sun from '../images/Sun.png'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.scss'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
  })

  const [visible, setVisible] = useState(false)
  const onClose = () => setVisible(false)

  const logUserToApi = async e => {
    e.preventDefault()
    try {
      const resp = await axios.post('/auth/login', {
        email: loginEmail,
        password: loginPassword,
      })
      if (resp.status === 200) {
        localStorage.setItem('token', resp.data.token)
        setWasSuccessfullyCreated({
          shouldRedirect: true,
        })
      }
    } catch (error) {
      setVisible(prevVisible => {
        return { ...prevVisible, visible: true }
      })
    }
  }

  if (wasSuccessfullyCreated.shouldRedirect) {
    window.location = '/my-profile'
    return <p></p>
    // return <Redirect to="/my-profile" />
  } else {
    return (
      <>
        {localStorage.clear('token')}
        <img className="sun" src={Sun} alt="Sun" />
        <form className="login-form-container" onSubmit={logUserToApi}>
          <div className="login-information-container">
            <Alert isOpen={visible} toggle={onClose} color="danger">
              <p>Incorrect email or password! Try Again!</p>
            </Alert>
            <section className="logo-container">
              <img className="logo" src={Logo} alt="logo" />
            </section>
            <section>
              <input
                type="text"
                value={loginEmail}
                onChange={e => setLoginEmail(e.target.value)}
                className="email"
                placeholder="Email"
              />
            </section>
            <section>
              <input
                type="password"
                value={loginPassword}
                onChange={e => setLoginPassword(e.target.value)}
                className="password"
                placeholder="Password"
              />
            </section>
            <div className="button-container">
              <button className="login-button">Login!</button>
            </div>
            <aside>
              <p>Don't have an account?</p>
              <Link to="/signup">Sign up here!</Link>
            </aside>
          </div>
        </form>
        <div className="bg-container" />
      </>
    )
  }
}

export default Login
