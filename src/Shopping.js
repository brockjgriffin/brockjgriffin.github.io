import React, { useState } from 'react'
import item from './item'
import { useNavigate } from "react-router-dom";
import Items from './Items'
import { useDispatch } from 'react-redux'
import { addToCart } from './redux/cartSlice'

function Shopping() {
  
  const [hideNav, setHideNav] = useState()
  const dispatch = useDispatch()
  const navigate = useNavigate()
    
      const handleAddToCart = (val) => {
        dispatch(addToCart(val));
        
      };
      
      
      
      return (
        <div className="items">
          {item.map((val) => (
            <div className="cartItem" key={val.id}>
              <Items 
              image={val.image}
              title={val.title}
              price={val.price}

              />
              <button className='button' onClick={() => handleAddToCart(val)}>Add to cart</button>
            </div>
            
      ))}
          
        </div>
      )
    }





export const featuredItems = 'featuredItems'
export default Shopping
