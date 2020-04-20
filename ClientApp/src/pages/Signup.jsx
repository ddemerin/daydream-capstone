import React, { useState } from 'react'
import axios from 'axios'

const Signup = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const sendNewUserToApi = async () => {
    const resp = await axios.post('/auth/signup', {
      fullName: fullName,
      email: email,
      password: password,
    })
    console.log(resp.data)
  }

  return (
    <>
      <div className="login-information-container">
        <h1 class="login-title">Create a new Daydream Account</h1>
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
      </div>
    </>
  )
}

export default Signup
