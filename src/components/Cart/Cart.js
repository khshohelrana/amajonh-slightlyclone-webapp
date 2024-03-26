import { toBePartiallyChecked } from '@testing-library/jest-dom/matchers';
import React from 'react';
import './Card.css'

const Cart = (props) => {
    const cart= props.cart;
    console.log(cart)
   // const total = cart.reduce((total, prd) => total+prd.price, 0);
   let total=0;
   for(let i=0; i<cart.length; i++){

    const product=cart[i]
    total=total+product.price;
   }

   let shipping =0;
   if(total> 500){
    shipping=0
   }
   else if(total>250){
    shipping=4.50; 
  }
  else if(total>0){
    shipping=10
  }

  const tax = total/10;

    return (
        <div>
           <h4>Order Summary</h4>
            <p>Items ordered: {cart.length}</p>
            <p>Product Price{total}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>Tax + Vat: {tax}</small></p>
            <p>Total Price: {total+shipping+tax}</p>
        </div>
    );
};

export default Cart;