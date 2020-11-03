import React from 'react';
import './Product.css';

function Product({ id, title, image, price, rating }) {
    // const [{basket},dispatch]=useStateValue();

    // const addToBasket=()=>{
    //     dispatch({
    //       type: "ADD_TO_BASKET",
    //       item: {
    //         id: id,
    //         title:title,
    //         image:image,
    //         price:price,
    //         rating:rating
    //       },
    //     });
    //     //add item to basket

    // };



    return (
        <div className="product">
            <img className="product__img" src={image} alt="" />

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
                            .map((_) => (
                                /* eslint-disable */
                                <p >⭐</p>
                            )
                            )
                    }
                </div>
                <a href="/chat"><button className="chatbutton product__button">Chat</button></a>

            </div>

        </div>
    );
}

export default Product