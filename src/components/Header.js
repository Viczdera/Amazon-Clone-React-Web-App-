import React from "react";
import logo_r from "../assets/logo_r.png";
import "./Header.css";
import { ShoppingBasket, Search } from "@material-ui/icons";
function Header() {
  return (
    <div className="header">
      <img className="headerLogo" src={logo_r} />

      {/*search bar*/}
      <div className="headerSearch">
        <input className="headerSearchinput" type="text" />
        <Search className="headerSearchIcon" />
      </div>

      <div className="headerNav">
        <div className="headerOption">
          <span className="hOLineone">Hello Dex</span>
          <span className="hOLinetwo">Sign in</span>
        </div>

        <div className="headerOption">
          <span className="hOLineone">Returns</span>
          <span className="hOLinetwo">Orders</span>
        </div>
        <div className="headerOption">
          <span className="hOLineone">Your</span>
          <span className="hOLinetwo">Prime</span>
        </div>
        <div className="headerOptionbasket">
          <ShoppingBasket className="headerShoppingbasket" />
          <span className="headerBasketcount hOLineTwo">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
