import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ClickAwayListener from "react-click-away-listener";
import Login from "./Login";
import Register from "./Register";
import Cart from "./Cart";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./config";
import { UserAuth } from "./AuthContext";
import PersonIcon from '@mui/icons-material/Person';
import NavbarDeal from "./NavbarDeal";

function Navbar() {
  const navigate = useNavigate();
  
  const [user, setUser] = useState({})

  

  const [isClicked, setIsClicked] = useState(false);
  const [SearchClicked,setSearchClicked] = useState(false)


  const clickAway = () => {
    setIsClicked(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        setUser(currentUser)
    })

    return () => {
        unsubscribe()
    }
})

  return (
    
    <div className="navbar-container">
      <NavbarDeal text='50% off deal' />
     
         
    <div className="navbar" style={{  
      display: SearchClicked ? '' :  ''
    }}>
      <Link to='/'>
      <div style={{
        display: SearchClicked ? 'none' : ''
      }} className="navbar-left">
        
        <img src="https://i.pinimg.com/originals/96/b5/3d/96b53d234872eadfa5ae680fb80fe224.png" alt="" />
      </div>
      </Link>

      <div className="navbar-middle">
      {SearchClicked ? (
      
      <div className="search-widget">

        <div className="left-side">
          <SearchIcon className="widget-search-icon" />
          <input placeholder="Search our store" type="text" className="widget-input" />
        </div>
        <div className="right-side" onClick={() => {setSearchClicked(!SearchClicked)}}>
          <CloseIcon className="close-icon" />
        </div>
      </div>
      ) : (
        user ? (
          <div className='search-icon-loggedIn' onClick={() => {setSearchClicked(!SearchClicked)}}>
            <SearchIcon />
            
          </div>
        ) : (
          <div className='search-icon-loggedOut' onClick={() => {setSearchClicked(!SearchClicked)}}>
            <SearchIcon />
          </div>
        )
      )}
      </div>
      
      <div style={{
        display: SearchClicked ? 'none' : ''
      }} className="navbar-right">
      
        <ul>
        
        
        <li>
          { user ? (
            
            <Link to="/register" style={{ display: user ? 'none' : '' }} className="link-button">
              <button className="register-button">Create Account</button>
            </Link>
          
          ) : (
            
            <Link to="/register" style={{}} className="link-button">
              <button className="register-button">Create account</button>
            </Link>
            
          )}
        </li>
          

              <li>
                <Link className="link-button" to="/login">
                {user ? (
                  <button className="email-button">{user.email}</button>
                ) : (
                  <button className="login-button">Log In</button>
                )}
              </Link>
              </li>
              <li>
              <Link className="link-button">
                {" "}
                <button style={{  
                  display: !user ? 'none' : ''
                }} className="logout-button" >
                  Log out
                </button>
              </Link>
              </li>
          
          
          <li className="cart-li">
            <Link className="cart" style={{ color: 'black' }} to='/cart'>
              <ShoppingCartIcon />
              <p>4</p>
            </Link> 
          </li>
        </ul>
        
        
        

        
        
        
      
          

        <ClickAwayListener onClickAway={clickAway}>
          
          <div
            className="hamburger-icon"
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            {isClicked ? (
              <CloseIcon className="icon" />
            ) : (
              <div className="icon">
                <PersonIcon  />
              </div>
              
            )}
            
            
            <div
              className={`dropdown-menu ${isClicked ? "active" : "inactive"} `}
            >
              <div className="drop">
                <div className="drop-1">
                <Link to="/login">
                      {user ? (
                        <button className="shown-email">Hi, {user.email}</button>
                      ) : (
                        ''
                      )}
                    </Link>

                    <Link to='/' className="logoutLink" >Log Out</Link>
                   

                  {user ? (
                    <Link to='/register'>
                      <button className="logged-in-signup">Create Account</button>
                    </Link>
                  ) : (
                    <Link to='/register'>
                      <button className="logged-out-signup">Create account</button>
                    </Link>
                  )}

                </div>
                {user ? (
                  ''
                ) : (
                  <p style={{ fontSize: 11, marginTop: 5 }}>
                    Already Have an Account?
                  <Link className="sign-in" to="/login">
                    Sign In
                  </Link>
                </p>
                )}
              </div>
            </div>
          </div>
          
        </ClickAwayListener>
        
      
      </div>
    </div>
    </div>
    
  );
}

export default Navbar;
