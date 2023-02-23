import React from 'react'
import './Banner.css'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  useNavigate
} from "react-router-dom";
import { redirect } from 'react-router-dom';

function Banner() {

  
const navigate = useNavigate()
navigate('/shopping')



  return (
    <div className="banner">
       <img src="https://www.pngitem.com/pimgs/m/509-5095414_fashion-model-png-transparent-png.png" alt="" />
       <div className="banner-details">
            <h1>BIG PURSES</h1>
            <h3>BUY YOUR BIG PURSES FOR 30% OFF</h3>
            <Link style={{ textDecoration: 'none', cursor: 'pointer' }} {...navigate} >
              <button style={{ cursor: 'pointer',color: 'black', backgroundColor: 'white', border: '1px solid gray', display: 'flex', alignItems: 'center', padding: 10 }}><p style={{ color: 'black', textDecoration: 'none' }}>SHOP NOW</p> <ArrowRightIcon /></button>
            </Link>
       </div>
    </div>
  )
}

export default Banner