import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Register from './Register';
import Login from './Login';
import Cart from './Cart';
import Home from './Home';
import Pages from './Pages';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import productsReducer from './redux/productsSlice';
import cartReducer from './redux/cartSlice'
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
      products: productsReducer,
      cart: cartReducer
  },
  
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
    </BrowserRouter>
  
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
