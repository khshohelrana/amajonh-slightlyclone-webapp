import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './product.css'

const Product = (props) => {
   console.log(props) 

   const{img, name, seller, price,stock} = props.product;
    return (
        <div className='product' >
            <div>
            <img className='imgSize' src={img} alt="" />
            </div>
            <div>
            <h4 className='productName'>{name}</h4>
            <br/>
            <p><small>By: {seller}</small></p>
            <p>Price: ${price}</p>
            <br/>
            <p><small>Only {stock} left in stock-Order soon</small></p>
             <button className='orderbutton'
             onClick={()=>props.handleAddProduct(props.product)}
             >
                 <FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>

            </div>
           
        </div>
    );
};

export default Product;