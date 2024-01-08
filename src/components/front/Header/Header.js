import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import { useState } from 'react';
// import SearchData from '../../back/Data/SearchData';

const Header = (props) => 
{
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsNavbarOpen(!isNavbarOpen);
    };
  
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div ><Link to="/" className="navbar-logo">
                E-Sa
            </Link></div>
          <div className={`navbar-links ${isNavbarOpen ? 'active' : ''}`}>
            <a href="/">Home</a>
            <a href="/Products">Product</a>
            <a href="/signup">Signup</a>
            <div  className='/cart' onClick={props.onShow} ><i className='fas fa-shopping-cart addtoCart'/>
                <span className='cart-length'>{props.cartItem.length === 0 ? "": props.cartItem.length}</span>
                
                </div>
            
          </div>
          <div className="navbar-toggle" onClick={toggleNavbar}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    );
  };

export default Header
