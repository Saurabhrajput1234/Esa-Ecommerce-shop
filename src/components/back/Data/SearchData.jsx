import React, { useState, useEffect } from 'react';
import './SearchProduct.css'; // If you have any custom styles
import productsData from './product.json';


function SearchData()  {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch('./product.json'); // Update the URL path as needed
  //     if (!response.ok) {
  //       throw new Error('Failed to fetch products');
  //     }
  //     const data = await response.json();
  //     console.log('Fetched products:', data);
  //     setProducts(data);
  //     setFilteredProducts(data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // };
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = ()=>{
  setProducts(productsData);}

  const handleSearch = () => {
    const newSearchTerm = searchTerm.toLowerCase();
    console.log('Search term:', newSearchTerm);

    if (!newSearchTerm) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(newSearchTerm)
    );
    console.log('Filtered products:', filtered);
    setFilteredProducts(filtered);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {/* <ul>
        {filteredProducts.length === 0 ? (
          window.alert("No products found")
        ) : (
          filteredProducts.map(product => (
            <li key={product.id}>{product.name} <img src={product.image} alt="" />{product.price}</li>
          ))
        )}
      </ul> */}
    </div>
  );
}

export default SearchData;
