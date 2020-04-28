import React, { useState } from 'react'
import axios from 'axios'
import Logo from '../images/Daydream_LOGO.png'
import Sun from '../images/Sun.png'
import { Alert } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.scss'

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const [visible, setVisible] = useState(false)
  const onClose = () => setVisible(false)

  const sendNewUserToApi = async e => {
    e.preventDefault()
    try {
      const resp = await axios.post('/auth/signup/', {
        fullName: fullName,
        email: email,
        password: password,
      })
      if (resp.status === 200) {
        localStorage.setItem('token', resp.data.token)
        setShouldRedirect(true)
      }
    } catch (error) {
      setVisible(prevVisible => {
        return { ...prevVisible, visible: true }
      })
    }
  }

  if (shouldRedirect) {
    window.location = '/my-profile'
    return <p></p>
    // return <Redirect to="/my-profile" />
  } else {
    return (
      <>
        <img className="sun" src={Sun} alt="Sun" />
        <form className="login-form-container" onSubmit={sendNewUserToApi}>
          <div className="login-information-container">
            <Alert isOpen={visible} toggle={onClose} color="danger">
              <p>Password must be at least 7 characters long!</p>
            </Alert>
            <section className="logo-container">
              <img className="logo" src={Logo} alt="logo" />
            </section>
            <section>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="login"
                placeholder="First Name"
              />
            </section>
            <section>
              <input
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="email"
                placeholder="Email"
              />
            </section>
            <section>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="password"
                placeholder="Password"
              />
            </section>
            <div className="button-container">
              <button className="signup-button">Sign up!</button>
            </div>
            <Link to="/login">Have an account?</Link>
          </div>
        </form>
        <div className="bg-container" />
      </>
    )
  }
}

export default Signup
