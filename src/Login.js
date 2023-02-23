import React, { useState } from "react";
import "./Login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './config'



function Login() {
  const [input, setInput] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const navigate = useNavigate()

  const loginUser = (e) => {
    e.preventDefault()
    console.log(email, password)

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const user = userCredential.user;
    console.log(user)
    navigate('/')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  const handleClick = (event) => {
    event.preventDefault();
    const x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      setInput(true);
    } else {
      setInput(false);
    }
  };

  const isEmpty = (e) => {
    
  };

  return (
    <div id="login" className="login">
      <img
        width="100px"
        src="https://i.pinimg.com/originals/8f/42/7f/8f427f8caf35d7f038deeb691d186422.jpg"
        alt=""
      />
      
        <div className="login-Box">
          <h2>Sign In</h2>
          <form onSubmit={loginUser} name="myForm" action="">
          <p style={{ marginBottom: 5, fontSize: 'small', fontWeight: 500 }}>Email or mobile phone number</p>
            <input value={email}
              onChange={(e) => setEmail(e.target.value)} name="fname" type="text" />
            <p style={{ marginBottom: 5, fontSize: 'small', fontWeight: 500 }}>Password</p>
            <input value={password}
              onChange={(e) => setPassword(e.target.value)} name="fname" type="password" />

            {!input && <button type="submit" className="empty-button">Login </button>}
            {input && <button type='submit' className="full-button">Login</button>}
          </form>
        </div>
      

      <div className="below">
        <h4 className="h4-newCustomer">New Customer?</h4>
      </div>
    
      <Link className="link" to="/register">
        <h5>Create an Account</h5>
      </Link>
      <div className="login-bottomHalf">
        <button className="facebook-button">
          <FacebookIcon className="icon" />
          <h4 className="h4-button">Continue With Facebook</h4>
        </button>
        <button className="google-button">
          <img
            className="google-icon"
            src="https://ir.ebaystatic.com/rs/c/sgninui-src-static-images-google-logo-icon-PNG-Transparent-Background-Z_TFsqo3.png"
            alt=""
          />
          <h4>Continue With Google</h4>
        </button>
        <button className="apple-button">
          <AppleIcon className="icon" />
          <h4>Continue With Apple</h4>
        </button>
      </div>
    </div>
  );
}

export default Login;
