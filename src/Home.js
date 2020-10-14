import React from 'react'
import Product from './Product.js'
import "./Home.css";
import home_banner from './static/Img/home_banner1.jpg'

function Home() {
    return (
      <div className="home">
        <img
          className="home__img"
          src={home_banner}
          alt=""
        />
        <div className="home__row">
          <Product
            id="1231241"
            title="Philips BT3102/15 cordless rechargeable Beard Trimmer - 10 length settings, 60 min run time"
            price={11.96}
            rating={5}
            image="https://www.reliancedigital.in/medias/Philips-BT3102-15-Shaver-and-Trimmers-491891822-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2MDY1NHxpbWFnZS9qcGVnfGltYWdlcy9oYjQvaGYyLzkzMzI2NjI5MjczOTAuanBnfGFhYTE0MDQ5YjQ1ZGE1NTgyNDc2ZjAyY2Q4NmEyZjQwZGRiYzk0NjdhYjJiODBlYTE2NzQ5NTZkZTc1Y2RiODE"
          />

          <Product
            id="123132"
            title="Presidential Rolex"
            price={100000}
            rating={5}
            image="https://m.media-amazon.com/images/I/51EX7ZKVBnL.__AC_SY200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="7474764"
            title="Superman Bracelet"
            price={200}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41THtvfJqYL._AC_SY200_.jpg"
          />

          <Product
            id="64354"
            title="AMD Ryzen 3 3200G"
            price={200000}
            rating={5}
            image="https://m.media-amazon.com/images/I/710U2ZVk31L._AC_UY327_FMwebp_QL65_.jpg"
          />

          <Product
            id="3342527"
            title="XMate Zorro Pro"
            price={3500}
            rating={5}
            image="https://m.media-amazon.com/images/I/61hWxojkTmL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="876796"
            title="OnePlus Y Series"
            price={85000}
            rating={5}
            image="https://m.media-amazon.com/images/I/81RhUZoFGUL._AC_UY327_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    );
}

export default Home
