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
    initialState,
    reducers: {
        addToCart(state, action) {
            const itemIndex = state.cartItems.findIndex(
                (item) => item.id === action.payload.id
            );
            if(itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuanity += 1
                toast.info(` increased ${state.cartItems[itemIndex].title} cart quanity`, {
                    position: 'bottom-left'
                })
            } else {
                const tempProduct = {...action.payload, cartQuanity: 1}
                state.cartItems.push(tempProduct);
                toast.success(`${action.payload.title} to cart`, {
                    position: 'bottom-left'
                })
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))
            
        },
        
        removeFromCart(state, action) {
            const nextCartItems = state.cartItems.filter(
                (cartItem) => cartItem.id !== action.payload.id
            )
            state.cartItems = nextCartItems
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems))

            toast.success(`${action.payload.title} removed from cart`, {
                position: 'bottom-left'
            })
        },

        decreasedCart(state,action) {
            const itemIndex = state.cartItems.findIndex(
                (cartItem) => cartItem.id === action.payload.id
            )

            if(state.cartItems[itemIndex].cartQuanity >= 1) {
                state.cartItems[itemIndex].cartQuanity -= 1
                

                toast.info(`Removed${action.payload.title}`, {
                    position: 'bottom-left'
                })
                
            } else if (state.cartItems[itemIndex].cartQuanity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                ) 

                state.cartItems = nextCartItems;
                

                toast.success(`${action.payload.title} Removed from cart`, {
                    position: 'bottom-left'
                }) 
            }  
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); 
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

                toast.info(`increased${action.payload.title}`, {
                    position: 'bottom-left'
                })
            } 
                
             else if (state.cartItems[itemIndex].cartQuanity === 1) {
                const nextCartItems = state.cartItems.filter(
                    (cartItem) => cartItem.id !== action.payload.id
                )

                state.cartItems = nextCartItems;
                

                toast.success(`${action.payload.title} Removed from cart`, {
                    position: 'bottom-left'
                }) 
            }  
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems)); 
        }
        

        
    },
})

export const { addToCart, removeFromCart, decreasedCart, increasedCart } = cartSlice.actions;

export default cartSlice.reducer



