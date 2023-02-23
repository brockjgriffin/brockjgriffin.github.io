import './Items.css'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/cartSlice'
import item from './item'
import React, { useState } from 'react'
import './Shopping.css'
import featuredItems  from './Shopping'


function Items({ image, title, price, val }) {
    const dispatch = useDispatch()
    
      const handleAddToCart = (val) => {
        dispatch(addToCart(val));
      };
       
      
      
      
      return (
        <div className="items">
          
          <div className="description">
          <img src={image} alt="" />
            <h4>{title}</h4> 
            <h6>${price}</h6>
          </div>
        </div>
      )
    }
    
export default Items