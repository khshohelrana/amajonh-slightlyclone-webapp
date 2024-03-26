import React from 'react';
import { useState, useEffect, slice } from 'react';
import Product from '../Product/Product';
import './Shop.css' ;
import Cart from './../Cart/Cart';


const Shop = () => {
   //const first20 = data.slice(0, 20);
    const [data, setData] = useState(10);

  const[ cart, setCart] = useState([]);
  
    const handleAddProduct= (product)=>{

      //console.log('product added', product)
      const newCart= [...cart, product];
      setCart(newCart)
    }

  useEffect(()=>{

    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(response => response.json())
   .then(json => setData(json))
    

  }, []);

    return (
        <div className='shop-container'>
           
           <div className="product-container">
           
           {
            data.map(data => <Product 
              handleAddProduct={handleAddProduct}
              product={data}>       
              </Product> )
            }
          
           
           </div>
           <div className="cart-container">
           
           <Cart cart={cart} ></Cart>

           
            
             </div>
          
        </div>
    );
};

export default Shop;