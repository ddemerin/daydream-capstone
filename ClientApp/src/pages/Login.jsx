import React, { useState } from 'react'
import axios from 'axios'

const Login = () => {
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const logUserToApi = async () => {
    const resp = await axios.post('/auth/login', {
      email: loginEmail,
      password: loginPassword,
    })
    console.log(resp.data)
    if (resp.status === 200) {
      localStorage.setItem('token', resp.data.token)
      setShouldRedirect(true)
    }
  }

  if (shouldRedirect) {
    return <Redirect to="/" />
  }

  return (
    <>
      <div className="login-information-container">
        <h1 className="login-title">Login to your Daydream Account</h1>
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
        <button onClick={logUserToApi} className="login-button">
          Login!
        </button>
      </div>
    </>
  )
}

export default Login
