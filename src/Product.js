import React from 'react';
import './Product.css';
import { useStateValue } from "./StateProvider";

function Product({id, title,image,price,rating}) {
    const [{basket},dispatch]=useStateValue();

    const addToBasket=()=>{
        dispatch({
          type: "ADD_TO_BASKET",
          item: {
            id: id,
            title:title,
            image:image,
            price:price,
            rating:rating
          },
        });
        //add item to basket
        
    };


    
    return (
        <div className="product">
            <div className="product__info">
            <p>{title}</p>
            <p classNAme="product__price">
                <small>&#x20B9;</small>
                <strong>{price}</strong>
            </p>

            <div className="product__rating">
                {
                    Array(rating)
                        .fill()
                        .map((_)=>(
                        /* eslint-disable */
                            <p >⭐</p>
                        )
                        )
                }
            </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
            
        </div>
    );
}

export default Product
