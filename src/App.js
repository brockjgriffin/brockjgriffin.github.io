import { useState } from 'react';
import Register from './Register';
import Login from './Login';
import Cart from './Cart';
import Home from './Home';
import Pages from './Pages';
import Shopping from './Shopping';
import Items from './Items';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
  useLocation
} from "react-router-dom";
import { AuthContextProvider } from './AuthContext';
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import NavbarDeal from './NavbarDeal';


function App() {
  const withoutNav = ['/shopping', '/register', '/login', '/cart']
  const { pathname } = useLocation()


  return (
    
    <div className="app">
      
      <AuthContextProvider>
      <ToastContainer />
   
      
      { pathname === '/register' || pathname === '/login' ?  null : <NavbarDeal text='get 50 off' /> }
      { pathname === '/register' || pathname === '/login' ?  null : <Navbar /> }
      
        
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route path='/shopping' element={<Shopping />} />
        <Route path='/items' element={<Items />} />

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        

      </Routes>
      </AuthContextProvider>
      
    </div>
    
  );
}

export default App;
