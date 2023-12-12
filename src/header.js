import React from 'react'
import "./header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import {Link} from 'react-router-dom';
import {UseStateValue} from "./stateProvider";
import { auth } from "./firebase";

function Header() {
  const [{basket, user}, dispatch]= UseStateValue();

  const handleAuthentication =() =>{
    if(user)
    {
      auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img 
          className="header_logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" 
          alt="Amazon-logo"
          />
      </Link>      

      <div className="header_search">
        <input className="header_searchInput" type="text"></input>
        <SearchIcon className="header_searchIcon"></SearchIcon>
      </div>

      <div className="header_nav">
        <Link to={ !user && "/login" } > 
          <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionLineOne">Hello Guest</span>
              <span className="header_optionLineTwo" >{user? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header_option">
            <span className="header_optionLineOne">Returns</span>
            <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
            <span className="header_optionLineOne">Your</span>
            <span className="header_optionLineTwo">prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon></ShoppingBasketIcon>
            <span className="header_OptionLineTwo header_basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
