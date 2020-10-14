import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvider";

import logo from './static/Img/logo.PNG';

function Header() {
  const [{basket}] = useStateValue();
  console.log(basket);

    return (
      <nav className="header">
        <Link to="/">
          <img
            className="header__logo"
            src={logo}
            alt=""
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
           <Link to="/Login" className="header__link">
           <div className="header__option">
              <span className="header__option1">Hello </span>
              <span className="header__option2" >Sign in</span>
           </div>           
           </Link>


          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__option1">Returns </span>
              <span className="header__option2">& Orders</span>
            </div>
          </Link>


          <Link to="/" className="header__link">
            <div className="header__option">
              <span className="header__option1">Your </span>
              <span className="header__option2">Prime</span>
            </div>
          </Link>


          <Link to="/checkout" className="header__link">
            <div className="header__optionB header__option2">
              <ShoppingBasketIcon />
              <span className="basket__count">{basket.length}</span>
            </div>
          </Link>
          
        </div>
      </nav>
    );
    
    
    
}

export default Header
