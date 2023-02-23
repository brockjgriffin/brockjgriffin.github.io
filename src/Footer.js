import React from "react";
import "./Footer.css";
import PlaceIcon from "@mui/icons-material/Place";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate()
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <img
            width="130"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyja74_mCrg0Bs36pFaCT5qZv84vSPKqmXqg&usqp=CAU"
            alt=""
          />

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
            aliquam delectus impedit, adipisci illum cupiditate nesciunt
            pariatur beatae reiciendis ullam quae libero sapiente. Magnam
            deleniti non libero quidem repellat doloremque.
          </p>
        </div>

        <div className="middle">
          <h3>Useful Links</h3>
          <div className="links">
            <div className="link-col1">
              <p>Home</p>
              <p>Man Fashion</p>
              <p>Accessories</p>
              <p>
                <span>
                  <p>Order Tracking</p>
                </span>
              </p>
              <p>Wishlist</p>
            </div>
            <div className="link-col2">
              <p onClick={()=>navigate('/cart')}>Cart</p>
              <p>
                <span>
                  <p>Woman Fashion</p>
                </span>
              </p>
              <p>
                <span>
                  <p>My Account</p>
                </span>
              </p>
              <p>Terms</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="header"><h3>Contact</h3></div>
          <div className="contact">
            <PlaceIcon />
            <h5>2200 Lake village Dr, Kingwood Tx 77339</h5>
          </div>

          <div className="contact">
            <LocalPhoneIcon />
            <h5>713-305-2351</h5>
          </div>

          <div className="contact">
            <EmailIcon />
            <h5>Brockgriffin2000@gmail.com</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
