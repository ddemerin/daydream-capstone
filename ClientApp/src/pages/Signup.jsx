import React from 'react'

const Signup = () => {
  return (
    <>
      <div className="login-information-container">
        <form className="login-information">
          <h1 class="login-title">Sign up!</h1>
          <input type="text" className="login" placeholder="username" />
          <input type="text" className="password" placeholder="password" />
          <button className="login-button">Sign up!</button>
        </form>
      </div>
    </>
  )
}

export default Signup
