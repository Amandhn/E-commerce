import React from 'react'
import "./product.css"
import {UseStateValue} from "./stateProvider";

function Product({id,title,price,image,rating}) {
  const [{basket},dispatch]= UseStateValue();

  console.log('this is the basket >>> ',basket);

  const addToBasket=()=>{
    dispatch({
      type: "ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product_rating">
            {Array(rating)
                .fill()
                .map((_,i)=> (
                    <p>🌟</p>
                ))}            
        </div>        
      </div>

      <img src={image} alt=""></img>

      <buttton className="product_button" onClick={addToBasket} style={{ cursor: 'pointer' }}>Add To Basket</buttton>
    </div>
  );
};

export default Product;
