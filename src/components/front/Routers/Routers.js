import React from 'react';
import Products from '../Products/Products';
import Signup from '../Signup/Signup';
import Signin from '../Signup/Signin';
// import Cart from '../Cart/Cart';
import { Route,Routes } from 'react-router-dom';
import Home from '../../Home.js/Home';
import Modal from '../modal/Modal';




const Routers = (props) => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>} />
      <Route path='/Products' element={<Products productItems = {props.productItems} handleAddProduct={props.handleAddProduct}/>} />
        <Route path='/Signup' element={<Signup getData={props.getData}/>} />
        <Route path='/Signin' element={<Signin/>} />
        {/* <Route path='/cart' element={<Cart cartItem = {props.cartItem} handleAddProduct={props.handleAddProduct} handleRemoveProduct={props.handleRemoveProduct} handleCartClear={props.handleCartClear}/>} /> */}
        <Route path='/modal' element={<Modal cartItem = {props.cartItem} handleAddProduct={props.handleAddProduct} handleRemoveProduct={props.handleRemoveProduct} handleCartClear={props.handleCartClear}/>} />

        </Routes>
    </div>
  )
}

export default Routers
