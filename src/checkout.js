import React from 'react'
import './checkout.css';
import Subtotal from "./subtotal";
import { UseStateValue } from "./stateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() { 
  const [{basket, user}, dispatch]= UseStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_ad" src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/LATV/1071374_750x200_7._V515060851_.jpg" alt=""></img>
        
        <div>
          <h3>{user?.email}</h3>
          <h2 className="checkout_title"> Your Shopping basket</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
