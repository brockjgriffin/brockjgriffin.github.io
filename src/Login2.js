import React from 'react'
import './Login2.css'

function Login2() {
  return (
    <div className="login2">
        <img
        width="100px"
        src="https://i.pinimg.com/originals/8f/42/7f/8f427f8caf35d7f038deeb691d186422.jpg"
        alt=""
      />
      <div className="login2-box">
        <h2>Sign in</h2>
        <form action="">
            <p>Email or Phone number</p>
            <input type="text" />
            <p>Password</p>
            <input type="text" />
            <button>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login2