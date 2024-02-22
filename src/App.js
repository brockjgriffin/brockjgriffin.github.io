import { useState, useEffect } from 'react';
import Register from './Register';
import Login from './Login';
import Cart from './Cart';
import Home from './Home';
import Pages from './Pages';
import Shopping from './Shopping';
import Items from './Items';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  useLocation,
  BrowserRouter
} from "react-router-dom";


import './App.css';
import NavbarDeal from './NavbarDeal';
import Login2 from './Login2';

import { db } from './config';
import { UserAuth } from './AuthContext';
import { doc, setDoc } from 'firebase/firestore';
import { login, logout, selectUser } from "./redux/userSlice";
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './config';

function App() {
  const withoutNav = ['/shopping', '/register', '/login', '/cart']
 

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubsribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        console.log(userAuth)
        dispatch(
          login({
            uid:userAuth.uid,
            email: userAuth.email
          })
        )
      } else {
        dispatch(logout())
      }
    })
    return unsubsribe
  }, [dispatch])
  

  


  return (
    
    <div className="app">
      
      <BrowserRouter>
      
   
      
     
      
      
        
      <Routes>
        <Route exact path='/' element={<Home />} />
        
        <Route exact path='/shopping' element={<Shopping />} />
        <Route exact path='/items' element={<Items />} />

        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login2' element={<Login2 />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/cart' element={<Cart />} />
        

      </Routes>
      </BrowserRouter>
      
    </div>
    
  );
}

export default App;
