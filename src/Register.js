import React, { useState } from "react";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword, updateCurrentUser } from 'firebase/auth'
import { auth } from './config'
import { UserAuth } from "./AuthContext";
import { setDoc, addDoc, collection, doc } from "firebase/firestore";
import { db } from "./config";



function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [ error, setError ] = useState('')
  
  const { createUser, user } = UserAuth()

  const navigate = useNavigate()

  const addData = async() => {
     const docRef = doc(collection(db, 'cities'), {
      email: 'data@gmail.com'
     })
     await setDoc(docRef)
  }

  const addChips = async() => {
    const docRef = await addDoc(collection(db,'emails'), {
      email: 'chips@gmail.com'
    })

    .catch((err) => {
      console.error(err)
    })
  }
  
  


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCred);
      const user = userCred.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      console.error(error);
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

          <button onClick={handleSubmit} type="submit">Continue</button>
        </form>
         <div className="add">
          <button onClick={addData}>add data</button>
          <button onClick={addChips}>add chips</button>
         </div>

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
