import React from 'react'
import "./Modal.css"
import Cart from '../Cart/Cart';

const Modal = (props) => {
  if(!props.show){
    return null;
  }
  return (
    <> <div 
    className="modal">
     <Cart onClose ={props.onClose} cartItem = {props.cartItem} handleAddProduct={props.handleAddProduct} handleRemoveProduct={props.handleRemoveProduct} handleCartClear={props.handleCartClear}/>
    </div>
      
    </>
  )
}

export default Modal
