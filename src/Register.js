import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from './config'
import { UserAuth } from "./AuthContext";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ error, setError ] = useState('')
  
  const { createUser } = UserAuth()

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
    setError('')
    try {
      await createUser(email, password);
      navigate('/')
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="register">
      <img
        className="image"
        width="100px"
        src="https://i.pinimg.com/originals/8f/42/7f/8f427f8caf35d7f038deeb691d186422.jpg"
        alt=""
      />
      <div className="Register-box">
        <h2>Create account</h2>
        <form onSubmit={handleSubmit} action="">
          <div className="register-form">
            <h5>Your Name</h5>
            <input type="text" placeholder="First and last name" />
          </div>

          <div className="register-form">
            <h5>Mobile number or email</h5>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder=""
            />
          </div>

          <div className="register-form">
            <h5>Password</h5>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
            />
          </div>

          <div className="register-form">
            <h5>Re-enter password</h5>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder=""
            />
          </div>

          <button type="submit">Continue</button>
        </form>

        <div className="register-boxFooter">
          <h5>Already have an account?</h5>
          <h5 className="link">
            <Link to="/login" className="link-color">
              Sign in
            </Link>
          </h5>
        </div>
      </div>

      <div className="register-bottomHalf">
        <div className="footer">
          <h6>Conditions of Use</h6>
          <h6>Privacy Notice</h6>
          <h6>Help</h6>
        </div>
      </div>
    </div>
  );
}

export default Register;
