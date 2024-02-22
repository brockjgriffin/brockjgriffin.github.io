import React, { useState, useEffect, useRef } from "react";
import "./Login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { AiFillFacebook, AiFillApple } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './config'
import { setDoc, addDoc, doc, collection } from "firebase/firestore";
import { db } from "./config";




function Login() {
  const [input, setInput] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  

  const navigate = useNavigate()

  

  
    
    

    
  
  
  const handleSignIn = async (e) => {
    e.preventDefault()
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCred.user.email)
      const user = userCred.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user))
      navigate('/')
    } catch (error) {
      console.error(error)
    }
  }
 

  
  

  const isEmpty = (e) => {
    
  };

  return (
    <div className="login-container">
      <img
        width="100px"
        src="https://i.pinimg.com/originals/8f/42/7f/8f427f8caf35d7f038deeb691d186422.jpg"
        alt=""
      />
        <div className="login-Box">
          <h2>Sign In</h2>
          <form onSubmit={handleSignIn} name="myForm" action="">
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
      <button className="link">add data</button>


      <div className="login-bottomHalf">
        <div className="buttons">
            <button style={{ backgroundColor: '#3b5998', border: '1px solid lightgray' }}>
              <div className="facebook-button">
                <AiFillFacebook className="socialMedia-icons" />
                <h4 style={{ }} className="h4">Continue With Facebook</h4>
              </div>
            </button>
          
          
            <button style={{ border: 'none', border: '1px solid lightgray' }} className="">
              <div className="google-button">
                <FcGoogle style={{}} className='socialMedia-icons' />
                <h4 className="h4">Continue With Google</h4>
              </div>
            </button>
          
          
            <button style={{ backgroundColor: 'black', border: '1px solid lightgray' }} className="">
              <div className="apple-button">
                <AiFillApple className="socialMedia-icons" />
                <h4 className="h4">Continue With Apple</h4>
              </div>
            </button>
          
          </div>
        </div>
        
      </div>
  );
}

export default Login;
