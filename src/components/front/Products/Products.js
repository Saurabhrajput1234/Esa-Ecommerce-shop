import React from 'react';
import "./Products.css";




const Products = (props) => {
    const product =(props.productItems)
    
  return (<>


    <div className='products'>
        {product.map((productItem) =>(
            <div key={productItem.id} className="card">
                <div>
                <img className="card-image" src={productItem.image} alt={productItem.name} />
                </div>
                <div>
                  <h3 className='product-name'>{productItem.name}</h3>
                </div>
                <div>
                  <h3 className='product-price'>${productItem.price}</h3>
                </div>
                <div>
                  <button className='product-add-button'onClick={()=> props.handleAddProduct(productItem)}>add to Cart</button>
                </div>
            </div>
        ))}
        </div>
        
        </> 
  )
      }
    export default Products;




