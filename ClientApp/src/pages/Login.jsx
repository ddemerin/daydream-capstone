import React, { useState } from 'react'
import axios from 'axios'
import Logo from '../images/Daydream_LOGO.png'
import { Redirect, Link } from 'react-router-dom'
import '../login.scss'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
  })

  const logUserToApi = async e => {
    e.preventDefault()
    const resp = await axios.post('/auth/login', {
      email: loginEmail,
      password: loginPassword,
    })
    console.log(resp.data)
    if (resp.status === 200) {
      localStorage.setItem('token', resp.data.token)
      setWasSuccessfullyCreated({
        shouldRedirect: true,
      })
    }
  }

  if (wasSuccessfullyCreated.shouldRedirect) {
    return <Redirect to="/my-profile" />
  } else {
    return (
      <>
        <form className="bg-container" onSubmit={logUserToApi}>
          <div className="login-information-container">
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
      </>
    )
  }
}

export default Login
