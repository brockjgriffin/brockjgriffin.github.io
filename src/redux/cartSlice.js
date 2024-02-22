import { createSlice, configureStore } from '@reduxjs/toolkit';
import { addDoc } from 'firebase/firestore';
import { Provider } from 'react';
import { toast } from 'react-toastify'
import { UserAuth } from '../AuthContext';
import { db } from '../config';


const initialState = {
     cartItems: localStorage.getItem('cartItems')
    ? JSON.parse(localStorage.getItem('cartItems'))
    : [],
    
    cartTotalQuanity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuanity += 1
            } else {
                const tempProduct = {...action.payload, cartQuanity: 1}
                state.cartItems.push(tempProduct);
                
            }
            
            
        },
        
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems
  

            
        },

        decreasedCart(state,action) {
            //The index is a number assigned to your products
            //starting from zero. the first product you add
            // to your cart will have the index of 0. the 
            //second product you add will have the index of 1
            //and so on..

            //{itemIndex} goes into state of the cartItems and
            //goes through the cart items in my cart and
            //stores the id of each cart item, which means
            // if you added to 4th product to your cart
            //of the array of products, its id is 4
            //the action carries that info to the store
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            )
            //if 
            if(state.cartItems[itemIndex].cartQuanity >= 1) {
                state.cartItems[itemIndex].cartQuanity -= 1
                

                
                
            } else if (state.cartItems[itemIndex].cartQuanity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                ) 

                state.cartItems = nextCartItems;
                

                
            }  
            
        },

        usersCart(state,action) {
            const collection = state.cartItems`${UserAuth}`
            addDoc(collection(db, collection))
        },

        increasedCart(state,action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            )

            if(state.cartItems[itemIndex].cartQuanity >= 0) {
                state.cartItems[itemIndex].cartQuanity += 1

                
            } 
                
             else if (state.cartItems[itemIndex].cartQuanity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                )

                state.cartItems = nextCartItems;
                

                
            }  
            
        }
        

        
    },
})

export const { addToCart, removeFromCart, decreasedCart, increasedCart } = cartSlice.actions;

export default cartSlice.reducer



