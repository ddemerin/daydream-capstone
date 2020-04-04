import React from 'react'

const Login = () => {
  return (
    <>
      <div className="login-information-container">
        <form className="login-information">
          <h1 class="login-title">LOGIN</h1>
          <input type="text" className="login" placeholder="username" />
          <input type="text" className="password" placeholder="password" />
          <button className="login-button">Login</button>
        </form>
      </div>
    </>
  )
}

export default Login
