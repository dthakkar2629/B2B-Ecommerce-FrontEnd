import React, { useState, useEffect } from 'react'
import Product from '../Product/Product.js'
import "./LandingPage.css";
import home_banner from '../../../static/Img/home_banner1.jpg'
import axios from 'axios';

export const LandingPage = ()=> {

  const [rating, setRating] = useState(0)
  // const flask_serevr = 'http://localhost:5000'
  
  useEffect(()=> {
    axios.get('http://localhost:5000/')
    .then(res => {
      console.log(res.data.x);
      setRating(res.data.x)
    })
    .catch(err => {
      console.log(err);
    })
  }, []);

  
    return (
        <div className="home">
          <img
            className="home__img"
            src={home_banner}
            alt=""
          />
                  
          <div className="home__row">
            <Product
              id="876796"
              title="OnePlus Y Series"
              price={85000}
              rating={rating}
              image="https://m.media-amazon.com/images/I/81RhUZoFGUL._AC_UY327_FMwebp_QL65_.jpg"
            />
          </div>
        </div>
      );
  }