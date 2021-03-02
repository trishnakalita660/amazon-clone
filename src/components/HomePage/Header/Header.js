import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

function Header() {
  return (
    <nav className="header">
      {/*logo and linked to login page*/}
      <Link to="/login">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="img"
        />
      </Link>

      {/*Search bar */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* links  */}

      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Hello, Sign in</span>
            <span className="header__optionTwo">Accounts & Lists</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Returns</span>
            <span className="header__optionTwo">& Orders</span>
          </div>
        </Link>

        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionOne">Try</span>
            <span className="header__optionTwo">Prime</span>
          </div>
        </Link>


      </div>

      {/*cart*/}

      <Link to="/checkout" className="header__link">
      <div className="header__cart">
      <span className=" header__optionTwo header_cartCount">0</span>
      <ShoppingCartIcon/>
      
      </div>
      </Link>

    </nav>
  );
}

export default Header;
