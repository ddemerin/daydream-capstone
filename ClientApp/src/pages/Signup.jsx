import React, { useState } from 'react'
import axios from 'axios'
import { Redirect, Link } from 'react-router-dom'
import '../login.scss'

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRedirect, setShouldRedirect] = useState(false)

  const sendNewUserToApi = async () => {
    const resp = await axios.post('/auth/signup/', {
      fullName: fullName,
      email: email,
      password: password,
    })
    console.log(resp.data)
    if (resp.status === 200) {
      localStorage.setItem('token', resp.data.token)
      setShouldRedirect(true)
    }
  }

  if (shouldRedirect) {
    return <Redirect to="/my-profile" />
  }

  return (
    <>
      <div className="login-information-container">
        <h1 className="login-title">Create a new Daydream Account</h1>
        <section>
          <input
            type="text"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            className="login"
            placeholder="Full Name"
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
        <button onClick={sendNewUserToApi} className="login-button">
          Sign up!
        </button>
        <Link to="/login">Have an account?</Link>
      </div>
    </>
  )
}

export default Signup
