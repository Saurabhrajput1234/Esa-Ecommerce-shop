import React from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
import SearchData from '../../back/Data/SearchData';

const Header = (props) => {
  return (<div className='header'>
    <div>
        <h1>
            <Link to="/" className='logo'>
                E-Sa
            </Link>
        </h1>
    </div>
    <div className="header-links">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
        </ul>
        <ul>
            {/* <li>
            <SearchData/>
            </li> */}
        </ul>
        
        <ul>
            <li>
                <Link to="/Products">Product</Link>
            </li>
        </ul>
        <ul>
            <li>
                <Link to="/signup">Signup</Link>
            </li>
        </ul>
        <ul>
            {/* <li>
                <Link to="/cart" className='cart'><i className='fas fa-shopping-cart'/>
                <span className='cart-length'>{props.cartItem.length === 0 ? "": props.cartItem.length}</span></Link>
            </li> */}
            <li>
            
                <div  className='/cart' onClick={props.onShow} ><i className='fas fa-shopping-cart'/>
                <span className='cart-length'>{props.cartItem.length === 0 ? "": props.cartItem.length}</span>
                
                </div>
            </li>
        </ul>

    </div>
    </div>
  )
}

export default Header
