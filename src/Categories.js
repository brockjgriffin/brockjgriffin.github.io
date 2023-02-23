import React from 'react'
import './Categories.css'
import data from './data'
import Slider from "react-slick";

function Categories({ image, text, button }) {
    
  return (
    
    <div className="categories">
        <img height='300' width='300' src={image} alt="" />
        <div className="catDetails">
          <h1>{text}</h1>
          <button><h5 style={{ color: 'black' }}>SHOP NOW</h5></button>
        </div>
    </div>
    
    
  )
}

export default Categories