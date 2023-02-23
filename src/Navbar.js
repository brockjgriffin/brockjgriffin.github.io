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

function Navbar() {
  const navigate = useNavigate();
  const { user, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("you are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };

  const [isClicked, setIsClicked] = useState(false);
  const clickAway = () => {
    setIsClicked(false);
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <h5>EN</h5>
        <ArrowDropDownIcon />
        <div className="input">
          <input placeholder="Search" type="text" className="navbar-search" />
          <SearchIcon className="searchIcon" />
        </div>
      </div>

      <div className="navbar-middle"></div>

      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/register" style={{}} className="">
              <button className="register-button">Register</button>
            </Link>
          </li>

          

          <li>
            <div className="loginLogout">
              <Link className="link-button" to="/login">
                {user ? (
                  <button className="login-button">{user.email}</button>
                ) : (
                  <button className="login-button">Log In</button>
                )}
              </Link>
              <Link className="link-button">
                {" "}
                <button className="logout-button" onClick={handleLogout}>
                  Log Out
                </button>
              </Link>
            </div>
          </li>

          
          
        </ul>
        <Link className="cart" style={{ color: 'black' }} to='/cart'>
        
            <ShoppingCartIcon />
            <p>4</p>
          
        </Link>
        
                

        <ClickAwayListener onClickAway={clickAway}>
          <div
            className="hamburger-icon"
            onClick={() => {
              setIsClicked(!isClicked);
            }}
          >
            {isClicked ? (
              <CloseIcon className="close-icon" />
            ) : (
              <MenuIcon className="icon" />
              
            )}
            <div
              className={`dropdown-menu ${isClicked ? "active" : "inactive"} `}
            >
              <div className="drop">
                <div className="drop-1">
                  <Link className="link" to="/register">
                    <button>Sign Up</button>
                  </Link>

                  <p>
                    Already Have an Account?
                    <Link className="llink" to="/login">
                      Sign In
                    </Link>
                  </p>
                </div>
                <div className="drop2-3">
                  <div className="drop-2">
                    <Link className="link" to="/login">
                      {user ? (
                        <button className="butto">Hi, {user.email}</button>
                      ) : (
                        <button>Log In</button>
                      )}
                    </Link>

                    <Link
                      style={{
                        marginTop: 40,
                        textDecoration: "none",
                        color: "black",
                        marginRight: 10,
                      }}
                      onClick={handleLogout}
                      className="logout-link"
                      to="/"
                    >
                      Log Out
                    </Link>
                  </div>

                  <div className="drop-3">
                    {user ? (
                      <Link to="/cart" className="cart-with-user">
                        <ShoppingCartIcon
                          style={{
                            color: "black",
                            position: "relative",
                            top: 2,
                          }}
                        />
                      </Link>
                    ) : (
                      <Link to="/cart" className="cart-without-user">
                        <ShoppingCartIcon
                          style={{
                            color: "black",
                            position: "relative",
                            top: 2,
                          }}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ClickAwayListener>
      </div>
    </div>
  );
}

export default Navbar;
