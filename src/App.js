import React,{useState,useEffect} from "react";
import data from "./components/back/Data/Data";
import Header from "./components/front/Header/Header";
import Routers from "./components/front/Routers/Routers";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/front/Footer/Footer";
// import SearchData from "./components/back/Data/SearchData";
import Modal from "./components/front/modal/Modal";
// import Cart from "./components/front/Cart/Cart";



 




const App = (props)=>{
  
    
 const [show,setShow]= React.useState(false)

 
  const productItems = data;
 const [cartItem,setCartItems] = useState([])
 const handleAddProduct = (product) =>{
  const productExist = cartItem.find((item)=> item.id === product.id);
  if(productExist){
    setCartItems(
      cartItem.map((item)=>
      item.id === product.id ? {...productExist,quantity:productExist.quantity+1}:item
      )
    );
  }else{
    setCartItems([...cartItem,{...product,quantity: 1}]);
  }
 }


const handleRemoveProduct =(product)=>{
  const productExist = cartItem.find((item)=> item.id === product.id);
  if(productExist.quantity ===1){
    setCartItems(cartItem.filter((item)=> item.id !== product.id));
  }
  else
  setCartItems(
    cartItem.map((item)=>
    item.id === product.id ? {...productExist,quantity:productExist.quantity-1}:item
    )
  );
}
const handleCartClear = ()=>{
  setCartItems([]);
}
  
  return (<>
  <div>
    <div id="signInDiv"></div>

    <Router>
      
    
      
    <Header cartItem={cartItem} onShow = {()=> setShow(true)} />
    <Routers  show = {show} productItems={productItems}  cartItem={cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}/>
    <Modal show = {show} onClose = {()=> setShow(false)}   cartItem = {cartItem} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClear={handleCartClear}>
      
    </Modal>
    <Footer/>
    

    {/* <SearchData/> */}
    
    </Router>
    
 
  </div>

  </> 
  );
}

export default App;
