import React, { useEffect, useState } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import item from './item';
import { removeFromCart, increasedCart, decreasedCart } from './redux/cartSlice';
import { AuthContextProvider, UserAuth  } from './AuthContext';

function Cart() {
  const cart = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  

    const handleRemoveFromCart = (cartItem) => {
      dispatch(removeFromCart(cartItem))
    }

    const handleAddToCart = (cartItem) => {
      dispatch(increasedCart(cartItem))
    }

    const handleDecreaseCart = (cartItem) => {
      dispatch(decreasedCart(cartItem))
    }

    
    
    
  return (
    <div className="cart-container">
      <h2 className='h2' >Shopping Cart</h2>
      {cart.cartItems.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <div className="start-shopping">
            <Link style={{ textDecoration: 'none', color: '#e9d4d4' }} to='/shopping'>
              
              <span>Start Shopping</span>
            </Link>
          </div>
        </div>
      ) : (
        <div>
          <div className="upper-half">
            <h3>Product</h3>
            <h3>Price</h3>
            <h3>Quanity</h3>
            <h3>Total</h3>
          </div>
          <div className="cart-items">
            
            {cart.cartItems?.map(cartItem => (
              <div className="cart-item" key={cartItem.id}>
                <div className="product-image">
                  <img className='image' src={cartItem.image} alt="" />
                  <h3>{cartItem.title}</h3>
                  
                </div>
                    
                    <p>${cartItem.price}</p>
                    <div className="counter-container">
                      <div className='counter'>
                        <button onClick={() => handleDecreaseCart(cartItem)} className='counter-minus'>-</button>
                        <div className="counter-number">{cartItem.cartQuanity}</div>
                        <button onClick={() =>handleAddToCart(cartItem)} className='counter-plus'>+</button>
                      </div>
                    </div>
                    <div className='remove-button'>
                      <h3 style={{ color: 'green' }}>${cartItem.cartQuanity * cartItem.price}</h3>
                      <button onClick={() =>handleRemoveFromCart(cartItem)}>Remove</button>
                    </div>
                
              </div>
            ))}

        <div className="cart-total">
          <div className="total-container">
          <h5>Cart Total</h5>
          </div>
              <div className='totalContainer'>
                <div style={{ paddingTop: 5,paddingBottom: 5,borderRight: 'none', marginRight: 0, border: '1px solid lightgray', width: 103 }}><h6 style={{ paddingLeft: 20, fontSize: 15 }}>Total:</h6></div>
              
                <div style={{ paddingTop: 5,paddingBottom: 5,width: 195, border: '1px solid lightgray' }}> <h6 style={{ color: 'green',display: 'flex', justifyContent: 'center', fontSize: 15 }}>${cart.cartItems.reduce((acc, item) => acc + item.cartQuanity * item.price,0)}</h6></div>
              </div>
              <button className='proceedBtn'>Proceed To Checkout</button>
        </div>
           
          </div>
          
        </div>
        
      )}
    </div>
  )
}

export default Cart